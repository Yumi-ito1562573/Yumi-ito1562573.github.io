'use strict'
// 1行目に記載している 'use strict' は削除しないでください
//warmUp-----------------------------------------
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

// const obj1 = { a: "A" };
// const obj2 = { a: "A", b: 2 };
// const obj3 = { a: "A", b: 2, c: "C", d: true };
// const obj4 = { a: "A", c: "C" };
//---------------------------------------------------------
//warmUp1-----------------------------------------
/**
  * @param {object} オブジェクト
  * @returns {{ [key: string]: string }} 与えられたオブジェクト内の、値が文字列であるキーと値のペアのみを持つ新しいオブジェクト
  */
// function filterObjectForStrings(object) {
//     // ここにコードを書きましょう。
//     const result = {};
//     for (const key in object) {
//         if (typeof object[key] === "string") {
//             result[key] = object[key];
//         }
//     }
//     console.log(result);
//     return result;
// }

// test(filterObjectForStrings(obj1), obj1); // 変化なし
// test(filterObjectForStrings(obj2), obj1); // 値が 2 のペアは含まれていない
// test(filterObjectForStrings(obj3), obj4); // 値が 2 や true のペアは含まれていない

//warmUp2-----------------------------------------
/**
  * @param {Array<object>} arrayOfObjects - オブジェクトを要素に持つ配列
  * @returns {Array<{ [key: string]: string }>} 与えられた配列内の各オブジェクトについて、値が文字列であるキーと値のペアのみを持つ新しいオブジェクトを作成し、そのオブジェクトを要素に持つ新しい配列を返す。
  */
// function filterArrayForStrings(arrayOfObjects) {
//     // ここにコードを書きましょう.
//     // ここの中で関数 `filterObjectForStrings` を呼びましょう。
//     const resultArray = [];
//     for (const element of arrayOfObjects){
//         console.log(element);
//         resultArray.push(filterObjectForStrings(element));
//     }
//     return resultArray;
// }

// test(filterArrayForStrings([obj1]), [obj1]); // 変化なし
// test(filterArrayForStrings([obj1, obj2]), [obj1, obj1]); // 値が 2 のペアが含まれていないオブジェクトが入った配列
// test(filterArrayForStrings([obj3, obj2, obj1]), [obj4, obj1, obj1]); // 値が 2 や true のペアが含まれていないオブジェクトが入った配列

//確認1-----------------------------------------
// let index = 0;

// while (index <= 4) {
//   console.log("hello!");
//   index++;
// }

// for (let i = 0; i <= 4; i++){
//     console.log("let hello!")
// }

//確認2-----------------------------------------
// const array = ["a", "b", "c", "d", "e"];
// for (let i = 0; i < array.length; i++) {
//   console.log("Index: " + i, "Index: " + array[i]);
// }

//確認3-----------------------------------------
// function sayFourHellos(){
//     for (let i = 0; i < 4; i++){
//         console.log("Hello!");
//     } 
// }

// sayFourHellos();
//確認4-----------------------------------------
function countDown (start){
    for (let i =start; i >= 0; i--){
        console.log(i);
    }
}

countDown(5);
