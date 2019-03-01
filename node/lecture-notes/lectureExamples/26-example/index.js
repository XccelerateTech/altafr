let express = require('express')
const NoteService = require('./noteService')
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.urlencoded({extended:false}))
const noteService = new NoteService()

app.get('/', (req, res) => {
    res.json(noteService.listNote())
})

app.post('/', (req,res) => {
    noteService.addNote(req.body.content)
    res.json('ok')
})

app.post('/insert', (req,res) => {
    noteService.insertNote(req.body.index, req.body.content)
    res.json('ok!!')
})




app.listen(8080);

//manual test to see if it works, not intergration test. 
//use postman to manually test - post to local host.
//post method goto body and make sure you ahev body parseer
//use URL encoded nothing else for now, not form data. this is because of req.body.content not form data. its the content of the request we make. content will be the key!!!!!

//refresh to reload

//now we have confidence that it works correctly, if you need to change anything like an insert
// then we willl need to do more test cases. deal with ntoe services first 