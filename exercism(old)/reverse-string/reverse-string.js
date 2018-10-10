function  reverseString (input) {
    if (typeof(input) === "string") {
        let temp = [];
        let output = [];
        for(let i = 0; i <input.length; i++){
            temp[i] = input[i]
        }
        for(let i = temp.length - 1 ; i >= 0 ; i--){
            output.push(temp[i])
        }
        return output.join('')
    }
}
function advanced(input) {
    if(typeof input === "string"){
        return input.split('').reverse().join('');
    }else {
        return "Invalid Input"
    }
} 
 
module.exports = advanced;


