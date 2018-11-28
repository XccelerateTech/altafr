//require all packages and then unpack them in the necessary way

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const expressSession = require ('express-session')

const fs = require('fs');
const https = require('https');

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;

const redis = require('redis');
const RedisStore = require('connect-redis')(expressSession);
const socketIOSession = require('socket.io.session');

require('dotenv').config()

const chatroomName = process.env.CHATROOM_NAME

const redisClient = redis.createClient({
  host: 'localhost',
  port: 6379,
  auth: 'test123'
});

const sessionStore = new RedisStore({
  client: redisClient,
  unset: 'destroy'
});

const settings = {
  store: sessionStore,
  secret: 'supersecret',
  cookie: {"path": '/', "httpOnly": true, "secure":false, "maxAge": null}
}

app.use(expressSession(settings));

const options = {
    cert: fs.readFileSync('./localhost.crt'),
    key: fs.readFileSync('./localhost.key')
  };
  
const server = https.createServer(options, app);
const io = require('socket.io')(server);
io.use(socketIOSession(settings).parser);

function isLoggedIn(req, res, next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect('/login');
}

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done)=>{
  done(null, user);
});

passport.deserializeUser((user, done)=>{
  done(null, user);
})

passport.use(new FacebookStrategy({
  clientID: process.env.FACEBOOK_ID,
  clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
  callbackURL: `/auth/facebook/callback`
}, (accessToken, refreshToken, profile, cb)=>{
  return cb(null,{profile: profile, accessToken: accessToken});
}
));

app.get('/auth/facebook/callback', passport.authenticate('facebook', {failureRedirect:'/login'}),
function (req, res){

  //successful authentication.... redirection to home/ secret page 
  res.redirect('/')
})

app.use(express.static(__dirname + '/public'));

app.get('/login', (req,res)=>{
  res.sendFile(__dirname + '/views/login.html');
});

app.get('/', isLoggedIn, (req, res)=>{
  console.log('This is from express ', req.user);
  res.sendFile(__dirname + '/views/index.html');
});




const SocketRouter = require('./socketRouter');
const socketRouter = new SocketRouter(io, redisClient, chatroomName);
socketRouter.router();


server.listen(8080);
