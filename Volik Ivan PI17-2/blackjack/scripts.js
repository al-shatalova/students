import { points } from "./points.js";

const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const betValue = document.querySelector(".value");
const fieldBlock = document.querySelector(".field");
let bet = +betValue?.innerHTML || 0;
const sumValue = document.querySelector(".sum");
let totalSum = +sumValue?.innerHTML || 0;

const onBetActionClick = ({ target }) => {
    const delta = +target.closest("[data-delta]").dataset.delta;
    const newBet = bet + delta;
    if (newBet > 0) {
        const newSum = -delta + totalSum;
        setBet(newBet, newSum);
    }
};

function setBet(newBet, tSum) {
    bet = newBet;
    totalSum = tSum;
    betValue.innerHTML = bet;
    sumValue.innerHTML = totalSum;
}

plus.addEventListener("click", onBetActionClick);
minus.addEventListener("click", onBetActionClick);

const start = document.querySelector(".start");
const check = document.querySelector(".check");
const call = document.querySelector(".call");
const newGame = document.querySelector(".new-game");
const betControl = document.querySelector(".bet");
const dealerScore = document.querySelector(".dealer-score");
const playerScore = document.querySelector(".player-score");
let score = {
    dealer: { value: +dealerScore.innerHTML, oversized: false },
    player: { value: +playerScore.innerHTML, oversized: false },
};
const cardsCount = 52;
const cardHeight = 168;
const fieldHeight = 600;
const fieldPadding = 20;

let interval;

let cards = {
    dealer: [],
    player: [],
};

const startGame = () => {
    start.classList.add("d-none");
    betControl.classList.add("d-none");
    check.classList.remove("d-none");
    call.classList.remove("d-none");
    giveCard("dealer", 1);
    giveCard("player", 2);
    if (score.player.value == 21) {
        const win = [11, 10].indexOf(cards.dealer[0]) == -1;
        let conf = false;
        if (!win) {
            conf = confirm("Забрать выигрыш?");
        }
        if (win || conf) {
            alert("Вы выиграли (BLACKJACK)!");
            setBet(bet, totalSum + bet * (conf ? 1 : 1.5));
            check.classList.add("d-none");
            call.classList.add("d-none");
            newGame.classList.remove("d-none");
            return;
        }
        onEndClick();
    }
};

const onNewGameClick = () => {
    start.classList.remove("d-none");
    betControl.classList.remove("d-none");
    check.classList.add("d-none");
    call.classList.add("d-none");
    newGame.classList.add("d-none");
    fieldBlock.querySelectorAll(".play-card").forEach((card) => card.remove());
    score = {
        dealer: { value: 0, oversized: false },
        player: { value: 0, oversized: false },
    };
    cards = {
        dealer: [],
        player: [],
    };
    setScore();
};

const onCallClick = () => {
    giveCard("player", 1);
};

const onCheckClick = () => {
    check.classList.add("d-none");
    call.classList.add("d-none");
    playDealerGame();
};

start.addEventListener("click", startGame);
call.addEventListener("click", onCallClick);
check.addEventListener("click", onCheckClick);
newGame.addEventListener("click", onNewGameClick);

/** раздать карту/карты */
function giveCard(pack, count = 1, noAlert = false) {
    for (let i = 0; i < count; i++) {
        const cardNumber = getRandomInt(1, cardsCount);
        const cardScore =
            points[cardNumber - 1] instanceof Array
                ? points[cardNumber - 1][score[pack].oversized ? 1 : 0]
                : points[cardNumber - 1];
        cards[pack].push(cardScore);
        let totalScore = cards[pack].reduce(
            (accumulator, currentValue) => accumulator + currentValue
        );

        const { left, top } = getCardPosition(cardNumber);
        const card = document.createElement("div");
        card.innerHTML = `<div class="play-card" 
                          style="background-position: ${-left}px ${-top}px; 
                          left: ${fieldPadding * cards[pack].length}px; 
                          top: ${pack == "dealer"
                ? fieldPadding + 45
                : fieldHeight - fieldPadding * 2 - cardHeight
            }px;">
                      </div>`;
        fieldBlock.append(card.firstElementChild);
        setTimeout(() => {
            if (totalScore > 21) {
                cards[pack] = cards[pack].map((score) => (score == 11 ? 1 : score));
                totalScore = cards[pack].reduce(
                    (accumulator, currentValue) => accumulator + currentValue
                );
                if (totalScore > 21) {
                    score[pack].value = totalScore;
                    if (!noAlert) {
                        alert("перебор");
                        check.classList.add("d-none");
                        call.classList.add("d-none");
                        playDealerGame();
                    }
                } else {
                    score[pack].oversized = true;
                }
            }
            score[pack].value = totalScore;
            setScore();
        }, 100);
    }
}

function playDealerGame() {
    interval = setInterval(() => {
        giveCard("dealer", 1, true);
        setTimeout(() => {
            if (score.dealer.value > 21) {
                clearInterval(interval);
                if (score.player.value > 21) {
                    alert("Ничья!");
                } else {
                    alert("Вы выиграли!");
                    setBet(bet, totalSum + bet);
                }
                newGame.classList.remove("d-none");
    
                return;
            }
            if (
                score.dealer.value > 16 &&
                (score.dealer.value >= score.player.value || score.player.value > 21)
            ) {
                clearInterval(interval);
                if (score.dealer.value == score.player.value) {
                    alert("Ничья!");
                } else {
                    alert("Вы проиграли!");
                    setBet(bet, totalSum - bet);
                }
    
                newGame.classList.remove("d-none");
                return;
            }
        }, 100);
        
    }, 500);
}

function setScore() {
    dealerScore.innerHTML = score.dealer.value;
    playerScore.innerHTML = score.player.value;
}

/** получить позицию карты на картинке */
function getCardPosition(cardNumber) {
    const cardWidth = 120;
    const row = Math.floor(cardNumber / (13 + 0.05));
    const col = cardNumber - 13 * row - 1;
    return { left: cardWidth * col, top: cardHeight * row };
}

/** получить случайное число */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}