// nie musisz zapamietywać
// I;m not of big fun rejex

let pattern = /xyz/;
console.log(pattern);  // give us /xyz/
console.log(typeof pattern); // give us object

let value = 'This is xyz a test';

console.log(pattern.test(value)); // wynajduje wyrazenie xyz w stringu value

console.log(value.replace(pattern, 'just')); // zastepuje stringa innym

console.log(value.match(pattern));




