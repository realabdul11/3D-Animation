const boxes = document.querySelector('#boxes');
const btn = document.querySelector('#btn');

function triger() {
  boxes.classList.toggle('big');
}

btn.addEventListener('click', triger);
function createBoxes() {
  for (let i = 0; i < 4; i++) {
    for (j = 0; j < 4; j++) {
      let box = document.createElement('div');
      box.classList.add('box');
      box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
      boxes.appendChild(box);
    }
  }
}

createBoxes();
