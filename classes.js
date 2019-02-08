// declaration 

class Car {
    constructor(make, model, year) {
        this.make = make,
        this.model = model,
        this.year = year
    }

    print() {
        console.log(`${this.make} ${this.model} (${this.year})`);
    }
}

let myCar = new Car('bmw', '745li', 2011);
myCar.print();



// expression
// let car = class {
// }    

class SportsCar extends Car {
    revEngine() {
        console.log('Vrrrroooom goes the ' + this.model);
    }

}

let mySportsCar = new SportsCar('dodge', 'viper', 2010);
mySportsCar.print();
mySportsCar.revEngine();

// myCar.revEngine()  
// nie zadziala bo klasa Car nie posiada funkcji revEngine
// funkcje posiada tylko klasa SportsCar ktora dziedziczy
//  funkce Car ale nie udostepnia swoich

console.log(typeof Car);