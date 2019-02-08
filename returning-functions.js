// DON'T DO THIS !!!!!
// var myVariable = 'I am at the global scope';


// THIS EITHER!!
/*
var myFunction = function() {
    console.log('me too!')
}
*/

function one() {
   return 'one'
}

// let value = one();
// console.log(value);
// or more simple
// console.log(one());

let value = one;
console.log(typeof one);
console.log(typeof value);

// so, now we know:
// string
// number
// boolien
// underfind
// function


function two() {
    return function() {
        console.log('two');
    }
}

let myFunction = two();
myFunction();
