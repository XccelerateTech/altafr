const fs = require('fs');


/* 
code before dependency injection
class NoteService {
    listNote(){
        return new Promise(function (resolve,reject){
            fs.readFile('notes.json', 'utf-8', (err,data)=>{
                if(err){
                    reject(err);
                    return;
                }
                resolve(JSON.parse(data));
            });
        });
    }

    addNote(note){
        return new Promise (function (resolve,reject){
            fs.writeFile('note.json', JSON.stringify([note]), (err) =>{
                if(err){
                    reject(err);
                    return;
                }
                resolve();
            });
        });
    }
}



*/


class NoteService {
    constructor(filename) {
        this.filename = filename;
        //this.notes = []; non perfect method.

        //do ensure it works we will use a promise
        // this.notes = [];
        // this.listNotePromise = this.listNote();

    }
    /*   this is added in last with this fs.readFile:
   
       fs.readFile(this.filename, 'utf-8', (err, data) => {
   
           same as 
   
           fs.writeFile(this.filename, JSON.stringify([note]), (err) => 
       
       */
    listNote() {
        return new Promise((resolve, reject) => {
            fs.readFile(this.filename, 'utf-8', (err, data) => { //dont add utf-8 straight away
                if (err) { //handle any error
                    reject(err);
                    return;
                }
                resolve(JSON.parse(data)); //we turn promise from pending state to resolved state (when is has finished reading the File) after the resolve, we give it a call back look at the .then in appeneded to the listNote() method below so that we can use the data. --creates the future of the method list note. 

            });
        });
    };

    /*
    Add note will need a parameter or an input of the note you want to add. also async so we use promise
    */
    addNote(note) {
        return new Promise((resolve, reject) => {
            //for end code wrap in the listNotePromise ==> only if this works run this.
            //this.listNotePromise.then(() => {

                //this.notes.push(note);
                fs.writeFile(this.filename, JSON.stringify([note]), (err) => {
                    if (err) {
                        reject(err);
                    }
                    resolve();
                });
            });



        //});
        /*
        This addNote is not the best due to fact we are just asking for a note every time you call, then we only write origional notes, we need to change the implementation so that we can save the previous notes
        
        we need to change add note and list note!
        
        change how we resolve in list note - 
        this.note = JSON.parse(data);
        resolve(this.notes)
        
        in add note we add these lines
        this.notes.push(note);
        fs.writeFile(this.filename, JSON.stringify(this.notes), (err) => {
            .....
        })
        
        
        when we try to list the notes, we save the information in a cache an object that is hidden, then when we add the note we push the new note to the caches file, so that now we can list both notes
        might throw an error - we must list the notes first!
        add it to the constructor this.notes = [];
        
        now we can pass
        
        */
    }
    removeNote() {

    }


}

// const noteService = new NoteService();
// noteService.listNote().then((result)=>{
//     console.log(result);
// }).catch((err)=>{ // this allows us to handle the rejection properly. 
// console.log(err);
// }); --> will be copied into the noteService.Spec.js show them during the first bits.
//if we test this it will return undefined. (without the catch error)


/*
Here I am listing and making three mehtods, but you can have many may more
such as insert note
clear all notes
edit note 
this is a class so that we can add and remove not from a file
readfile is asynchronous so we should use a new promise so that we are resolving with the data - we can use .then to get this data and use is somewhere.

the promise is an object of the future, allowing the use of .then () so we can recieve results from the future that are not generated yet - we set up how we handle the information, the .then() is fired once the promse resolves with the data. 
-- basic flow. 

one bit of code at a time. 

will throw and error as we havent made our note.json

show them first method and testing code

Also show them app NoteService.js - this will allow us to see the buffer of notes.json
 then make the NoteService.spec.js inside the spec file of jasmine.
*/

module.exports = NoteService;


/* ending code 

const fs = require('fs');

class NoteService {
    constructor(filename){
        this.filename = filename;
        this.notes = [];
        this.listNotePromise = this.listNote();

    }
listNote() {
        return new Promise( (resolve, reject) =>{
            fs.readFile(this.filename, 'utf-8', (err, data) => { //dont add utf-8 straight away
                if (err) { //handle any error
                    reject(err);
                    return;
                }
                this.notes = JSON.parse(data);
resolve(this.notes)

            });
        });
    };
addNote(note) {
        return new Promise((resolve, reject) => {
 this.listNotePromise.then(()=>{

 this.notes.push(note);
            fs.writeFile(this.filename, JSON.stringify(this.notes), (err) => {
                if (err) {
                    reject(err);
                }
                resolve();
            });
            });


           
        });
}
    removeNote() {

    }


}


*/
