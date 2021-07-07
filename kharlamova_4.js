/**
 * @return {number} цена карты (не учитывает ТУЗ)
 */
function getCardValueWithoutA(cardValue) {
    if (isNaN(parseInt(cardValue))) {
        return 10;
    } else {
        return parseInt(cardValue);
    }
}


/**
 * @param cards карты
 * @return {number} сумма карт (не учитывает ТУЗ)
 */
function getCardsSumWithoutA(cards) {
    return cards.filter(card => card !== 'A')
        .map(card => getCardValueWithoutA(card))
        .reduce((prev, curr) => prev + curr, 0);
}

/**

 * @param cards карты
 * @return {boolean} наличие туза в картах
 */
function existsAInCards(cards) {
    return cards.findIndex(card => card === 'A') !== -1;
}

/**
 * @param cards карты
 * @return {number} сумма очков карт
 */
function getCardsSum(cards) {
    let sum = getCardsSumWithoutA(cards);
    if (!existsAInCards(cards)) {
        return sum;
    }
    if (sum > 10) {
        return sum + 1;
    } else {
        return sum + 11;
    }
}

/**
 * @return {string} рандомная карта
 */
function getRandomCard() {
    const cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', ' K', 'A'];
    const random = Math.floor(Math.random() * cards.length);
    return cards[random];
}


/**
 * Эмулирует ход  игрока
 * Действуем по простому:
 * - если сумма карт меньше или равнеа 16 или вес туза 11, то берем новую карту
 * - иначе останавливаемся
 * @param playerCards карты игрока
 * @return {string} брать новую карту или нет
 */
function makePlayerChoose(playerCards) {
    const cardsSum = getCardsSum(playerCards);
    const cardsSumWithoutA = getCardsSumWithoutA(playerCards);
    const weightA = cardsSum - cardsSumWithoutA;
    if (cardsSum <= 16 || weightA === 11) {
        return 'more';
    }
    return 'stop';
}

/**
 * Делаем ходы игрока
 * @param playerCards карты игрока
 * @return карты игрока после ходов
 */
function makePlayerTurns(playerCards) {
    while (true) {
        const playerChoose = makePlayerChoose(playerCards);
        if (playerChoose === 'stop') {
            console.log(`Player say stop, cards=[${playerCards}] sum=${getCardsSum(playerCards)}`);
            return playerCards;
        }
        playerCards.push(getRandomCard());
        console.log(`Player say more, now cards=[${playerCards}] sum=${getCardsSum(playerCards)}`);
        const cardsSum = getCardsSum(playerCards);
        if (cardsSum >= 21) {
            return playerCards;
        }
    }
}

function makeDealerTurns(dealerCards) {
    while (getCardsSum(dealerCards) < 17) {
        dealerCards.push(getRandomCard());
        console.log(`Dealer took a new card, now cards=[${dealerCards}], sum=${getCardsSum(dealerCards)}`)
        if (dealerCards.length === 2 && getCardsSum(dealerCards) === 21) {
            return dealerCards;
        }
    }
    return dealerCards;
}

function startGame() {
    const dealerCards = [getRandomCard()];
    const playerCards = [getRandomCard(), getRandomCard()];
    console.log(`Player cards: [${playerCards}] with sum ${getCardsSum(playerCards)}`);
    console.log(`Dealer cards: [${dealerCards}] with sum ${getCardsSum(dealerCards)}`);

    if (getCardsSum(playerCards) === 21) {
        console.log(`Player has black jack, cards=[${playerCards}], sum=${getCardsSum(playerCards)}`);
        return;
    }

    const newPlayerCards = makePlayerTurns(playerCards);
    const newPlayerCardsSum = getCardsSum(newPlayerCards);
    if (newPlayerCardsSum === 21) {
        console.log(`Player has black jack, cards=[${newPlayerCards}], sum=${newPlayerCardsSum}`);
        return;
    }

    if (newPlayerCardsSum > 21) {
        console.log(`Player loose, cards=[${newPlayerCards}], sum=${newPlayerCardsSum}`);
        return;
    }

    const newDealerCards = makeDealerTurns(dealerCards);
    const newDealerSum = getCardsSum(newDealerCards);

    if (newDealerSum > newPlayerCardsSum) {
        console.log('Dealer win');
    } else if (newDealerSum === newPlayerCardsSum) {
        console.log('Draw');
    } else {
        console.log('Player win');
    }
}

startGame();