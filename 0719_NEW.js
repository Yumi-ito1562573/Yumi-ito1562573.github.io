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

/**
 * @param {Array<object>} 複数のオブジェクトが入った配列
 * @param {string} キー
 * @returns {Array<any>} 配列の中のオブジェクトから、第 2 引数と同じキーに対応する値だけを拾って（＝ pluck して）、配列に入れたもの
 */
// ここにコードを書きましょう。
// function pluck (arrayOfObjects, key){
//     const result = [];
//     for (const obj of arrayOfObjects){
//         console.log(obj);
//         for (const element in obj){
//             console.log(element);
//             if (element === key){
//                 result.push(obj[key]);
//         }
//         }
//     }
//     return result;
// }
// const arrayOfObjects = [  // オブジェクトの入った配列です。
//     { a: 1, b: 2, c: 3 },
//     { a: 4, b: 5, c: 6 },
//     { a: 7, b: 8, c: 9 },
// ];

// test(pluck(arrayOfObjects, "a"), [1, 4, 7]);

//基礎1-----------------------------------------
// const hellos = {
//     English: "Hello",
//     Japanese: "Konnichiwa",
//     German: "Hallo",
//     Spanish: "Hola",
//     Arabic: "Ahlan wa sahlan",
//     Chinese: "Nihao",
//   };

/*
 * @returns {undefined} この関数は挨拶をコンソールに表示するだけで、返り値は必要ありません。
 */

// ここにコードを書きましょう
// function sayHellos (){
//     for (const key in hellos){
//         console.log(hellos[key]);
//     }
// }

//   sayHellos();　// 実際にこの関数を呼び出すと、以下のようにコンソールに表示されることを確認しましょう。
//   // "Hello"
// "Konnichiwa"
// "Hallo"
// "Hola"
// "Ahlan wa sahlan"
// "Nihao"

//基礎2-----------------------------------------
/**
  * @param {object} anyObj
  * @returns {Array<string>} 与えられたオブジェクトのすべてのキーが入った配列
  */

// ここにコードを書きましょう
// function getKeys (anyObj){
//     const result = [];
//     for (const key in anyObj){
//         result.push(key);
//     }
//     return result;
// }

// const object1 = { a: 1, b: 2, c: "hello" };
// const object2 = { 1: "a", 2: "b", hello: "c" };

// test(getKeys(object1), ["a", "b", "c"]);
// test(getKeys(object2), ["1", "2", "hello"]);

//基礎3-----------------------------------------
/**
    * @param {object} ???
    * @returns {Array<any>} 与えられたオブジェクトのすべての値が入った配列
    */

// ここにコードを書きましょう
// function getValues (anyObj){
//     const result = [];
//     for (const key in anyObj){
//         result.push(anyObj[key]);
//     }
//     return result;
// }

// test(getValues(object1), [1, 2, "hello"]);
// test(getValues(object2), ["a", "b", "c"]);

//基礎4-----------------------------------------
// function printAllValues(object) {
//     for (const key in object) {
//       console.log(object[key]);
//     }
//   }

//   const myObject = { foo: 1, bar: 2, key: 3, delta: 4, lee: 5 };

//   printAllValues(myObject); // 1 2 3 4 5 と順番に表示されたら成功です！

//基礎5-----------------------------------------
/**
 * @param {object} オブジェクト。ただし値はすべて異なるものとする。
 * @returns {object} 与えられたオブジェクトのキーと値を入れ替えた、新しいオブジェクト
 */

// ここにコードを書きましょう
// function swapPairs (obj){
//     const result = {};
//     for (const key in obj){
//         result[obj[key]] = key;
//     }
//     return result;
// }

// const object3 = { a: 1, b: 2, c: 3, d: 4 };
// const object4 = { 1: "a", 2: "b", 3: "c", 4: "d" };

// test(swapPairs(object3), { 1: "a", 2: "b", 3: "c", 4: "d" });
// test(swapPairs(object4), { a: "1", b: "2", c: "3", d: "4" });

//基礎6-----------------------------------------
//配列で for...in ループを使用することはできるでしょうか。
//簡単な配列を作って、実際に試してみてください。
// const num = [1, 2, 3, 4, 5];
// for (const element of num){
//     console.log(element);
// }

//基礎7-----------------------------------------
//オブジェクトで for...of ループを使用することはできるでしょうか。
//簡単なオブジェクトを作って、実際に試してみてください。
// const numObj = {1:"red", 2:"blue", 3:"black", 4:"pink", 5:"white"};
// for (const key in numObj){
//     console.log(key);
// }

//復習1---------------------------------------疑問あり--
/**
   * @param {Array<object>} オブジェクトを要素に持つ配列
   * @returns {Array<any>} 与えられた配列の最初のオブジェクトのすべての値が入った新しい配列
   */
// ここにコードを書きましょう。
//   function getFirstObjectValues() {
//     console.log(collection);
//     let firstObj = collection.shift();
//     console.log(firstObj);

//     const result = [];
//     for (const key in firstObj){
//         result.push(firstObj[key]);
//     }
//     return result;
// }

// const collection = [{ a: 1, b: 2 }, { a: 3, b: 3 }, { b: 4 }, { a: 100 }];
// test(getFirstObjectValues(collection), [1, 2]);
// test(getFirstObjectValues(collection.slice(1)), [3, 3]);
// `.slice()` メソッドが不確かなら調べてみましょう。

//復習2-----------------------------------------
/**
    * @param {Array<object>} オブジェクトを要素に持つ配列
    * @returns {Array<any>} すべてのオブジェクトのすべての値が入った配列
    */

// ここにコードを書きましょう
// function getAllValues(arrayOfObjects) {
//     const result = [];
//     for (const obj of arrayOfObjects) {
//         for (const element in obj) {
//             result.push(obj[element]);
//         }
//     }
//     return result;
// }

// test(getAllValues(collection), [1, 2, 3, 3, 4, 100]);
// test(getAllValues(collection.slice(1)), [3, 3, 4, 100]);

//復習3-----------------------------------------
/**
    * @param {Array<object>} オブジェクトを要素に持つ配列
    * @param {string} 取り出したいキーの名前
    * @returns {Array<any>} すべてのオブジェクトにおいて第 2 引数のキーに対応する値が入った配列
    */

// ここにコードを書きましょう
// function selectValues (arrayOfObjects, moji){
//     const resultA = [];
//     const resultB = [];
//     for (const obj of arrayOfObjects){
//         for (const key in obj){
//             if (key === "a"){
//                 console.log("a_ " + key);
//                 console.log("a_ " + obj[key]);
//                 resultA.push(obj[key]);
//             }else{
//                 console.log("b_ " + key);
//                 console.log("b_ " + obj[key]);
//                 resultB.push(obj[key]);           
//             }
//         }
//     }
//     return (resultA, resultB);
// }

// test(selectValues(collection, "a"), [1, 3, 100]);
// test(selectValues(collection, "b"), [2, 3, 4]);

//中級1--------------------------------------!!!!!NG--
/**
  * @param {object}
  * @returns {object} 与えられたオブジェクトのキーと値を入れ替えた新しいオブジェクト。ただし、重複する値がある場合は、最初のキーと値のペアのみを使用し、その後のペアは無視すること。
  */

// ここにコードを書きましょう
// function swapPairs2(obj){
//     const newObj = {};
//     for (const key in obj){
//         // console.log(obj[key]);
//         if (obj[key] !== key){
//             console.log(obj[key]);
//             newObj[obj[key]] = key;
//         }

//     }
//     console.log(newObj);
//     return newObj;
// }

// const object5 = { a: 1, b: 2, c: 3, d: 1 };
// const object6 = { a: 1, b: 1, c: 1, d: 1 };

// `a: 1` と `d: 1` はどちらも値が `1` で重複しているので最初のキーと値のペアである `a: 1` を使い、`d: 1` は無視する。
// test(swapPairs2(object5), { 1: "a", 2: "b", 3: "c" });

// object6も 1 という値が何度も重複してでてくる。したがって、2 回目以降、1 が値になるキーと値のペアは無視される。
// test(swapPairs2(object6), { 1: "a" });




//基礎1-参照渡しと値渡し----------------------------
// let theLoneliestNumber = 1;

// let aFriend = theLoneliestNumber;

// console.log(theLoneliestNumber); // 1
// console.log(aFriend); // 1
// console.log(theLoneliestNumber === aFriend); // true

//基礎2-参照渡しと値渡し----------------------------
// const kermit = [
//     "red",
//     "orange",
//     "yellow",
//     "green",
//     "blue",
//     "indigo",
//     "violet",
// ];
// const missPiggy = kermit.slice();

// console.log(kermit); // 275-281
// console.log(missPiggy); // 275-281
// console.log(kermit === missPiggy); // false

//基礎3-参照渡しと値渡し----------------------------
// let mamas = "Monday";

// let papas = mamas;

// papas += ", so good to me.";

// console.log(mamas); // Monday
// console.log(papas); // Monday, so good to me.
// console.log(mamas === papas); // false

//基礎4-参照渡しと値渡し----------------------------
// const theFabFour = {
//     bass: ["paul"],
//     drums: ["ringo"],
//     guitar: ["george", "john"],
//     vocals: ["george", "john", "paul", "ringo"],
// };

// const theFifthBeatle = theFabFour;
// theFifthBeatle.guitar.push("beau");

// console.log(theFabFour); // 302-305
// console.log(theFifthBeatle); // 302-305
// console.log(theFabFour === theFifthBeatle); // true

// console.log(theFabFour.guitar); // george, john, beau
// console.log(theFifthBeatle.guitar); // george, john, beau
// console.log(theFabFour.guitar === theFifthBeatle.guitar); // true

//基礎5-参照渡しと値渡し----------------------------
// let isHot = true;
// let isCold = !isHot;//false

// isHot = !isHot;

// console.log(isHot); // false
// console.log(isCold); // false
// console.log(isHot === isCold); // true

//基礎6-参照渡しと値渡し---------------------------
const easyAs = [
    ["a", "b", "c"],
    [1, 2, 3],
    ["do", "re"],
];
const simpleAs = easyAs.slice();
simpleAs[2].push("mi");

console.log(easyAs); // 331-333_miあり
console.log(simpleAs); // 331-333_miあり
console.log(easyAs === simpleAs); // false

console.log(easyAs[2]); // do, re, mi
console.log(simpleAs[2]); // do, re, mi
console.log(easyAs[2] === simpleAs[2]); // true
