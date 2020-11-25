function generate() {
  return Math.floor(Math.random() * 3);
}


let counter = 0;

for (let i = 0; i < 10**6; i++) {
  const value = generate();
  if (value === 0) {
    counter++;
  }
}


console.log('Кол-во раз красный был сгенерирован:', counter);
