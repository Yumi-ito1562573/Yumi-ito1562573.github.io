'use strict';
// please do not delete the 'use strict' line above

document.getElementById('color-button').addEventListener('click', changeColor)

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}


function changeColor() {
  console.log('Button clicked!'); // feel free to change/delete this line
  const rndCol =
    "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
  document.body.style.backgroundColor = rndCol;
}

