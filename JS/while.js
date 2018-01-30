"use strict";

//While loop exercise, output is each number multiplied by 2------->

// var x = 2;
//
// while (x <= 65536) {
//     console.log("x is multiplied by 2 each time: " + x);
//     x *= 2;
// }

//------------------------------------------------------------------------------------------------------------>

var allCones = Math.floor(Math.random() * 50) + 50;


do {
    var randomCones = Math.floor(Math.random() * 5 + 1);
    //the above is the random # generator between 1 and 5.
    if(allCones < randomCones) {
        //the above says 'if all cones are less than the random cone # generated, do what is below
        allCones -= allCones;
        //the above says to subtract all cones by itself to offer what cones are remaining, if the above
        //if is true.
        console.log("Cones left: " + allCones);
    } else {
        allCones -= randomCones;
        //the above says, if the if statement is not true, then run this. this is all cones minus random
        //cones, to generate new value of all cones.
        // -= is the same as this = this - oldamount//
        console.log("Cones left: " + allCones);
    //    this will loop continuously until the specifications for the above if are met. BUT..
    }
} while (allCones > 0);
//the while portion DETERMINES if this will continue to run after the first instance. all cones must be
//greater than 0 for it to continue.
