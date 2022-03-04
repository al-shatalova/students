//красный - 0
//черный - 1
//белый - 2


const colors = ["красный", "черный", "белый"];


function generate() {
  return Math.floor(Math.random() * colors.length);
}

const maxColorStartPositions = [-1, -1, -1];
const maxColorSeqLengths = [0, 0, 0];


let currentStartPosition = 0;
let currentColorSeqLength = 0;

let lastValue = -1;

const arr = [];

const iterAmount = 10**6;

for (let i = 0; i < iterAmount; i++) {
  const value = generate();
  arr.push(value);

  if (value === lastValue && i < iterAmount - 1) {
    currentColorSeqLength++;
  } else {
    if (currentColorSeqLength > maxColorSeqLengths[lastValue]) {
      maxColorSeqLengths[lastValue] = currentColorSeqLength;
      maxColorStartPositions[lastValue] = currentStartPosition;
    }
    currentStartPosition = i;
    currentColorSeqLength = 1;
  }
  lastValue = value;
}

for (let j = 0; j < colors.length; j++) {
  const color = colors[j];
  console.log(`Последовательность из ${maxColorSeqLengths[j]} "${color}" начинается в позиции ${maxColorStartPositions[j]}`)
}

//console.log(arr);

console.log('Стартовые позиция для последовательностей = ', maxColorStartPositions);
console.log('Длины последовательностей = ', maxColorSeqLengths);
