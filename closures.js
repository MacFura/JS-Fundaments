function sayHallo(name) {
    return function() {
        console.log('howdy ' + name);
    }
}

let bob = sayHallo('bob');
let john = sayHallo('john');
let gorg = sayHallo('gorg');

bob();
john();
gorg();