import { points } from "./cards-points.js";

const plus = document.querySelector(".bet-plus");
const minus = document.querySelector(".bet-minus");
const betSpan = document.querySelector(".bet-value");
let bet = +betSpan?.innerHTML || 0;
const sumSpan = document.querySelector(".sum");
let totalSum = +sumSpan?.innerHTML || 0;

const onEditBetClick = ({ target }) => {
  const delta = +target.closest("[data-delta]").dataset.delta;
  const newBet = bet + delta;
  if (newBet > 0) {
    const newSum = -delta + totalSum;
    setBet(newBet, newSum);
  }
};

plus.addEventListener("click", onEditBetClick);
minus.addEventListener("click", onEditBetClick);

const startBtn = document.querySelector(".start-btn");
const endBtn = document.querySelector(".end-btn");
const hitBtn = document.querySelector(".hit-btn");
const newBtn = document.querySelector(".new-btn");
const betControl = document.querySelector(".bet");
const fieldBlock = document.querySelector(".field");
const dealerScoreSpan = document.querySelector(".dealer-score");
const playerScoreSpan = document.querySelector(".player-score");
let score = {
  dealer: { value: +dealerScoreSpan.innerHTML, oversized: false },
  player: { value: +playerScoreSpan.innerHTML, oversized: false },
};
const cardsCount = 52;
const fieldHeight = 500;
const fieldPadding = 20;
const cardHeight = 168;

let interval;

let cards = {
  dealer: [],
  player: [],
};

const onStartBtnClick = () => {
  startBtn.classList.add("d-none");
  betControl.classList.add("d-none");
  endBtn.classList.remove("d-none");
  hitBtn.classList.remove("d-none");
  giveCard("dealer", 1);
  giveCard("player", 2);
  if (score.player.value == 21) {
    const win = [11, 10].indexOf(cards.dealer[0]) == -1;
    let conf = false;
    if (!win) {
      conf = confirm("Забрать выигрыш?");
    }
    if (win || conf) {
      alert("Вы выйграли (BLACKJACK)!");
      setBet(bet, totalSum + bet * (conf ? 1 : 1.5));
      endBtn.classList.add("d-none");
      hitBtn.classList.add("d-none");
      newBtn.classList.remove("d-none");
      return;
    }

    onEndClick();
  }
};

const onNewBtnClick = () => {
  startBtn.classList.remove("d-none");
  betControl.classList.remove("d-none");
  endBtn.classList.add("d-none");
  hitBtn.classList.add("d-none");
  newBtn.classList.add("d-none");
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

const onHitClick = () => {
  giveCard("player", 1);
};

const onEndClick = () => {
  endBtn.classList.add("d-none");
  hitBtn.classList.add("d-none");
  playDealerGame();
};

startBtn.addEventListener("click", onStartBtnClick);
hitBtn.addEventListener("click", onHitClick);
endBtn.addEventListener("click", onEndClick);
newBtn.addEventListener("click", onNewBtnClick);

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
                        top: ${
                          pack == "dealer"
                            ? fieldPadding + 15
                            : fieldHeight - fieldPadding * 2 - cardHeight
                        }px;">
                    </div>`;
    fieldBlock.append(card.firstElementChild);

    if (totalScore > 21) {
      cards[pack] = cards[pack].map((score) => (score == 11 ? 1 : score));
      totalScore = cards[pack].reduce(
        (accumulator, currentValue) => accumulator + currentValue
      );
      if (totalScore > 21) {
        score[pack].value = totalScore;
        if (!noAlert) {
          alert("перебор");
          endBtn.classList.add("d-none");
          hitBtn.classList.add("d-none");
          playDealerGame();
        }
      } else {
        score[pack].oversized = true;
      }
    }
    score[pack].value = totalScore;
    setScore();
  }
}

function playDealerGame() {
  interval = setInterval(() => {
    giveCard("dealer", 1, true);
    if (score.dealer.value > 21) {
      clearInterval(interval);
      if (score.player.value > 21) {
        alert("Ничья!");
      } else {
        alert("Вы выйграли!");
        setBet(bet, totalSum + bet);
      }
      newBtn.classList.remove("d-none");

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

      newBtn.classList.remove("d-none");
      return;
    }
  }, 500);
}

function setBet(newBet, tSum) {
  bet = newBet;
  totalSum = tSum;
  betSpan.innerHTML = bet;
  sumSpan.innerHTML = totalSum;
}

function setScore() {
  dealerScoreSpan.innerHTML = score.dealer.value;
  playerScoreSpan.innerHTML = score.player.value;
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
