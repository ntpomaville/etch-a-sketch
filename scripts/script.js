const container = document.querySelector('#drawZone');

let content = [];
let color;
let dimensions = 16;
let screenPercent = ((1 / dimensions) * 100);
console.log(screenPercent);

let handler = function() {
  this.style.backgroundColor = "gray";
  color = "black";
  console.log(color);
}


for (i=0; i<(dimensions * dimensions); i++) {
  content[i] = document.createElement('div');
  content[i].classList.add('grid');
  content[i].style.width = screenPercent + '%';
  container.appendChild(content[i]);
  content[i].addEventListener('mouseover', handler);
}

console.log(screenPercent);



const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  for (i=0; i<(dimensions * dimensions); i++) {
    content[i].remove();
  }

  dimensions = prompt("Enter number of squares per side (positive number no more than 240)")
  if (dimensions > 240) {dimensions = 16};
  if (dimensions < 1) {dimensions = 16};
  if (Number(dimensions)) {} else {dimensions = 16};
  console.log(dimensions);

  screenPercent = ((1 / dimensions) * 100);
  console.log(screenPercent)

  content[1].remove();

  for (i=0; i<(dimensions * dimensions); i++) {
    content[i] = document.createElement('div');
    content[i].classList.add('grid');
    content[i].style.width = screenPercent + '%';
    container.appendChild(content[i]);
    content[i].addEventListener('mouseover', handler);
  }
  });



