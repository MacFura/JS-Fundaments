let name = [ 'hose', 'arkadio', 'morales' ];
let others = [ 'david', 'gary', 'niko'];

let lost = [ 4, 8, 15, 16, 23, 42 ];
let fibonacci = [ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55];


var combine = lost.concat(fibonacci);
// console.log(combine);

// console.log(fibonacci.join('~'));

// puch, pop

// console.log(lost.shift());
// console.log(lost);

// lost.unshift(1, 2, 3, 4);
// console.log(lost);

// console.log(name);
// console.log(name.reverse()); // odwraca położenie 
// console.log(name.sort());    // sortuje wg alfabetu

// console.log(others.indexOf('gary')); // pokazuje pozycje elementu

// console.log(combine);
// console.log(combine.lastIndexOf(1)); // ostatnia pozycja w tym przypadku wartosci 1

// map

// // funkcja pokazuje wartosci mniejsze niz 15 
// var filtered = combine.filter((x) => { if (x <= 15 ) return x; });
// console.log(filtered);

name.forEach((name) => console.log(`howdy ${name}`));
