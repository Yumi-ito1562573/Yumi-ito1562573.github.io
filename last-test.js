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

//test1----------------------------------------------------
// ここにコードを書きましょう

// function evenOrOdd(numArray, boolean) {
//     const result = [];
//     for (const num of numArray) {
//         if (boolean === true) {
//             if (num % 2 !== 1) {
//                 result.push(num);
//             }
//         } else if (boolean === false) {
//             if (num % 2 !== 0) {
//                 result.push(num);
//             }
//         }
//     }
//     // console.log(result);
//     return result;
// }

// test(evenOrOdd([1, 2, 3, 4, 5], true),[2, 4]); // [2, 4]
// test(evenOrOdd([0, 4, 36], false),[]); // []
// test(evenOrOdd([-1, -2, 4, -5, -7], false),[-1, -5, -7]); // [-1, -5, -7]


//test2----------------------------------------------------
// ここにコードを書きましょう
// function findKeys(obj, target) {
//     const newArray = [];
//     for (const key in obj) {
//         if (target === obj[key]) {
//             newArray.push(key);
//         }
//     }
//     // console.log(newArray);
//     return newArray;
// }

// test(findKeys({ a: 1, b: 2, c: 6, d: 4, e: 2 }, 2),["b", "e"]); // ["b", "e"]
// test(findKeys({ 1: "h", b: "el", c: "hello", d: "hello", e: "o" }, "hello"),["c", "d"]); // ["c", "d"]


//test3-----------------------------------NG -> OK------------
// ここにコードを書きましょう
//patern-No.1---------
// function buildObject(array1, array2){
//     const result = {};
//     for (let i = 0; i < array1.length; i++){
//         result[array1[i]] = array2[i];
//     }
//     console.log(result);
//     return result;
// }

//patern-No.2---------
// function buildObject(array1, array2) {
//     const newObject = array2.reduce((accumulator, currentValue, index) => {
//         accumulator[array1[index]] = currentValue;
//         // console.log(accumulator, currentValue, index)
//         return accumulator;
//     }, {});
//     // console.log(newObject)
//     return newObject;
// }


// test(buildObject(["a", "b", "c"], [1, 2, 3]), { "a": 1, "b": 2, "c": 3 }); // {"a": 1, "b": 2, "c": 3}
// test(buildObject(["cat", "dog", "duck"], ["meow", "woof", "quack"]),{"cat": "meow", "dog": "woof", "duck": "quack"}); // {"cat": "meow", "dog": "woof", "duck": "quack"}
// test(buildObject(["cat", "dog", "duck"], [null, 0, NaN]),{"cat": null, "dog": 0, "duck": NaN}); // {"cat": null, "dog": 0, "duck": NaN}
// test(buildObject(["abc", "def", "ghi"], [[0, 1, 2], [3, 4, 5], [6, 7, 8]]),{"abc": [0, 1, 2], "def": [3, 4, 5], "ghi": [6, 7, 8]});  // {"abc": [0, 1, 2], "def": [3, 4, 5], "ghi": [6, 7, 8]}

//test4----------------------------------------------------
// ここにコードを書きましょう
// function add(x){
//     function addAny(y){
//         return x + y;
//     }
//     return addAny;
// }

// const addTwo = add(2);
// test((addTwo(3)),5); // 5
// test((addTwo(70)),72); // 72

// const addOneHundred = add(100);
// test((addOneHundred(3)),103); // 103

//test5----------------------------------------------------

// function simpleHello() {
//     console.log("Hello");
//     // return "Hello"
// }

// function anotherGreeting(name) {
//     return "Hello, " + name;
// }

// const foo = simpleHello();
// const bar = anotherGreeting("JavaScript");

// console.log(foo);
// console.log(bar);

// あなたの回答と、なぜそうなるのかの説明をここに記載してください

/* 回答-1
console.log(foo); --> foo Hello
実引数「foo」は「simpleHello()」という関数が代入されており、
「simpleHello()」の副産物「Hello」と返り値はないので「undefined」が出る。
 */


/* 回答-2
console.log(bar);　--> Hello, JavaScript
実引数「bar」は、「anotherGreeting(実引数"JavaScript")」という
関数が代入されており、関数anotherGreetingに仮引数にJavaScriptが渡された
「Hello, JavaScript」が返り値として出る。
 */

//test6----------------------------------------------------

//test7----------------------------------------------------
// ここにコードを書きましょう
// function map(any, addOne) {
//     const result = [];
//     if (Array.isArray(any)) {
//         for (const element of any) {
//             result.push(addOne(element));
//         }
//         // console.log(result);
//         return result;

//     } else {
//         for (const key in any) {
//             result.push(addOne(any[key]));
//         }
//         // console.log(result);
//         return result;
//     }
// }

// function addOne(num) {
//     return num + 1;
// }

// test(map([1, 2, 3], addOne),[2, 3, 4]); // [2, 3, 4]
// test(map({ a: 1, b: 2, c: 3 }, addOne),[2, 3, 4]); // [2, 3, 4]

//test8----------------------------------------------------
// ここにコードを書きましょう
// function changeMiddle(sentence, word){
//     const wordsList = sentence.split(' ');
//     wordsList[1] = word;
//     const newWordsList = wordsList.join(' ');
//     // console.log(newWordsList);
//     return newWordsList;
// }

// test(changeMiddle("I like cats", "love"),"I love cats"); // "I love cats"
// test(changeMiddle("red green blue", "yellow"),"red yellow blue"); // "red yellow blue"

//test9-------------------------------------------途中 -> OK---------
// ここにコードを書きましょう
// function countSomething(someArray){
//     const stringResult = [];
//     const boolResult = [];
//     const numberResult = [];
//     for(const element of someArray){
//         if(typeof element === "string"){
//             stringResult.push(element);
//         }else if(typeof element === "boolean"){
//             boolResult.push(element);
//         }else if(typeof element === "number"){
//             numberResult.push(element);
//         }
//     }


//     let max = Math.max(stringResult.length, boolResult.length, numberResult.length);
//     // console.log(max);

//     if (max === stringResult.length){
//         return `STRING COUNT: ${stringResult.length}`;
//     }else if (max === boolResult.length){
//         return `BOOL COUNT: ${boolResult.length}`;   
//     }else{
//         return `NUMBER COUNT: ${numberResult.length}`;
//     }
//     // console.log(stringResult.length);
//     // console.log(boolResult.length);
//     // console.log(numberResult.length);
// }


// test(countSomething(["a", "b", "c", true, false, 2]),"STRING COUNT: 3"); // "STRING COUNT: 3"
// test(countSomething([true, true, false, true]),"BOOL COUNT: 4"); // "BOOL COUNT: 4"
// test(countSomething([true, true, 1, 0, 1, false, 1]),"NUMBER COUNT: 4"); // "NUMBER COUNT: 4"

//test10----------------------------------------------------
// ここにコードを書きましょう
// function each(collection, action) {
//     for (const element in collection) {
//         action(collection[element]);
//     }
// }
// each({ a: 1, b: 2, c: 3 }, console.log);
// each([4, 5, 6], console.log);

// 上記を実行すると下記を表示するはずです
// 1
// 2
// 3
// 4
// 5
// 6

//test11----------------------------------NG------------------
// ここにコードを書きましょう
function compose(funcA,funcB){
    function innCompose(x){
        // console.log(x);
        return funcB + funcA;
    }
    return innCompose;
}

function multiplyTwo(x) {
    return x * 2;
}
console.log(multiplyTwo(x));

function addTen(x) {
    return x + 10;
}



const baz = compose(multiplyTwo, addTen);

test(baz(5),20); // 20
test(baz(100),210); // 210

