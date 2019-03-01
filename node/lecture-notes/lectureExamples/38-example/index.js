const express = require('express');
const bodyParser = require('body-parser');
const expressSession = require('express-session')
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const app = express()

const users = [
    {
        id: 0,
        email: 'tom@tom.com',
        password: 'tom'
    },{
         id: 1,
        email: 'peter@peter.com',
        password: 'peter'
    }
]

app.use(bodyParser.urlencoded({extended: false}))
app.use(expressSession({ secret : 'superSecret' }));



app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    let userResult = users.filter(user=> user.id === id);
    if (userResult.length == 0) {
        return done(new Error(`Wrong user id ${id}`));
    }
    let user = users[0];
    return done(null, user);
});


passport.use('local-login', new LocalStrategy(
        async (email, password, done) => {
            try{
                let userResult = users.filter(user => user.email === email)
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

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }

        res.redirect('/login');
    }

    app.get('/', isLoggedIn, (req, res)=>{
        res.send('YES successful login' + req.user.email);
    });

    app.get('/error', (req, res)=>{
        res.send('You have failed....');
    });

    app.get('/login', (req, res)=>{
        res.sendFile(__dirname + '/login.html')
    });

    app.post('/login', passport.authenticate('local-login', {
        successRedirect: '/',
        failureRedirect: '/error'
    }));


app.listen(3000)