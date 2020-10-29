function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getCard() {
    let cards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    return cards[getRandomInt(0, cards.length - 1)];
}

function getSum(hand) {
    let sum = 0;
    for (let i = 0; i < hand.length; i++) {
        let card = hand[i];
        if (card != 'A') {
            if (card == 'J' || card == 'Q' || card == 'K') {
                sum += 10;
            } else {
                sum += parseInt(card);
            }
        }
    }
    for (let i = 0; i < hand.length; i++) {
        let card = hand[i];
        if (card == 'A') {
            if (sum > 10) {
                sum += 1;
            } else {
                sum += 11;
            }
        }
    }
    return sum;
}

function getStatus() {
    return 'Дилер: ' + dealer.join(' ') + ' Игрок: ' + player.join(' ') + '.';
}



// начальная раздача
let dealer = [getCard()]
let player = [getCard(), getCard()];

let answer = '';
let overdraw = false;
let blackjack = false;

// цикл игрока
do {
    answer = prompt(getStatus() + '\n Хотите ещё карту?\n 1 - да, иначе - нет.');
    if (answer == '1') {
        player.push(getCard());
        sum = getSum(player);
        if (sum > 21) {
            alert('Перебор!\n' + getStatus() + '\nВы проиграли.');
            overdraw = true;
            break;
        } else if (sum == 21) {
            alert('Black Jack!\n' + getStatus());
            blackjack = true;
            break;
        }
    }
} while (answer == '1');


// Анонс результатов
alert('Дилер: ' + dealer.join(' ') + ' Игрок: ' + player.join(' ') + '.');
alert('Текущая сумма карт у игрока: ' + getSum(player));

// цикл крупье
dealerSum = getSum(dealer);
let dealer_blackjack = false;
let dealer_overdraw = false;

while (dealerSum < 17) {
    alert('Дилер берет карту');
    dealer.push(getCard());
    alert(getStatus());
    // sum = getSum(player);
    if (dealerSum > 21) {
        alert('Перебор у дилера!\n' + getStatus());
        dealer_overdraw = true;
        break;
    } else if (dealerSum == 21) {
        alert('Black Jack у дилера!\n' + getStatus());
        dealer_blackjack = true;
        break;
    }
    dealerSum = getSum(dealer)
}

if (dealer_overdraw && overdraw) {
    alert('Вы вместе с дилером проиграли');
} else if (overdraw) {
    alert('Вы проиграли по перебору!');
} else if (dealer_overdraw || blackjack) {
    word = blackjack ? 'у вас блекджек!' : 'у дилера перебор!';
    alert('Вы выиграли у дилера, ' + word + '!');
} else if (blackjack && dealer_blackjack) {
    alert('И вы, и дилер выиграли - ничья!');
} else {
    if (getSum(dealer) > getSum(player)) {
        alert('Вы проиграли по сумме\nСумма дилера:' + getSum(dealer) + '\nСумма игрока:' + getSum(player));
    } else {
        alert('Вы выиграли по сумме\nСумма дилера:' + getSum(dealer) + '\nСумма игрока:' + getSum(player));
    }
}
