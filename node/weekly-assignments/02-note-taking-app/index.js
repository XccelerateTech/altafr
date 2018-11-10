// require all the libraries and modules we need.
const express = require('express');
const fs = require('fs');
const path = require('path');
const hb = require('express-handlebars');
const basicAuth = require('express-basic-auth');
const bodyParser = require('body-parser');

//set up the packages properly (express, etc)
const app = express();

//get all the other required modules that we have made.
const config = require('./config.json')[process.env.NODE_ENV || 'development'];
const AuthChallenger = require('./AuthChallenger');
const NoteService = require('./NoteService');
const NoteRouter = require('./NoteRouter');

//set up our handlebars, as well as our view engine() - essentially saying that this application will use handlebars
//This was done in the config.json in the NodeExmaples. 
app.engine('handlebars', hb({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//tell express to serve this directory
//tell express to use bodyParser and BasicAuth etc
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended:false}));
app.use(bodyParser.json());


app.use(basicAuth({
    authorizer: new AuthChallenger(JSON.parse(fs.readFileSync(path.join(__dirname, config.users)))),
    challenge: true,
    realm: 'Note Taking application'
}));

// create a new instance of noteService and pass the directory and file you want to write and read from. 
let noteService = new NoteService(path.join(__dirname, config.notes));

//handle initial get request
app.get('/', function (req, res, next){
    console.log('getting')
    next()
});

app.get('/', (req,res)=>{
    noteService.list(req.auth.user).then(function(notes){
    res.render('index', {
        user: req.auth.user,
        notes: notes

    });
});
})


//Set up the NoteRouter (the ability to get your notes to the right location)
app.use('/api/notes', (new NoteRouter(noteService)).router());


//Set up the port that we are going to be running our application off. 
app.listen(config.port, ()=> console.log(`Notes Taking listening on port ${config.port}`));

module.exports = app;

