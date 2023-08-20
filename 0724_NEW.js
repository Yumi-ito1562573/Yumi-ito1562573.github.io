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

// function outerFunc(){
//     let count = 1;
//     function counter(){
//         console.log(count);
//         count += 1;
//     }
//     return counter;
// }
// const counter1 = outerFunc();

// counter1();
// counter1();

// console.log(count);
//確認1-------------------------------------------------
// function addOne(num) {
//     return num + 1;
//   }

//   test(addOne(5), 6);
//   test(addOne(50), 51);
//確認2-------------------------------------------------
// function doSomething(value, action) {
//     return action(value);
//   }

//   function greeting(name) {
//     return `こんにちは、${name}さん！`;
//   }

//   test(doSomething("田中", greeting()), "こんにちは、田中さん！"); // A
//   test(doSomething("田中", greeting), "こんにちは、田中さん！"); // B-OK
//確認3-------------------------------------------------
// let x = "Outside x";

// function bar() {
//   let x = "Inside x";
//   return "Bar!";
// }

// bar();
// console.log(x);//Outside x
//基礎1-------------------------------------------------
// function createAccount(userPassword) {
//     const savedPassword = userPassword;
//     console.log(savedPassword);

//     function checkPassword(passwordEntered) {
//         console.log(passwordEntered);
//         if (savedPassword === passwordEntered) {
//             console.log("正しいパスワードです。アクセスを許可します。");
//         } else {
//             console.log("パスワードが間違っています。アクセスできません。");
//         }
//     }

//     return checkPassword;
// }

//   const account = createAccount("Test1234"); // 引数に初期パスワードを入れる。
//   account("8skwob"); // 引数に間違ったパスワードを入れる => "パスワードが間違っています。アクセスできません。"
//   account("Test1234"); // 引数に正しいパスワードを入れる => "正しいパスワードです。アクセスを許可します。"
//基礎2---------------------------------------------wakaran----
// function createDonationAccount() {
//     let donations = 0;

//     function addDonation() {
//         console.log(donations);
//         donations += 1;
//     }
//     console.log("寄付受付口座が作成されました。");
//     return addDonation;
// }

// createDonationAccount();

// createDonationAccount();
//基礎3-------------------------------------------------
/**
 * @param {number} x
 * @returns {(y: number) => number} 引数 y をとり、y に x を足した値を返す関数
 */
// コードを書き始めましょう
// function add(x) {
//     // ここにコードを書きましょう
//     function addMaker(y){
//         console.log(y);
//         return y + x;
//     }
//     return addMaker;
// }

// const addFive = add(5);
// test(addFive(1), 6);
//基礎4-------------------------------------------------

// function makeCounter() {
//     let counter = 0;
//    function count() {
//     return counter += 1;
//     }
//     return count;
// }

// const counterA = makeCounter();
// test(counterA(), 1);
// test(counterA(), 2);

// const counterB = makeCounter(); // 新しいカウンターを作りたい。
// test(counterB(), 1);
// test(counterB(), 2);
//中級1-------------------------------------------------
/**
 * @param {number} 年齢
 * @returns {() => boolean} 実行されるたびに age に 1 を足し、 age が 13 以上かどうかを返す関数
 */
// ここにコードを書きましょう
// function createWebsiteAccount(age){
//     function ageCount(){
//         age += 1;
//         console.log(age);
//         if(age === 13){
//             console.log("今、子供は 13 歳です！")
//             return true;
//         }else if(age > 13){
//             return true;
//         }else{
//             return false;
//         }
//     }
//     return ageCount;
// }


// const childAccount = createWebsiteAccount(10);
// test(childAccount(), false); // => false
// test(childAccount(), false); // => false
// test(childAccount(), true); // => true (今、子供は 13 歳です！)

// const adultAccount = createWebsiteAccount(33);
// test(adultAccount(), true); // => true (何回呼び出すかに関わらず、いつも true を返す)
//中級2-------------------------------------------------
/**
 * @param {number} x
 * @returns {(y: number) => number} 引数として y をとり、x に y を掛け合わせた値を返す関数
 */
// ここにコードを書きましょう
// function multiply(x){
//     function baseMultiply(y){
//         return x * y;
//     }
//     return baseMultiply;
// }

// const multiplyByThree = multiply(3);

// test(multiplyByThree(4), 12);
// test(multiply(4)(5), 20);
//中級3-------------------------------------------------
/**
 * @param {number} x
 * @returns {(y: number) => number} 引数として y をとり、x から y を引いた値を返す関数
 */
// ここにコードを書きましょう
function subtract(x){
    function minus(y){
        return x - y;
    }
    return minus;
}

const subtractFive = subtract(5);

test(subtractFive(4), 1);
test(subtract(10)(8), 2);
