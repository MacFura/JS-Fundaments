// let a;
// console.log(a);
// console.log(typeof a);
// that gives undefined

let pattern = /xyz/;
let value = 'This is just a test'
let result = value.match(pattern);
console.log(result);
console.log(typeof result);

// the bigest bug in JAvaScrit is that null is an object
// it can't be fixed 'couse there are a lot of code in internet
// wich based on null as an object

// null is not the same as uderfined !!

if (result === null ) {
    console.log('no match was found');
}
