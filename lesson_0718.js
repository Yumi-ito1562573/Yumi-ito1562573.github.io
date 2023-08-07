'use strict'
// 1行目に記載している 'use strict' は削除しないでください
//warm_up------------------------------------------
/**
   * @param {Array<number>} numArray - 数値型の要素を持つ配列
   * @returns {Array<number>} 与えられた配列の中の奇数（odd number）だけが入った新しい配列
   */
// function getOddNumbers(numArray) {
//     // ここにコードを書きましょう
//     const result = [];
//     for (const oddNumber of numArray) {
//         console.log(oddNumber);
//         if (oddNumber % 2 === 1) {
//             result.push(oddNumber);
//         }
//     }
//     return result;
// }

// let actual = getOddNumbers([1, 2, 3, 4, 5, 6, 7, 8]);
// let expected = [1, 3, 5, 7];

// // 現時点では、配列の比較には JSON.stringify を使う必要があると覚えておいてください。
// if (JSON.stringify(actual) === JSON.stringify(expected)) {
//     console.log("Yay! Test PASSED.");
// } else {
//     console.error("Test FAILED. Keep trying!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
// }

// ここにテストを書きましょう
//基礎0_1------------------------------------------
// const place = "Zoom";
// const lesson = {
//     students: ["田中", "川西", "大村"],
//     coding: true,
//     place: "Zoom",
// };
// console.log(lesson["place"]); // Zoom
// console.log(lesson.place); // Zoom
// console.log(lesson[place]); // undefind
// console.log(lesson["cod" + "ing"]); // true
// console.log(lesson[2]); // place: "Zoom"----undefind
// console.log(lesson.students[2]); // 大村
// console.log(lesson.length); // 3----undefind
// console.log(lesson.students.length); // 3
// console.log(typeof lesson.students); // Array----object
// console.log(typeof lesson);//object
// console.log(typeof lesson.coding);//object
// console.log(lesson.students)//["田中", "川西", "大村"]
// console.log(typeof lesson.place);//string
//基礎0_2------------------------------------------
// const object = {
//     a: "おはよう",
//     b: "おやすみ",
//     c: 1000,
//   };

//   console.log(object["a"]); // おはよう
//   console.log(object.b); // おやすみ
//   object["b"] = "ありがとう";
//   console.log(object["b"]); // ありがとう

//   // これは少し難しい！ 😉
//   console.log(typeof object["a"]);
//   console.log(typeof object);
//   console.log(object[a]); // undefind
//基礎1------------------------------------------
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
//    // ここにコードを書きましょう。

// const myInfo = {
//     name : "Yumi",
//     age : 18,
//     location : "home",
//     isProgrammer : true,
// };

//    // この演習では TDD スタイルのテストは必要ありません。console.log を使用してあなたが入力した情報を表示してみましょう。
//    console.log(myInfo["isProgrammer"]); // => "true"

//基礎2------------------------------------------

// ここにコードを書きましょう.
// const morseCode = {
//     t: "-",
//     a: ".-",
//     r: ".-.",
// };

// console.log(morseCode.t);
//    test(morseCode["t"], "-");
//    test(morseCode["a"], ".-");
//    test(morseCode["r"], ".-.");

//基礎3------------------------------------------!!!!!NG-----

/**
  * @param {string}  モールス信号に変換する文字
  * @returns {string} 与えられた文字に対応するモールス信号
  */
// function morseCodeArt(moji) {
//     // ここにコードを書きましょう.
//     // const result = {};
//     for (const key in morseCode){
//         // console.log(morseCode[key]);
//         // console.log(key);
//         if (key === moji){
//             // return morseCode.key = morseCode[key];
//             // result[key] = morseCode[key];
//             return morseCode[key]
//         }
//     }
//     // console.log(result);
//     // return result;
// }

// test(morseCodeArt("a"), ".-");
// test(morseCodeArt("r"), ".-.");
// test(morseCodeArt("t"), "-");
// test(morseCodeArt("art"), ".- .-. -");

//基礎4-----------------------------------------!!!!!NG----

/**
    * @param {object}  オブジェクト
    * @param {Array<string>}  文字列の入った配列
    * @returns {object} 与えられた配列の要素をキーにして、それに対応する値を第 1 引数のオブジェクトから選んで作った新しいオブジェクト
    */
// ここにコードを書きましょう.
function select (obj, arrayString){
    const result = {};
    for (const key in obj){
        // console.log(arrayString);
        // console.log(key);
        // console.log(obj[key]);
        // console.log(typeof arrayString);
        if (arrayString === key){
            result[key] = obj[key];
        }
    }
    return result;
}

test(select({ a: 1, b: 2, c: 3 }, ["a"]), { a: 1 });
test(select({ a: 1, b: 2, c: 3 }, ["a", "c"]), { a: 1, c: 3 });
test(select({ a: 1, b: 2, c: 3 }, ["a", "b", "c"]), { a: 1, b: 2, c: 3 });
test(select({ a: 1, b: 2, c: 3 }, []), {});

//基礎5---------------------------------------------
/**
 * @param {string} moji
 * @returns {{ [character: string]: number }} 与えられた文字列の中の各文字をキーに、その登場回数を値にしたオブジェクト
 */
// ここにコードを書きましょう.

// function countCharacters (moji){
//     const arr = Array.from(moji);
//     console.log(arr);
//     let count = {};

//     for (let i = 0; i <arr.length; i++){
//         let elm = arr[i];
//         console.log(arr[i]);
// カウント部分の(count[elm] = count[elm] || 0) + 1;の記述は、論理演算子の短絡評価を利用して、以下のよう処理しています。
// count[elm]がある => count[elm]の現在値+1を格納。（既にカウントを開始している要素）
// count[elm]がない => count[elm]に1（0+1）を格納。（初めてカウントする要素：値はundefined）
//         count[elm] = (count[elm] || 0) + 1;
//     }
//     console.log(count);
//     return count;
// }


// test(countCharacters("hello"), { h: 1, e: 1, l: 2, o: 1 });
// test(countCharacters("hello hello"), { h: 2, e: 2, l: 4, o: 2, " ": 1 });

// const str = "hello";
// const arr = Array.from(str);

// console.log(Array.isArray(arr));
// console.log(arr);
//中級1---------------------------------------------
/**
 * @param {string}
 * @returns {{ [word: string]: number }} 与えられた文字列の中の各単語をキーとして持つオブジェクト。各キーに対応する値は、それぞれの単語が文字列の中で使われている回数。
 */
// ここにコードを書きましょう.
// function countWords(str){
//     const arr = str.split(' ');
//     console.log(arr);
//     let count = {};

//     for (let i = 0; i <arr.length; i++){
//         let elm = arr[i];
//         console.log(elm)
//         if (elm === ''){
//             count[elm] = (count[elm]) ;
//         }else{
//             count[elm] = (count[elm] || 0) + 1;
//         }
//     }
//     return count
// }

// test(countWords("hello hello"), { hello: 2 });
// test(countWords("hello Hello"), { hello: 1, Hello: 1 });
// test(countWords("おはよう おはよう こんばんは"), {おはよう: 2, こんばんは: 1})
// test(countWords(""), {});
