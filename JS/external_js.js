"use strict";

console.log('Hello from external JavaScript!');

// the following line will show the OK/CANCEL confirm dialog
var confirmed = confirm('Are you sure you want to do XYZ?');
console.log(confirmed); // will be either true or false

// the below is an ex. of a prompt message. console.log represents what the console displays in inspect
var userInput = prompt('Please type something:');
console.log('The user entered: ' + userInput);

// The below is an alert message. it is a pop up on the page
var alertmessage = alert('Welcome to my site!');

var favcolor = prompt('your favorite color?');
console.log('user entered: ' + favcolor);

// this is a combination of a previous variable and an alert that incorporates it
var myfavcoloralert = alert('Great, ' + favcolor + ' is my favorite color too.');


