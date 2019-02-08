/* // let car = {
//     make: 'audi',
//     model: 'a8l',
//     year: 2011,
//     getPrice: function() {
//         // perform some calc
//         return 10900;
//     },
//     printDescription: function() {
//         console.log(this.make + ' ' + this.model );
//     }
// }

// function first() {
//     return this;
// }

// console.log(first() === global);

// function second() {
//     'use strict';
//     return this;
// }
// console.log(second() === global);
// console.log(second() === undefined);

let myObject = { value: 'My object' };

// value is set on the global object
global.value = 'Global object'

function third(name) {
    // returning samething different depending on how
    // we call this method:
    return this.value + name;
}

console.log(third());

// Both call and apply allow you to explicitly set
// what you want to represent 'this'. The difference
// is in how additional arguments to the function
// are sent.

console.log(third.call(myObject, ' bob'));
console.log(third.apply(myObject, [' bobi'])) */

function fifth() {
    console.log(this.firstName + ' ' + this.lastName);
}

let customer1 = {
    firstName: 'bob',
    lastName: 'tabor',
    print: fifth
}
let customer2 = {
    firstName: 'richard',
    lastName: 'wozniak',
    print: fifth
}

customer2.print();
customer1.print();
