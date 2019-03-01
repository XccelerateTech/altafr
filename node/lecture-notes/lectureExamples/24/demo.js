//promise syntax

let p = new Promise((resolve, reject)=>{
    resolve('here is the data');
}).then(data=>{
    console.log(data);
});



//non -promise version

let myAsynchronousFunction = function (cb){
    cb('here is your data async');
}

myAsynchronousFunction((data)=>{
    console.log(data)
})
