// create a function that takes a string, and a letter. The function should check to see how many times the letter appears in the string and return the total sum
/* ie: function <function name> ('A sailor went to sea sea sea, to see what he could see see see, but all that he could see see see was the bottom of the deep blue sea sea sea', 'e'){

  your code here

}

call the function // output is 28


*/
function letterCounter(string, letter){
    let count = 0;
    let searchingChar = letter;

    console.log(searchingChar)
    console.log(string)

    for (let i=0; i< string.length; i ++){
        if(string[i].indexOf(searchingChar) !== -1){
            count = count + 1;
            console.log(count)
        }
    }
    return count;
}

letterCounter('A sailor went to sea sea sea, to see what he could see see see, but all that he could see see see was the bottom of the deep blue sea sea sea', 'e')

//28

//create a function that takes a string as a parameter then return the first non repeated character in that string
/* ie: function <function name> ('ssttrrinngg'){

Your code here

}

<function name> ('ssttrrinngg'){} ========> outputs: i
*/ 

function firstNonRepeatedChar (string){
    let array1 = string.split('');
    let result = '';
    let control = 0;
    
    for (let x = 0; x < array1.length; x ++){
     
      for (let y=0; y < array1.length; y ++){
        if(array1[x] === array1[y]){
          control += 1;
        }
      }
    
      if(control < 2){
        result = array1[x];
        break;
      }
    }
    
    return result;
    }
    
    firstNonRepeatedChar('abcdefghijklmnopqrstuvwxyzacdefghijklmnopqrstuvwxyz');