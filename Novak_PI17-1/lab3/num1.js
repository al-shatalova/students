const itemsPool = [0, 1, 2]; // 0 === red

let redItems = 0;
for (let i = 0; i < 1000000; i++) {
    if (itemsPool[Math.floor(Math.random() * itemsPool.length)] === 0) {
        redItems++;
    }
}

const pluralize = num => ([1, 5, 6, 7, 8, 9, 0].includes(num)) ? 'раз' : 'раза'

alert(`Красное значение (${itemsPool[0]}) выпало ${redItems} ${pluralize(redItems)} `)
