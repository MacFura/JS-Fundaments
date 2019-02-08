/*
setTimeout(function() {
     console.log(' I waited 2 seconds'); 
    }, 2000);


let counter = 5;
function timeout () {
    setTimeout(function() {
        console.log('Hi ' + --counter);
        if (counter === 0){
            console.log('Booom!')
        
        }
        else {
        timeout();
        }
    }, 2000);
}

timeout();

*/

(function(){
    console.log('Immidiately Inveked Function Expression(IIFE)')
})();