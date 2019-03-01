// Answer for A/B

describe('testing the test suite Jest', function(){
    xtest('I am in the test block 1', function(){
        console.log('I am the test Block one: reporting in')
    });
    xtest('I am in the test block 2', function(){
        console.log('I am the test Block two: reporting in')
    });
    xtest('I am in the test block 3', function(){
        console.log('I am the test Block three: reporting in')
    });
    xtest('I am in the test block 4', function(){
        console.log('I am the test Block four: reporting in')
    });
    xtest('I am in the test block 5 but I fail', function(){
        console.log('I am the test Block five but I fail')
        throw new Error();
    });
});