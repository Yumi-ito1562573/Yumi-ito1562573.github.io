'use strict'
// 1行目に記載している 'use strict' は削除しないでください
function test(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
        console.log("OK! Test PASSED.");
    } else {
        console.error("Test FAILED. Try again!");
        console.log("    actual: ", actual);
        console.log("  expected: ", expected);
        console.trace();
    }
}
//確認2----------------------------------------------------
// function sayThankYou() {
//     console.log("Thank you!");
//   }

//   function runSomething(func) {
//     func();
//   }

//   runSomething(sayThankYou);
//基礎1-2---------------------------------------------------
// function returnAll(value) {
//     return value;
// }

// const returnAll = function (value) {
//     // console.log(value);
//     return value;
// }

// returnAll(5);
// console.log(typeof returnAll(false)); // boolean
// console.log(typeof returnAll(5)); // number
// console.log(typeof returnAll("5")); // string
// console.log(typeof returnAll([])); // object
// console.log(typeof returnAll({ a: 1 })); // object

// function foo() {
//     return "hi";
// }

// console.log(typeof returnAll(foo)); // function
// console.log(typeof returnAll(foo())); // string

//中級1----------------------------------------------------
/**
    * @param {Function} func
    * @param {any} num - 第 1 引数で与えられた関数に渡す値
    * @returns {any} 与えられた引数を、与えられた関数に渡したときの返り値
    */

// ここにコードを書きましょう
// function doSomething (func, num){
//  return func(num);
// }

// function addTen(number) {
//     return number + 10;
// }

// test(doSomething(addTen, 6), 16);
// test(doSomething(addTen, -100), -90);

//中級2----------------------------------------------------
// const outer = function () {
//     return function () {
//         return 5;
//     };
// };

// console.log(outer()); // ???
// console.log(typeof outer()); // function

// const inner = outer();
// console.log(inner);
// console.log(typeof inner);
// console.log(inner());
//中級3----------------------------------------------------
const add = function (x) {
    return function (y) {
        return x + y;
    };
};

const addFive = add(5);
let foo = addFive(3);
console.log(foo); // 8
console.log(typeof addFive); //function
