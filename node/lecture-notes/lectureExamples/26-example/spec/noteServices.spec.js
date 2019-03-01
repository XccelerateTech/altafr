// here is the syntax for the test cases, we will leanr bit by bit, in this catergory we do certain things (list or edit or add) we define a callback to get the data

//it is an individual test case - create a new class like exercism

/*If you have a clear idea of what you need to do in your program it makes it easier to write cases 
Show them the first two test cases, then we can do it the easier way

make the app then make the test cases this is ususal.

*/

const NoteService   = require('../NoteService')

describe('NoteServices', function () {

    it('listNote', function () {
        const noteService = new NoteService()
        let notes = noteService.listNote()
        expect(notes).toEqual([])
    })

    it('addNote', function(){
        const noteService = new NoteService()
        notes = noteService.listNote()
        expect(notes).toEqual([])

        noteService.addNote('my first note');
        notes = noteService.listNote()
        expect(notes).toEqual(['my first note'])
    })

    it('insertNote', function(){
        const noteService = new NoteService()
        notes = noteService.listNote()
        expect(notes).toEqual([])

        noteService.addNote('my first note');
        notes = noteService.listNote()
        expect(notes).toEqual(['my first note'])

        noteService.insertNote(0, 'real first note'); //0 is the index
        notes = noteService.listNote()
        expect(notes).toEqual(['real first note, my first note']) // generate a new expected result - go line by line to explain
    })

})