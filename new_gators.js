'use strict'
// 1行目に記載している 'use strict' は削除しないでください

function gator() {
    const value = document.getElementById("gatorButton").value;
    console.log(value);

   for (let i = 0; i < value; i++){
       document.getElementById("target2").append("🐊");
   }
}


const target = document.getElementById("target");
target.addEventListener("click", gator);
