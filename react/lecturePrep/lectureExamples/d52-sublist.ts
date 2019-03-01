//function checkIsSublist (a, b){

//}

//How do we check to see if b is a sublist of a?

/*
function checkIsSublist (a, b){
    let isSublist = true;
    b.forEach(element =>{
        if(a.indexOf(element) === -1){ //if this doesnt exist 
            isSublist = false;
        }
    });
    return isSublist;
} 
*/

/* The code above looks like plain javascript, we hae declared no types at all.... but we know that a and b should both be an array of numbers.*/

/*
function checkIsSublist (a:number[], b:number[]){
    let isSublist = true;
    b.forEach(element =>{
        if(a.indexOf(element) === -1){ //if this doesnt exist 
            isSublist = false;
        }
    });
    return isSublist;
}
*/

//The code above should work perfectly for this:
checkIsSublist([1,2,3,4,5], [1,2,3]);

/* but what if we want to check a string version? Does it have to just be numbers? Say I wanted to check these arrays or names..*/

checkIsSublist(['billy', 'jeremy', 'johnathan'], ['billy', 'jeremy'])

//This will throw an error as we are expecting an array of numbers in our function, so how can we solve this issue?

/*
function checkIsSublist (a:(number | string)[], b:(number | string)[]){
    let isSublist = true;
    b.forEach(element =>{
        if(a.indexOf(element) === -1){ //if this doesnt exist 
            isSublist = false;
        }
    });
    return isSublist;
}
*/

//here we are allowing more than one kind of input, either an array of numbers or an array of strings for both properties, a and but what if we go further?

checkIsSublist([false, true], [true]);

//What if we want to stop people using your function, because they are putting any type into their arrays and pass them through our function. Can this type of array be more dynamic? Of course we can change the type to any.... but this causes some issues. 

/*
function checkIsSublist (a:any[], b:any[]){
    let isSublist = true;
    b.forEach(element =>{
        if(a.indexOf(element) === -1){ //if this doesnt exist 
            isSublist = false;
        }
    });
    return isSublist;
}
*/

//The issue with any is that it will not be able to restrict this scenario. 

checkIsSublist([1,2,3,4,5], ['billy', 'jeremy']);

//When passing numbers in the first array, we expect the second array should be numbers as well, however as I used type any[], this will not throw and error. And I want to throw an error in the case presented above. any - typescript wont care. So how can I fix this, how can I make the application care?

//To enforce typescripts check, we can use type Generic, so we add T, what is T, is something we put in this function. 

function checkIsSublist <T> (a:T[], b:T[]){
    let isSublist = true;
    b.forEach(element =>{
        if(a.indexOf(element) === -1){ //if this doesnt exist 
            isSublist = false;
        }
    });
    return isSublist;
}


checkIsSublist<number>([1,2,3,4,5], [1,2,3]);
checkIsSublist<string>(['billy', 'jeremy', 'johnathan'], ['billy', 'jeremy'])
checkIsSublist<boolean>([false, true], [true]);
//this is really incorrect, so if we are define the subsets. the arrays should match the bottom.
checkIsSublist([1,2,3,4,5], ['billy', 'jeremy']);

checkIsSublist<number | string>([1,2,3,4,5,'billy', 'jeremy'], ['billy', 'jeremy']);


/* 
This is very useful for our code, in all strong typed languages, generic exists, without generic, we cannot solve issues that we found in the code above.


*/

const a = [1,2,3]
a.push('sam')
a.push(14)

//in a strong language such as typescript , typescript evaluates your variables. It knows that a is an array of numbers and so you won't be able to push a string into it. However you will be able to push any numbers you want into it. array is another example of type generic. You can should define the type in typescript so the code becomes:

const a: number[]= [1,2,3]

// you can also write this in another way:

const a: Array<number> = [1,2,3]

//Without type generic, you will need to declare every type of input in your components properties. This is a very important feature. 
