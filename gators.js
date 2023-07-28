'use strict'
// 1行目に記載している 'use strict' は削除しないでください

function gator(){
    target.textContent = "🐊";
}

const target = document.getElementById("target");
target.addEventListener("click", gator);
