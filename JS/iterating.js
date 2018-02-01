(function(){
    "use strict";
    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    var names = ['Allie', 'Potato', 'Bob', 'James'];

    /**
     * TODO:
     * Create a statement that will log the number of elements in the names
     * array.
     */
    console.log(names.length);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    for (var i = 0; i < names.length; i++) {
        console.log(names[i]);
    }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    names.forEach(function (e, i) {
        console.log(e);
    });

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    function first(array, index) {
        return array[index];
    }

    function second(array, index) {
        return array[index];
    }

    function last(array) {
        return array[array.length - 1];
    }

    console.log(first(names));
    console.log(second(names));
    console.log(last(names));


    var numbers = ['1', '3', '5', '10', '4'];
    //**TO DO - create a loop that finds the smallest number in an array of numbers**// check?????
    var smallest = 0;
    for (i = 0; i < number.length; i++){
        if(numbers[i] < smallest) {
            smallest = number[i];
        }
    }
    console.log(smallest)


})();