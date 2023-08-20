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

//warmUp--------------------------------------------
// const arrayOfObjects = [
//     { name: "alice", favoriteColor: "green" },
//     { name: "bob", favoriteColor: "blue" },
// ];

// ここにコードを書きましょう

// function selectKey(obj){
//     return obj["name"];
// }

// function getNames(){
//     return arrayOfObjects.map(selectKey);
// }
//１つにまとめると下になる。

// function getNames() {
//     return arrayOfObjects.map(function (obj) {
//         return obj["name"];
//     });
// }

// function getFavoriteColors() {
//     return arrayOfObjects.map(function (obj) {
//         return obj["favoriteColor"];
//     });
// }

// test(getNames(arrayOfObjects), ["alice", "bob"]);
// test(getFavoriteColors(arrayOfObjects), ["green", "blue"]);

//基礎1-----------------------------------------------
/**
    * @param {number} ???
    * @returns {boolean} 与えられた数値が 10 の倍数かどうか
    */
// ここにコードを書きましょう
// function isMultipleOfTen(num){
//     return num % 10 === 0;
// }

// const arrayOfNumbers = [2, 4, 6, 8, 10, 15, 20, 30, 66, 89, 100];

// test(arrayOfNumbers.filter(isMultipleOfTen), [10, 20, 30, 100]);
// test(arrayOfNumbers.slice(6).filter(isMultipleOfTen), [20, 30, 100]);

//基礎2--------------------------------------NG!!!!---------
/**
    * @param {string} moji
    * @returns {boolean} 与えられた文字列に母音 (a, e, i, o, u) が1つ以上含まれているか
    */
// ここにコードを書きましょう
function hasAVowel(moji) {
    return moji >= ("a", "e", "i", "o", "u");
}

const arrayOfStrings1 = ["bat", "ball", "tree", "cow", "bnm"];
const arrayOfStrings2 = ["bhg", "waa", "cvb"];

test(arrayOfStrings1.filter(hasAVowel), ["bat", "ball", "tree", "cow"]);
test(arrayOfStrings2.filter(hasAVowel), ["waa"]);

//基礎3-----------------------------------------------
/**
   * @param {Array<number>} ???
   * @returns {Array<number>} 与えられた配列の中にある正の数のみを要素として持つ配列
   */
// ここにコードを書きましょう
// function getPositiveNumbers(numArray) {
//     return numArray.filter((num) => num > 0);
// }

// test(getPositiveNumbers([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
// test(getPositiveNumbers([0, 1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
// test(getPositiveNumbers([1, -2, 3, -4, 5]), [1, 3, 5]);
// test(getPositiveNumbers([-2, -4]), []);

//基礎4----------------------------------NG!!!!-------------
/**
   * @param {Array<string>} ???
   * @returns {Array<string>} 与えられた配列の中にある、大文字で始まり、疑問符で終わる文字列のみを要素として持つ配列
   */
// ここにコードを書きましょう

// function getQuestions(arrayOfStrings) {
//     return arrayOfStrings.filter((element) => element >= "?");
// }


// const arrayOfStrings3 = [
//     "Hi, there.",
//     "What in the world?",
//     "My name is JavaScript",
//     "Do you want to know a secret?",
// ];

// test(getQuestions(arrayOfStrings3), [
//     "What in the world?",
//     "Do you want to know a secret?",
// ]);
// test(getQuestions(arrayOfStrings3.slice(2)), [
//     "Do you want to know a secret?",
// ]);

//中級1-----------------------------------------------
/**
    * @param {Array<string>} ???
    * @returns {Array<string>} 与えられた配列の中にある、長さが奇数で、文字がすべて大文字の文字列のみを要素として持つ配列
    */
// ここにコードを書きましょう
// function getOddLengthCapitalWords(arrayOfStrings4) {
//     return arrayOfStrings4
//         .filter((x) => x.length % 2 === 1)
//         .filter((x) => x.toUpperCase() === x)
// }

// const arrayOfStrings4 = ["SNAKE", "APPLES", "Peaches", "PUMPKINPIES"];

// test(getOddLengthCapitalWords(arrayOfStrings4), ["SNAKE", "PUMPKINPIES"]);
// test(getOddLengthCapitalWords(arrayOfStrings4.slice(1)), ["PUMPKINPIES"]);

//中級2----------------------------------------NG!!!!-------

/**
   * @param {Array<any>} ???
   * @param {Array<any>} ???
   * @returns {Array<any>} 与えられた配列の両方に存在する要素だけが入った配列
   */
// ここにコードを書きましょう
// function intersection(array1, array2){
//     const array = [array1, array2];
//     console.log(array1, array2);
//     console.log(array);
//     return array.filter((array1,array2) => array1 === array2
//     );
// }


// test(intersection([1, 2, 3], [1, 2, 3]), [1, 2, 3]);
// test(intersection([1, 2, 3], [2, 3, 4]), [2, 3]);
// test(intersection([1, 2, 3], [3, 4, 5]), [3]);
// test(intersection([1, 2, 3], [4, 5, 6]), []);
