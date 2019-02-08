let a, b, c, d, e;

let names = ['david', 'luke', 'alex', 'richard', 'stan' ];

/* [a, b, c, d, e] = names;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
 

 let others;
 [a, b, ...others] = names;

console.log(a);
console.log(b);
console.log(others);
*/

let year, model;
({year, model} = {
    make:'audi',
    model: 'v8t',
    year: 2011,
    value: 10900
});

console.log(year);
console.log(model);
