/* 
let name = 'bob';
console.log(`hi ${name}`);

let sentence = `This is realy a convenience.
    You propobly will never want to do something
    quite like this. You might choose to put 
    long passages of text into an external file
    and load id somehow`
console.log(sentence);
 */

 function getReasonCount() { return 2; }

 let interpolation = `give me ${ (getReasonCount() == 1) ? 'one good reason' : 'a few reasons' } to try this`;

 console.log(interpolation);
