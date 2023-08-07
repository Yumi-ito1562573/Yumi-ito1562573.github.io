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

//復習1-----------------------------------------
 /**
    * @param {Array<object>} オブジェクトを要素に持つ配列
    * @returns {Array<any>} 与えられた配列の最初のオブジェクトのすべての値が入った新しい配列
    */
   // ここにコードを書きましょう。
function getFirstObjectValues (arrayOfObjects){
    const result = [];
    collection.slice(0,1);
    for(const obj of arrayOfObjects){
        // console.log(obj);
        for(const key in obj){
                console.log(obj[key]);
                result.push(obj[key]);
            
        }
    }
    return result;
}
   const collection = [{ a: 1, b: 2 }, { a: 3, b: 3 }, { b: 4 }, { a: 100 }];

   test(getFirstObjectValues(collection), [1, 2]);
   test(getFirstObjectValues(collection.slice(1)), [3, 3]); 
   // `.slice()` メソッドが不確かなら調べてみましょう。
