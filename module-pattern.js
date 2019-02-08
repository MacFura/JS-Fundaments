var counter = (function() {

    // privat stuff
    let count = 0;

    function print(message) {
        console.log(message + '---' + count)
    }

    // return an object
    return {
        // value: count, --- changed to:

    get: function() { return count; },

    set: function(value) { count = value; },


        increment: function() {
            count += 1;
            print('Aftet increment: ')
        },

        reset: function() {
            print('Before reset: ');
            count = 0;
            print('After reset: ');
        }
    }
})();


counter.increment();
counter.increment();
counter.increment();

// Accidentaly created a closure
// console.log(counter.value);

counter.set(7);
console.log(counter.get());

counter.reset();

counter.increment();
counter.increment();
