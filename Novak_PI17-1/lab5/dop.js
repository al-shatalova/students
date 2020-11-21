class Game {
    static pluralize = num => ([1, 5, 6, 7, 8, 9, 0].includes(num)) ? 'раз' : 'раза'

    static dict = {
        0: 'Красное',
        1: 'Черное',
        2: 'Белое',
    }

    start() {
        const itemsCount = [0, 0, 0]

        for (let i = 0; i < 1000000; i++) {
            itemsCount[Math.floor(Math.random() * itemsCount.length)]++
        }

        const maxCountIndex = itemsCount.indexOf(Math.max(...itemsCount))
        alert(`${Game.dict[maxCountIndex]} значение (${maxCountIndex}) выпало ${itemsCount[maxCountIndex]} ${Game.pluralize(itemsCount[maxCountIndex])} `)
    }
}

const g = new Game()
g.start()
