// Make a function named sayHello(name) that returns "Hi " + name.

function sayHello(name) {
    var myName = "Hello " + name;
    return(myName);
}

console.log(sayHello("Allie"));

// Write a function named capitalize(string) that takes a string of any capitalization and uppercases the first character and lowercases the rest of the characters of a string.

function capitalize(string) {
    var firstLetter = string.substring(0,1).toUpperCase();
    var otherLetters = string.substring(1).toLowerCase();
    return firstLetter + otherLetters;
}
alert(capitalize(prompt('enter statement that is punctually incorrect.')));

// Write a function named upperCase(string)

function upperCase(string) {
    return string.toUpperCase();
}

alert(upperCase(prompt('enter something w/ no capital')));

// Make a function named identity(input) that returns the input exactly as provided.

function identity(input) {
    return input
}

alert(identity(prompt('im copying you, enter something')));


// Make a function named isOdd(number)

function isOdd(number) {
    return number % 2 === 1;

}

console.log(isOdd(33));


// Make a function named isEven(number)

function isEven(number) {
    return number % 2 === 0;
}

console.log(isEven(20));

// Make a function named isPositive(number)

function isPositive(number) {
    return number >= 0;
}

console.log(isPositive(4));

// Make a function named isNegative(number)

function isNegative(number) {
    return number <= -1;
}

console.log(isNegative(-5));

// Make a function named isBoolean(input)

function isBoolean(input){
    return typeof(input) === typeof(true);
}

console.log(isBoolean(true));
// Make a function named isTrue(boolean)

function isTrue(boolean) {
    return boolean === true;
}

console.log(isTrue('true'));

// Make a function named isFalse(boolean)

function isFalse(boolean) {
    return boolean === false;
}

console.log(isFalse('false'));

// Make a function named isTruthy(input)

function isTruthy(input){
    return input == true;
}

console.log(isTruthy(true));

// Make a function named isFalsy(input)

function isFalsy(input) {
    return input == false;
}

console.log(isFalsy(false));

// Make a function named isVowel(letter)

function isVowel(letter) {
    return letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u" || letter === "y";
}

console.log(isVowel("c"));

