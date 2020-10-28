const itemsCount = [0, 0, 0]
const dict = {
    0: 'Красное',
    1: 'Черное',
    2: 'Белое',
}

for (let i = 0; i < 1000000; i++) {
    itemsCount[Math.floor(Math.random() * itemsCount.length)]++
}

const pluralize = num => ([1, 5, 6, 7, 8, 9, 0].includes(num)) ? 'раз' : 'раза'
const maxCountIndex = itemsCount.indexOf(Math.max(...itemsCount))
alert(`${dict[maxCountIndex]} значение (${maxCountIndex}) выпало ${itemsCount[maxCountIndex]} ${pluralize(itemsCount[maxCountIndex])} `)
