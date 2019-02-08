// let hi = () => { console.log('howdy');}
// hi();

// let hi = (name) => { console.log(`howdy ${name}`)};
// hi('bob'); 

// let add = (a, b) => { return a + b};
// console.log(add(7,3));

// let names = [ 'hose', 'arcadio', 'morales'];
// names.map((name) => {console.log(`howdy ${name}!`)}  );

// let names = [ 'hose', 'arcadio', 'morales'];
// let i = 0;
// names.map((name) => {i++; console.log(`${i}. howdy ${name}!`); }  );

let names = [ 'hose', 'arcadio', 'morales'];
var transformed = names.map((name) => { return `howdy ${name}!`});
console.log(transformed);
