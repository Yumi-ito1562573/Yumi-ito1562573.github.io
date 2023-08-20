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

//warmUp---------------------------------------------------
/**
 * @param {number} x
 * @returns {(y: number) => number} 引数として y を取り、x を y で割った値を返す関数
 */
// ここにコードを書きましょう
// function divide(x){
//     function baseDivide(y){
//         return x / y;
//     }
//     return baseDivide;
// }

// const divideByTwo = divide(2);

// test(divideByTwo(4), 0.5);
// test(divide(2)(1), 2);
//基礎1-2-3------------------------------------------------
const myMathObject = {
    sum: function (...theArgs) {
        let total = 0;
        for (const arg of theArgs){
            total += arg;
        }
        return total;
    },
    product: function (...theArgs) {
        let total = 1;
        for (const arg of theArgs){
            total *= arg;
        }
        return total;
    },
    isEven: function (...theArgs) { 
        for (const arg of theArgs){
            if(arg % 2 === 0){
                return true;
            }else{
                return false;
            }
        }
    },
    getNumbers: function (...theArgs){
        const result = [];
        for (const arg of theArgs){
            // console.log(arg);
            if (typeof arg === "number"){
                result.push(arg);
            }
        }
        return result;
    },
    abs: function (...theArgs){
        for (const arg of theArgs){
            if (arg < 0){
                return arg * -1;
            }else{
                return arg;
            }
        }
    },
    power: function (...theArgs){
        for (const arg of theArgs){
            for (let i = 1; i >= exponent;i++){
                return base * i;
            }
        }
    }
};

// test(myMathObject.sum(1), 1);
// test(myMathObject.sum(1, 2, 3), 6);
// test(myMathObject.product(1, 2, 3, 4), 24);
// test(myMathObject.isEven(2, 3), true, false);
// console.log(myMathObject.sum(19283, 18475, 199999));
// console.log(myMathObject.product(19283, 18475, 199999));
// console.log(myMathObject.isEven(19));
// test(myMathObject.getNumbers(1, 2, 3, 4), [1, 2, 3, 4]);
// test(myMathObject.getNumbers("foo", 3, "4", "hi", 1), [3, 1]);

//中級1--------------------------------------------------
/**
 * @param {number} 数値を引数にとる
 * @returns {number} 与えられた数字の絶対値
 */
// test(myMathObject.abs(1), 1);
// test(myMathObject.abs(-1), 1);
// test(myMathObject.abs(435678.745389), 435678.745389);
// test(myMathObject.abs(-675843.753489), 675843.753489);
//中級2---------------------------------------------NG!!!!-----
/**
    * @param {number} 底（てい）(base)
    * @param {number} 指数 (exponent)
    * @returns {number} 与えられた底を与えられた指数で累乗した結果、べき (power)
    */
const MIN_BASE = -5;
const MAX_BASE = 5;
const MIN_EXPONENT = -5;
const MAX_EXPONENT = 5;

// 以下のコードでは、一度にたくさんのテストをする工夫をしています。
// 途中使われている `isNearlyEqual` は浮動小数点数の比較をする関数です。

for (let base = MIN_BASE; base <= MAX_BASE; ++base) {
  for (let exponent = MIN_EXPONENT; exponent <= MAX_EXPONENT; ++exponent) {
    const actual = myMathObject.power(base, exponent);
    const expected = Math.pow(base, exponent);
    if (isNearlyEqual(actual, expected)) {
      console.log("Yay! Test PASSED.");
    } else {
      console.error("Test FAILED. Keep trying!");
      console.log("    actual: ", actual);
      console.log("  expected: ", expected);
      console.trace();
    }
  }
}

// 「ほぼ等しい」かどうかを判断する関数、`isNearlyEqual` の定義（参照文献： https://floating-point-gui.de/errors/comparison/）
function isNearlyEqual(a, b) {
  const absA = Math.abs(a);
  const absB = Math.abs(b);
  const diff = Math.abs(a - b);

  if (a == b) {
    return true;
  } else if (a == 0 || b == 0 || absA + absB < Number.MIN_VALUE) {
    return diff < Number.EPSILON * Number.MIN_VALUE;
  } else {
    return diff / Math.min(absA + absB, Number.MAX_VALUE) < Number.EPSILON;
  }
}
