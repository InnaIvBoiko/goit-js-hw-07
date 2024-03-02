function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const inputNamber = document.querySelector('input');

const btnCreate = document.querySelector('button[data-create]');

const btnDestroy = document.querySelector('button[data-destroy]');

const boxes = document.querySelector('#boxes');

btnCreate.addEventListener("click", (event) => { 
  if (inputNamber.value > 0 && inputNamber.value <= 100) {
    let px = 30;
    boxes.innerHTML = '';
   
    for (let i = 0; i < inputNamber.value; i++) {
      px += 10;
      const randomHexColor = getRandomHexColor();
      const box = document.createElement('div');
      let pxStyle = `${px}px`;
      box.style.width = pxStyle;
      box.style.height = pxStyle;
      box.style.backgroundColor = randomHexColor;
      boxes.append(box);
    };

    inputNamber.value = '';
  };
});

btnDestroy.addEventListener('click', (event) => {
  boxes.innerHTML = '';
})