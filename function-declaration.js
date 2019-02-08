/* 
function sayHallo(name) 
{
    console.log('----------------');
    console.log('Hey ' + name + ' from console!');
    console.log('----------------');
}

// sayHallo();
let a = sayHallo;

a('Mac');
a('Bob');
*/

function calculateTax (amount){
    let result = amount /10;
    return result;
}
let tax = calculateTax(2600);
console.log(tax);

