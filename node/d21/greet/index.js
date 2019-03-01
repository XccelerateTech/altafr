function greet(callback) {
    console.log('Hello');
    callback();
}

greet(function(){
    console.log("I'm the callback");
});

// var fs = require('fs');

// var greeting = fs.readFile(__dirname + '/greet.txt', 'utf8', function(err, data) {
//     console.log(data)
// });
