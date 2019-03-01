const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

//middleware
app.use(bodyParser.urlencoded({extended: false})); //check documentation to show how it is used. 
// grabs the HTTP request body and parses it, like JSON.parser
app.use(cookieParser());


//route handlers
app.get('/', function(req,res){ //the '/' corresponds to nothing
    res.end('Hello World!');
});

// one methods
app.get('/hong-kong', function(req,res){ //the '/' corresponds to nothing
    console.log(req.query);
res.end(`Hello Hong Kong! I am ${req.query.name}, I am ${req.query.age} years old.`);
});    
//another method
app.get("/hong-kong/:name/:age", (req,res)=>{ //no query string
    let {name,age} = req.params; //differnt to query
    res.end(`Hello Hong Kong! I am ${name}, I am ${age} years old.`);
//easier method to grab data.
// let {name,age} = req.query;

    console.log(name, age)

});

app.post('/xccelerate', (req, res)=>{
    let {name,age} = req.body; //differnt to query string
    console.log('Cookies: ' , req.cookies);
    res.end(`Hello Xccelerate! I am ${name}, I am ${age} years old.`);
})

app.listen(8080, ()=>{
    console.log('Application started at 8080')
})

//or

/*
app.get('/', (req,res)=>{


    use res.end to end the response.
})*/ 