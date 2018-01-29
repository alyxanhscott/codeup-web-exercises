"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

var enterNumber = confirm("Would you like to enter a number?");
var userNumber;
if (enterNumber) {
    userNumber = prompt("Enter a number:");
    evenOrOdd(userNumber);
    plusOneHundred(userNumber);
    negOrPos(userNumber);
}

function evenOrOdd(input) {
    if (input % 2 === 0) {
        alert('number is even!');
    } else {
        alert('number is odd!');
    }
}

function plusOneHundred(input) {
   alert("your number + 100: " + (parseFloat(input) + 100));
}

function negOrPos(input) {
    if (parseFloat(input) >= 0) {
        alert("number is positive!");
    } else {
        alert("number is odd!")
    }
}





/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// if else example-------------------------------------->

// if (analyzeColorOne === "Red") {
//     alert("Firetrucks are red.");
// } else if (analyzeColorOne === "Blue") {
//     alert("Blue-jays are blue");
// } else if (analyzeColorOne === "Cyan") {
//     alert("What a specific color, I guess pottery can be Cyan?");
// } else {
//     alert(analyzeColorOne + ", that's a nice color");
// }

// case and break example-------------------------------------->

analyzeColor(prompt("Enter a color"));

function analyzeColor(input) {
    switch(input) {
        case "Blue":
            alert("Blue is the color of the sky.");
            break;
        case "Red":
            alert("Strawberries are red.");
            break;
        case "Cyan":
            alert("I know nothing about Cyan except that it is in the word cyanide");
            break;
        default:
            alert(input + " is okay too.");
            break;
    }
}

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */
console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

// DONE----------------->

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// DONE----------------->

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function discountHandler(luckyNumber, totalAmount) {
    switch (luckyNumber) {
        case 0:
            alert("No discount for you! Hee hee! Your total is still " + totalAmount);
            break;
        case 1:
            alert("You get a 10% discount! Meh. Your kinda-discounted-but-not-really total is: " + (totalAmount - (totalAmount * .10)));
            break;
        case 2:
            alert("You get a 25% discount! Money bags! Your total is now: " + (totalAmount- (totalAmount * .25)));
            break;
        case 3:
            alert("You get a 35% discount! You thief! Now you only pay: " + (totalAmount- (totalAmount * .35)));
            break;
        case 4:
            alert("You get a 50% discount! I might as well give you this stuff. You're hardly paying: " + (totalAmount- (totalAmount * .50)));
            break;
        case 5:
            alert("FREEEEEE! Take all the things! You pay: " + (totalAmount- (totalAmount * 1)));
            break;
    }
}



/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 5);

discountHandler(luckyNumber, 100);


//---------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------


// ================================= CONDITIONALS BONUSES
//
// Bonus 1.
//
// Write a function (or multiple functions) that will return
// a boolean depending on if the string value passed to it
// as an argument is the name of a day of the week that starts with a T.
//     Otherwise, it should return false.
//
//     Example: dayOfTheWeekStartsWithT("Monday")     => returns false
// Example: dayOfTheWeekStartsWithT("Tuesday")     => returns true
// Example: dayOfTheWeekStartsWithT("Tommy")     => returns false

function tDaysOfTheWeek(input) {
    if (input === "Tuesday" || "Thursday") {

    } else {
        alert("Doesn't begin with T");
    }
}

console.log(tDaysOfTheWeek("Monday"));

//***CHECK AS TO WHY THE ABOVE IS RETURNING UNDEFINED ^^^***


// Bonus 2.
//
// Write a function, isValidPassword, that takes in a string argument and returns true or false
// depending on whether or not all the following conditions are true:
//
// 1) Must be 6 characters long (only for the sake of this exercise, NOT a best practice)
// 2) Contains at least one letter and one number
// 3) Contains at least one upper and one lower case letter
// 4) Only comprised of letters and numbers
// 5) EXTRA BONUS: is not the same forwards and backwards

function isValidPassword(input) {

}