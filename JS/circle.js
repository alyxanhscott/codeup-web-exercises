// (function() {
//     "use strict";
//
//     // create a circle object
//     var circle = {
//         radius: 3,
//
//         getArea: function () {
//             return Math.PI * (this.radius * this.radius);
//         },
//
//         logInfo: function (doRounding) {
//             var result;
//             // TODO: complete this method.
//             (doRounding ? result = Math.round(this.getArea()) : result = this.getArea());
//
//             console.log("Area of a circle with radius: " + this.radius + ", is: " + result);
//         }
//     };
//
//     // log info about the circle
//     console.log("Raw circle information");
//     circle.logInfo(false);
//     console.log("Circle information rounded to the nearest whole number");
//     circle.logInfo(true);
//
//     console.log("=======================================================");
//     // TODO: Change the radius of the circle to 5.
//     circle.radius = 5;
//     // log info about the circle
//     console.log("Raw circle information");
//     circle.logInfo(false);
//     console.log("Circle information rounded to the nearest whole number");
//     circle.logInfo(true);
// })();

// 'this' keyword is used whenever an object is referring to itself inside of the curly braces.


var triggered = prompt("Are you triggered?!");

if (triggered === "yes") {
    alert("Get back to work, you lazy piece of shit!!");
} else if (triggered === "no") {
    alert("Good! Keep Coding");
} else {
    alert(triggered + " ...why would you type that? You fucking faggot, get back to work.");
}
