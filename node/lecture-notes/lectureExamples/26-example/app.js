const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser')
const app = express();


app.use(bodyParser.urlencoded({extended: false}))


app.get('/', (req, res)=>{
    fs.readFile('notes.txt', (err, data) => {
        res.json(data)
    });
});

app.post('/', (req, res)=>{
    fs.writeFile('notes.txt', req.body.note, (err) => {
        res.json('OK')
    });
});

app.listen(8080);

/*

Above

If done like above, you cannot write many test cases at all. Also you are mixing up all of the npm packages
Mix up express and read write file
if you want to test if the reading and writing is working correctly, is that relevant to express? not really, so it makes app.post /app.get are not linked to if the note is written or not.

But we just learnt express last week so we dont know this.

But read and write fs is a little simpler, so if we can break down the program, break it into three parts

note service will deal with fs.read/write files
with will be a class like in exercism, with three methods or more 
list note
add note
remove note

we have to write the test cases for these methods, when you first initalise the app you can test list note, we expect there to be no notes.
when you use add note you can then expect there to be one note in the app
if you add another you can expect there to be two notes.
if you delete your first note then you can expect there to be one note left

after you pass these exercism cases, then you test goto your next module, express
So long as you are familiar with the syntax you can understand how the rest cases will work
app.post
app.get
how app.use(bodyParser) works
res.end
res.json

This allows for unit testing as you have modualised your test cases

router service will handle the express app.post/get
app.js servers the website and the server


do
npm init
add index.js
jasmine init

TDD test driven is a good but hard was of doing it, write the tests first as you know what you need to do in your application, if you have a great idea of what you're developing, you will have good specifications for exactly what you need.

For our example, we know we need noteservices noterouter and our index/app.js

So we can write our noteServices.spec.js
*/