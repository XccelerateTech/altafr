class NoteService {
    constructor (){
        this.notes = [];
    }
    listNote(){
        return this.notes;


    }

    addNote(note){
        this.notes.push(note)


    }

    removeNote(){
        this.notes.splice(index, 1)

    }

    insertNote(index, note){
        this.notes.splice(index, 0, note)
    }

}

module.exports = NoteService;

/*
We use classes in test cases so we can create individual instances
eg if you test if you dog can eat or not, you dont test with every dog.
you just test with on instance to check if it works not.
So that we can test the behaviors of each method in the noteService class


in exercism there are no test cases that are co-related to eachother - the test cases should not depend on one another - so you know the specific place of the error

You want no dependencies between test cases.

So we use classes so that we can have new instances for each test case so that we are testing the application with specific clauses each time

inthe real application we write into a Json file meaning its a little bit more complicated than this current build, the noteService will get much larger and will need to use more libraries

We want to to auto testing as manual testing is very slow and it takes a long time if you use manual test, 

one jasmine test will take much sorter time, show an example....

So try to do TDD its faster for your build

show them week two explain witht he test cases, show them a real note service. 
use test cases to ensure the tests work! dont do manual testing!
*/