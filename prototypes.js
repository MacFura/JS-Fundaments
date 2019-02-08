let originalCar = {
    make: 'audi',
    model: 'a8l',
    year: 2011,
   
};

let newCar = Object.create(originalCar);
console.log(newCar.make);
// console.log(originalCar);

let myPrototype = Object.getPrototypeOf(newCar);
console.log(myPrototype.make);

// tu bedzie undefinded ponieważ konsola nie moze znalezc 
// właściwości whatever w swoim obiekcie, ani tez w tym z ktorego dziedziczy
// właciwosci, wiec szuka dalej i tego ktory dzieczyczy wyżej, a że tam nie ma 
// już zadnego objektu zwraca wartość underfinded
// PROTOTYPE CHAIN !!
console.log(newCar.whatever)
