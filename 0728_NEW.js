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

//基礎1---------------------------------------------------
/**
    * @param {string} aisatsu
    * @returns {string} 与えられた引数に挨拶文を追加した文字列
    */
// ここにコードを書きましょう
// function getGreeting (aisatsu){
//     return `Hello, ${aisatsu}.`;
// }

// test(["zeno", "yanis", "xander"].map(getGreeting), [
//     "Hello, zeno.",
//     "Hello, yanis.",
//     "Hello, xander.",
// ]);

//基礎2---------------------------------------------------
/**
   * @param {number} num
   * @returns {number} 与えられた引数の絶対値
   */
// ここにコードを書きましょう
// function abs (num){
//     if (num < 0){
//         return num * -1;
//     }else{
//         return num;
//     }
// }
// test([1, 2, 3].map(abs), [1, 2, 3]);
// test([-1, -2, -3].map(abs), [1, 2, 3]);
// test([-1, 2, -3].map(abs), [1, 2, 3]);

//基礎3---------------------------------------------------
/**
    * @param {Array<number>} num
    * @returns {Array<number>} 与えられた配列の各要素に 1 を足した数を要素として持つ、新しい配列
    */
// ここにコードを書きましょう
// function addOne(num) {
//     return num + 1;
// }

// function getIncrementedNumbers(numArray) {
//     return numArray.map(addOne);
// }

// test(getIncrementedNumbers([1, 2, 3]), [2, 3, 4]);
// test(getIncrementedNumbers([-1, -2, -3]), [0, -1, -2]);

// const array1 = [0, 0, 0];
// test(getIncrementedNumbers(array1), [1, 1, 1]);
// // 元の配列が変更されていないことを確認してください
// test(array1, [0, 0, 0]);

//中級1---------------------------------------------------
/**
  * @param {Array<number|string>} ???
  * @returns {Array<number|string>} 与えられた配列の各要素が数値型なら文字列型に、文字列型なら数値型に変換したものが入った、新しい配列
  */
// ここにコードを書きましょう
function switched (element){
    if (typeof element === "number"){
        return element.toString();
    }else if(typeof element === "string"){
        return parseInt(element);
    }
}

function getSwitched(numberArray){
    return numberArray.map(switched);
}

test(getSwitched([1, 2, 3]), ["1", "2", "3"]);
test(getSwitched(["1", "2", "3"]), [1, 2, 3]);
test(getSwitched(["1", 2, "3"]), [1, "2", 3]);
