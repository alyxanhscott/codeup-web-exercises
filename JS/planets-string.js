(function(){
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    //push - adds to the end of array.
    //pop - removes from end of array.
    //shift - removes from beginning of array.
    //unshift - adds to the beginning of array.
    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */

    planets.unshift('Sun');

    console.log('Adding "The Sun" to the beginning of the planets array.');
    console.log(planets);

    planets.push('Pluto');

    console.log('Adding "Pluto" to the end of the planets array.');
    console.log(planets);

    planets.shift("Sun");

    console.log('Removing "The Sun" from the beginning of the planets array.');
    console.log(planets);

    planets.pop('Pluto');


    console.log('Removing "Pluto" from the end of the planets array.');
    console.log(planets);


    console.log('Finding and logging the index of "Earth" in the planets array.');
    console.log(planets.indexOf("Earth"));

    planets.reverse();

    console.log("Reversing the order of the planets array.");
    console.log(planets);

    planets.sort();

    console.log("Sorting the planets array.");
    console.log(planets);

    // ------------------------>>
    //LECTURE NOTES, JUSTIN
    // ------------------------>>
//
//
// // ============================= Adding and Removing Elements
//
//     /*
//         // The following array methods change the original array value!
//         someArray.shift()   = removes first element
//         someArray.unshift() = adds new first element
//         someArray.pop()     = removes last element
//         someArray.push()    = adds new last element
//      */
//
//
// // declare and initialize testing array
//
//     var pies = ["apple", "cherry", "key lime", "key lime", "huckleberry", "rhubarb"];
//
//
// // shift / unshift - dealing with the first element
//
//     // console.log(pies);
//     // pies.shift();
//     // console.log(pies);
//     //
//     // var firstElement = pies.shift();
//     // console.log("The first element is: " + firstElement);
//     // console.log(pies);
//     //
//     // var newLengthOfArray = pies.unshift(firstElement);
//     // console.log("Test is " + newLengthOfArray);
//     // console.log(pies);
//
//
// // pop / push - dealing with the last element
//
//     // var pies = ["apple", "cherry", "key lime", "huckleberry", "rhubarb"];
//
//     // var lastElement = pies.pop();
//
//     // pies.forEach(function(element){
//     //     console.log(element);
//     // });
//
//     // pies.push(lastElement);
//
//     // console.log(pies);
//
//
// // ============================= Locating Elements
//
//     // var indexOfKeyLime = pies.indexOf('lemon');
//     // console.log(indexOfKeyLime);
//
//
//
// // ============================= Slicing
//
//     /* SYNTAX
//        someArray.slice(startingIndex, startingIndexNotIncluded);
//        // one argument only will return a copy from the starting index to the end of the array
//      */
//
//     // console.log(pies);
//     //
//     // var fromKeyLime = pies.slice(pies.indexOf("key lime") + 1);
//     //
//     // console.log(fromKeyLime);
//     //
//     // console.log(pies);
//
//
//
// // ============================= Sorting
//
//     // console.log(pies);
//     // pies.sort();
//     // console.log(pies);
//
//
// // ============================= Reversing
//
//     // console.log(pies);
//     // pies.reverse();
//     // pies.reverse();
//     // console.log(pies);
//
//     // console.log(pies.reverse()[0]);
//
//
// // ============================= Split / Join
//
//
// // splitting string into and array
//
//     var bondsString = "Connery,Lazenby,Moore,Dalton,Brosnan,Craig";
//     var bondsArray = bondsString.split(","); // comma and space = delimiter
//     //
//     console.log(bondsArray);
//
//
//
// // splitting on an empty string
//
//     // var everyCharacter = bondsString.split("");
//     // console.log(everyCharacter);
//
// // joining array into a string
//
//     var bondsArray = ["Connery", "Lazenby", "Moore", "Dalton", "Brosnan", "Craig"];
//     var bondsString = bondsArray.join("");
//
//
//
//     // var output = "";
//     // for (var i = 0; i < bondsArray.length; i += 1) {
//     //     output += bondsArray[i];
//     //     output += ", ";
//     // }
//
//     console.log(bondsString);
//
//
//
//
//
//
//
// // ============================= (EXTRA INFO) Splicing Elements
//
//     /*
//         someArray.splice(param1, param2, param3...);
//         param1 = which index to start from
//         param2 = how many elements to remove
//         param3 = from this parameter and onward, arguments passed in will be added as new elements at the end of the array
//      */
//
//
// // create new test array
//     var bonds = ["Craig", "Brosnan", "Dalton", "Moore", "Connery"];
//
//
// // removing elements splice
// //     var missingBonds = bonds.splice(bonds.indexOf("Moore"), 2);
// //     console.log(bonds);
// //     console.log(missingBonds);
// //
//
// // adding elements with splice
// //     bonds.splice(1, 0, "Lazenby");
// //     console.log(bonds);
// //
//
// // replace elements
// //     bonds.splice(bonds.indexOf("Craig"), 1, "Elba");
// //     console.log(bonds);

    // ------------------------>>
    //LECTURE NOTES END
    // ------------------------>>


    // Create a phone number parser that will convert a string of numbers into a human readable format.
    //     The output should depend on the number of digits (account for 7, 10, 11 digit numbers):
    //
    // Using multiple functions will be helpful.
    //
    //     input = 5552324343, output = 555-232-4343
    // input = 5553434, output = 555-3434
    // input = 18005552323, output = 1-800-555-2323

    function phoneConverter() {
        var countryCode = '';
        var firstHalf = '';
        var secondHalf = '';
        var thirdPart = '';
        var num = prompter();
        console.log(isNumeric(num));
        if (isNumeric(num)) {
            console.log(num.length);
            switch(num.length) {
                case 7:
                {
                   firstHalf = num.substring(0,3);
                   secondHalf = num.substring(3);
                   console.log(firstHalf + "-" + secondHalf);
                }
                break;
                case 10:
                {
                    firstHalf = num.substring(0,3);
                    secondHalf = num.substring(3, 6);
                    thirdPart = num.substring(6);
                    console.log(firstHalf + '-' + secondHalf + '-' + thirdPart);

                }
                break;
                case 11:
                {
                    countryCode = num.substring(0, 1);
                    firstHalf = num.substring(1,4);
                    secondHalf = num.substring(4, 7);
                    thirdPart = num.substring(7);
                    console.log(countryCode + '-' + firstHalf + '-' + secondHalf + '-' + thirdPart);
                }
                break;
                default:
                {
                    prompter();
                }
            }
        } else {
            prompter();
        }
    }

    function prompter() {
        return prompt('please enter a phone number with no spaces or dashes');
    }
    phoneConverter();

    function isNumeric(num) {
        return !isNaN(parseInt(num));
    }

})();