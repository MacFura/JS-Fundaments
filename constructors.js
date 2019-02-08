// let car = {
//     make: 'Audi',
//     model: 'a8l',
//     year: 2011,

// };

// function Car(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
// }
// let myCar = new Car('audi', 'a8l', 2011);
// let alexCar = new Car('Nissan', 'Micra,', 1997);


// console.log(myCar);
// console.log(alexCar);

function MyFunction() {
    console.log('I am simple function');
}

let myFunction = new MyFunction();

console.log(typeof myFunction);

// Can't really do anything with that particular object, 
// ..... it's containly NOT a function reference anymore!!

// myFunction(); 

//  ^
//  |  This is wrong
//  |                
//  |  This is OK
//  V


MyFunction();
