// requireing neccessary modules
const express = require('express');
const bodyParser = require('body-parser');
const expressSession = require('express-session');

const https = require('https');
const fs = require('fs')
require('dotenv').config()

//require and setting up passport
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;

//unpack express and use body parser
const app = express()

const redis  = require('redis');
const RedisStore = require('connect-redis')(expressSession);
const socketIOSession = require("socket.io.session");

const redisClient = redis.createClient({
    host : 'localhost',
    port : 6379,
    auth_pass: 'test123'
});


//array of users, in your projects you will use knex. 
const users = [
    {
        id: 0,
        email: 'tom@tom.com',
        password: '34b7da764b21d298ef307d04d8152dc5'
    },{
         id: 1,
        email: 'peter@peter.com',
        password: '51dc30ddc473d43a6011e9ebba6ca770'
    }
]

//set up expressSession which verifies and tell use which user is which
// app.use(expressSession({
//     secret: 'supersecret'
// }));

const sessionStore = new RedisStore({
    client: redisClient,
    unset: "destroy"
});
const settings = {
    store: sessionStore,
    secret: "supersecret",
    cookie: { "path": '/', "httpOnly": true, "secure": false,  "maxAge": null }
}

app.use(bodyParser.urlencoded({extended: false}));
app.use(expressSession(settings));


//tell express to use passport
app.use(passport.initialize());
app.use(passport.session());


//defining our local login strategy
passport.use('local-login', new LocalStrategy(
     (email, password, done) => {
        try{
            let userResult = users.filter(user => user.email === email);
            if (userResult.length == 0) {
                return done(null, false, { message: 'Incorrect credentials.' });
            }
            let user = users[0];
            if (user.password === password) {
                return done(null, user);
            }else{
                return done(null, false, { message: 'Incorrect credentials.' });
            }
        }catch(err){
            return done(err);
        }
    }
));

//actual facebook strategy
passport.use('facebook', new FacebookStrategy({
    clientID: process.env.FACEBOOK_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: `/auth/facebook/callback`
},(accessToken, refreshToken, profile, done)=>{
    console.log(profile)

    let userResult = users.filter(user => user.facebookID === profile.id)
    if(userResult ==0){
        let user = {
            id: users.length ++,
            facebookId: profile.id,
            email: profile.displayName,
            accessToken: accessToken
        }
        users.push(user)
        done(null, user);
    } else {
        done(null, userResult[0])
    }
    }
)); 

//stores the user.id into the session store.
passport.serializeUser((user, done) => {
    done(null, user.id);
});

//unpacking the user so that we know who's information to send.
const deserializeUser = ((id, done) => {
    let userResult = users.filter(user=> user.id === id)
    if (userResult.length == 0) {
        return done(new Error(`Wrong user id ${id}`));
    }
    let user = userResult[0];
    return done(null, user);
});

passport.deserializeUser(deserializeUser)

// this is middleware to protect our routes.
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }

    res.redirect('/login');
}

//only protected route. 
app.get('/', isLoggedIn, (req,res)=>{
    res.sendFile(__dirname + '/index.html');
})

app.get('/error', (req,res)=>{
    res.send('You are a failure.')
})

app.get("/auth/facebook",passport.authenticate('facebook',{
    scope: ['user_friends', 'manage_pages'] 
}));

app.get("/auth/facebook/callback",passport.authenticate('facebook',{
    failureRedirect: "/error"
}),(req,res)=>res.redirect('/'));

//login page. route
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});

app.post('/login', passport.authenticate('local-login', {
    successRedirect: '/',
    failureRedirect: '/error'
}));

//options for https
const options = {
    cert: fs.readFileSync('./localhost.crt'),
    key: fs.readFileSync('./localhost.key')
  };

  //set up our server with https and the certs/express
const server = https.createServer(options, app);

//all the logic for our chatroom and socket.io
const io = require('socket.io')(server);
io.use(socketIOSession(settings).parser);

io.use((socket, next)=>{
    if(!socket.session.passport){
        socket.emit('unauthorized')
        socket.disconnect();
    }else{
        deserializeUser(socket.session.passport.user, (err, user)=>{
            socket.user = user;
    
           next();
        });
    }
});

io.on('connection', function(socket){
    socket.on('disconnect', ()=> console.log(socket.user.email + ' has left us'));
        console.log(socket.user.email + ' has joined our room.')
        socket.on('chat message', function(msg){
      console.log(socket.user.email + 'message: ' + msg);
      io.emit('chat message', socket.user.email + ' : ' + msg);
    });
  });

  //server listening the current port. 
server.listen(3000);
