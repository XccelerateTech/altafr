const NoteService = require('../NoteService')
const fs = require('fs')

/* what we show first 
describe('Testing note service', () => {

    //at the start when we just copy it it doesnt expect anything....
    it('lists all notes', () => {

        const noteService = new NoteService();
        noteService.listNote().then((result) => {
            console.log(result); // should return []
        }).catch((err) => {
            console.log(err);
        });
    });


});


change from console.log to expect. that is the main idea. 
we use promise, not call back here
jasmine in this style cannot asynchronous code - it wont know if the code is finished or not but we can do something.


in the function we should accept the done parameter called done on line 30, this will allow it to become an asynchronous test case. 
then we call done in the resolved block
we do not expect our code to goto our catch error ever. so we can add done.fail(err)

now run the rest cases. jasmine - this will cause a failure! but you can fix this bug, otherwise its okay
if you fail first, its a good thing! we are actually checking fail senario - so now we can fix any problems in our code, failed test cases are good!

the error is caused as we dont have utf-8 in our class. 
*/

//When we actually want them to know the syntax with promise

describe('Testing note service', () => {

    /* 

this is added later

before each test case here, we redefine the test.json, we call it again as an empty array like a reset button
so it always starts from scratch
*/
    beforeEach(function () {
        if (fs.existsSync('test.json')) {



            fs.unlinkSync('test.json');
        }

        fs.writeFileSync('test.json', '[]');
    });

    it('lists all notes', (done) => {


        const noteService = new NoteService('test.json'); //add 'test.json' near the end
        noteService.listNote().then((result) => {
            expect(result).toEqual([]);
            // add second done();
            done()
        }).catch((err) => {
            console.log(err);
            // add third done.fail(err); 
            done.fail(err)
        });
    });

    it('Will add notes using addNotes', function (done) { //the done is the callback that will tell jasmine when we have finished writing the note to the Json file and when we have finished reading the same note we have just written => advanced style of promises. 
        const noteService = new NoteService('test.json');
        noteService.addNote('test').then(() => {
            return noteService.listNote();
        }).then((result) => {
            expect(result).toEqual(['test']);
            done();
        }).catch((err) => {
            done.fail(err);
        });
        /* In this test case we use .then to chain a promise into the pervious function ( we call a promise, which in turn calls another promise) only after the first promise is complete, then you have another then after, now we can expect a result(as we are listing the notes, then you must have a catch at the end of the promise chain
            the two promises are addNote then listNote, each one is chained by a .then() so that we get results
            
            */
  });
        it('can add more than one note, using addNote', function (done) {
            //logic for it -- this is the challenge for the students
            //create the NoteService
            //add one note
            //then, add another note
            //then, list the notes, expect 2 notes.
            //given the original test case it will fail.
            //20 minutes.
            //below is the failing testcase  /*Expected $.length = 1 to equal 2. Expected $[0] = 'SUPER' to equal 'testing'. Expected $[1] = undefined to equal 'SUPER'.Stack:Error: Expected $.length = 1 to equal 2.Expected $[0] = 'SUPER' to equal 'testing'.Expected $[1] = undefined to equal 'SUPER'. You can see the error in the test.json, only one of the notes was added..... oh no!            so our error here is essentially saying that the we are meant to have two but we only have one note so there must be somthing wrong in our implemenation of the methods.                                                */
            const noteService = new NoteService('test.json');
            noteService.addNote('testing').then(() => {
                return noteService.addNote('SUPER').then(() => {
                    return noteService.listNote();
                }).then((result) => {
                    expect(result).toEqual(['testing', 'SUPER']);

                    done();
                }).catch((err) => {
                    done.fail(err)
                })
            })

        })

        //this is added at the very end!
        it('adds notes before lsiting notes while having previous notes', function(done){
            const noteService = new NoteService('test.json');
            noteService.addNote('test').then(( )=>{
                const noteService2 = new NoteService('test.json');
                return noteService2.addNote('test2').then(()=>{
                    return noteService2.listNote();
                }).then((result)=>{
                    expect(result).toEqual(['test', 'test2']);
                    done();
            }).catch((err)=>{ //we have two catch blocks this catch wil ensure the current block doesnt break
                done.fail(err);
            }).catch((err)=> { //the last is so it all doesnt break
                done.fail(err);
            });

            });

        });

  


});