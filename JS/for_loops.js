"use strict";
//
//
//
// function showMultiplicationTable(number) {
//
//     for (var table = 0; table <= 10; table++) {
//         var result = number * table;
//         console.log(number + '*' + table + '=' + result);
//     }
// }






// var number = Math.floor(Math.random() * 200) + 20

function evenOddGenerator(number) {
    if (number % 2 === 0) {
        console.log("its even!");
    } else {
        console.log("it's odd... hmmmmmm");
    }
}

for (var i = 0; i < 10; i++) {
    var number = Math.floor(Math.random() * 200) + 20;
    console.log(number);
    evenOddGenerator(number);
}