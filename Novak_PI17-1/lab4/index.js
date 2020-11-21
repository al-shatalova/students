function updatePlayer() {
    const playerOut = document.getElementById('player_out')
    playerOut.innerText = `Карты игрока: ${player.join(', ')} (сумма: ${getSum(player)})`
}

function updateDealer() {
    const dealerOut = document.getElementById('dealer_out')
    dealerOut.innerText = `Карты дилера: ${dealer.join(', ')} (сумма: ${getSum(dealer)})`
}

function getWinner() {
    const playerSum = getSum(player)
    const dealerSum = getSum(dealer)

    if (playerSum > 21) {
        return 'Диллер'
    }

    if (dealerSum > 21) {
        return 'Игрок'
    }

    return playerSum > dealerSum ? 'Игрок' : 'Диллер'
}

function startGame() {
    player = [getRandomCard(), getRandomCard()]
    dealer = [getRandomCard()]

    currentUser = 'player'
    updatePlayer()
    updateDealer()
    updateStatus()
    updateActions()
}

function gameOver() {
    currentUser = undefined
    updateStatus()
    updateActions()
}

const hit = () => {
    if (currentUser === 'player') {
        player.push(getRandomCard())
        updatePlayer()

        if (getSum(player) > 21) {
            gameOver()
        }
    } else if (currentUser === 'dealer') {
        dealer.push(getRandomCard())
        updateDealer()

        if (getSum(dealer) > 16) {
            gameOver()
        }
    }
}

function updateActions() {
    const actions = document.getElementById('actions')
    const newActions = document.createElement('div')
    newActions.id = 'actions'

    if (!currentUser) {
        const restartButton = document.createElement('button')
        restartButton.onclick = () => startGame()
        restartButton.innerText = 'Сыграть еще раз...'

        newActions.append(restartButton)
    }

    if (currentUser === 'player') {
        const hitButton = document.createElement('button')
        hitButton.onclick = () => hit()
        hitButton.innerText = 'Ещё!'

        const passButton = document.createElement('button')
        passButton.onclick = () => {
            currentUser = 'dealer'
            updateStatus()
            updateActions()
        }
        passButton.innerText = 'Себе.'

        newActions.append(hitButton, passButton)
    }

    if (currentUser === 'dealer') {
        const hitButton = document.createElement('button')
        hitButton.onclick = () => hit()
        hitButton.innerText = 'Следующая карта...'

        newActions.append(hitButton)
    }
    actions.replaceWith(newActions)
}

function updateStatus() {
    const status = document.getElementById('status')
    if (currentUser === 'player') {
        status.innerHTML = 'Ходит <strong>Игрок</strong>'
    } else if (currentUser === 'dealer') {
        status.innerHTML = 'Ходит <strong>Дилер</strong>'
    } else {
        status.innerHTML = `Игра окончена. Победил <strong>${getWinner()}</strong>`
    }
}


const getSumWithoutA = arr => {
    const literalCards = {
        J: 10,
        Q: 10,
        K: 10,
    };

    return arr.reduce((sum, elem) => {
        if (Number.isNaN(parseInt(elem))) {
            return sum + (literalCards[elem] || 0)
        } else {
            return sum + parseInt(elem)
        }
    }, 0)
}
const getSum = arr => {
    let sum = getSumWithoutA(arr)
    arr.filter(card => card.toLowerCase() === 'a').forEach(() =>  sum += (sum > 10 ? 1 : 11))
    return sum
}

const getRandomCard = () => {
    return CARDS[Math.floor(Math.random() * CARDS.length)]
}

const CARDS = ['J', 'Q', 'K', 'A']
for (let i = 2; i < 11; i++) {
    CARDS.push(`${i}`)
}

let player, dealer, currentUser
startGame()
