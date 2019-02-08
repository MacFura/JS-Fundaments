
let car = {
    make: 'audi',
    model: 'a8l',
    year: 2011,
    getPrice: function() {
        // perform some calc
        return 10900;
    },
    printDescription: function() {
        console.log(this.make + ' ' + this.model );
    }
}

car.getPrice();
console.log(car.year);


var anotherCar = {};
anotherCar.whatever = 'bob';
console.log(anotherCar.whatever);


var a = {
    myProperty: { b: 'hi' }
};
console.log(a.myProperty.b);


var c = {
    myProp: [
        { d: 'this' },
        { e: 'can' },
        { f: 'get' },
        { g: 'crazy' }
    ]
};


let carLot = [
    {year: 2017, make: 'Toyota', model: '4Runner'},
    {year: 2015, make: 'bmw', model: 'm5'},
    {year: 1065, make: 'Volkswagen', make: 'T1 Samba'},
];

// JSON ???? 
