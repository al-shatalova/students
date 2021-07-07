// 1.
/**
 * @returns {number} рандомное число от 0 до 2 (вкл)
 */
function getRandomNumberFromZeroToTwo() {
    let generated = Math.random() * 3
    if (generated === 3) {
        generated -= 0.01;
    }
    return Math.trunc(generated);
}

/**
 * @returns {number[]} 3 радномых числа от 0 до 2
 */
function getRandomNumbersFromZeroToTwo() {
    return [getRandomNumberFromZeroToTwo(), getRandomNumberFromZeroToTwo(), getRandomNumberFromZeroToTwo()];
}

/**
 *
 * @param iterations число итераций
 * @returns {number} кол-во встречаюшихся красных элементов
 */
function calcReds(iterations) {
    let redTotal = 0;
    for (i = 0; i <= iterations; i++) {
        const generatedArr = getRandomNumbersFromZeroToTwo();
        redTotal += countReds(generatedArr);
    }
    return redTotal;
}

/**
 * Кол-во 0 (красных) элементов в массиве
 */
function countReds(arr) {
    return arr.filter(el => el === 0).length;
}

const iterations = 1_000_000;
alert(`За ${iterations} генераций массива встретилось ${calcReds(iterations)} красных элементов`);


const stat = {
    'J': 11,
    'Q': 12,
    'K': 13,
    'A': 14
}

// task 2
function getSum(arr) {
    const expectedSymbols = Object.keys(stat);
    const notFoundSymbols = arr.filter(el => expectedSymbols.findIndex(s => s === el) === -1);
    if (notFoundSymbols.length !== 0) {
        alert(`Эти символы неизвестны и не будут обработаны: ${Array.from(new Set(notFoundSymbols))}`);
    }
    return arr.filter(el => expectedSymbols.findIndex(s => s === el) !== -1)
        .map(symbol => stat[symbol])
        .reduce((a, b) => a + b, 0);
}

const arr = ['M', 'A', 'Q', 'R', 'R', 'J'];
alert(`Сумма очков в массиве (неизвестные символы в сумму не вошли) ${arr} = ${getSum(arr)}`)

