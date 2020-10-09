var getRandom = (from, to) => {
  let rnd = (Math.floor(Math.random() * 10) % (to - from + 1)) + from;
  console.log(`got random value: ${rnd}`);
  return rnd;
};

var getRandomCard = () => {
  return cardByPoint[getRandom(2, 14)];
};

var getPointsSum = (cards, points) => {
  let calcSum = cards
    .map((card) => points[card])
    .reduce((res, el) => res + el, 0);
  console.log(`calculated sum ${calcSum}`);
  return calcSum;
};

/**
 * Calculate sum from array of cards.
 * @param {string[]} cards
 * @param {number} boundary
 * @returns {number}
 */
var getSum = (cards, boundary) => {
  let curSum = getPointsSum(cards, pointByCard);
  if (curSum > boundary && cards.includes("A")) {
    return getPointsSum(cards, pointByCardA);
  }
  return curSum;
};

var cardByPoint = {
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  10: "10",
  11: "J",
  12: "Q",
  13: "K",
  14: "A",
};
var pointByCard = {
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  J: 11,
  Q: 11,
  K: 11,
  A: 11,
};
var pointByCardA = {
  ...pointByCard,
  A: 1,
};
const playerBoundary = 21;
const dealerBoundary = 17;
var gameStats = {
  playerWins: 0,
  dealerWins: 0,
};

var playerTurns = () => {
  let playerCards = [];
  let more = "hit";
  while (more.includes("hit")) {
    let newCard = getRandomCard();
    playerCards.push(newCard);
    alert(
      `You got new card: ${newCard}.\nYou have cards: ${playerCards.join(
        ", "
      )}.`
    );

    let currentSum = getSum(playerCards, playerBoundary);
    switch (true) {
      case currentSum === 21 && playerCards.length === 2:
        return {
          permaWin: true,
          cards: playerCards,
          sum: getSum(playerCards, playerBoundary),
        };
      case currentSum < 21:
        more = prompt(
          `Your current sum is ${currentSum}, wanna hit more? Type 'hit' if you want or nothing to continue.`,
          "hit"
        );
        break;
      default:
        // sum 21 or more
        return {
          permaWin: false,
          cards: playerCards,
          sum: getSum(playerCards, playerBoundary),
        };
    }
  }

  return {
    permaWin: false,
    cards: playerCards,
    sum: getSum(playerCards, playerBoundary),
  };
};

var dealerTurns = (dealerStats) => {
  let dealerCards = dealerStats.cards;
  while (getSum(dealerCards, dealerBoundary) < 17) {
    let newCard = getRandomCard();
    dealerCards.push(newCard);
    alert(
      `Dealer got new card: ${newCard}.\nHe has cards: ${dealerCards.join(
        ", "
      )}`
    );
  }

  return {
    cards: dealerCards,
    sum: getSum(dealerCards, dealerBoundary),
  };
};

var game = () => {
  let dealerStats = {
    cards: [getRandomCard()],
    sum: 0, // not necessary right now
  };
  alert(`Dealer got card ${dealerStats["cards"][0]}`);

  let playerStats = playerTurns();
  if (playerStats["permaWin"]) {
    alert("Congratulations, you won!!!");
    gameStats["playerWins"]++;
    return;
  }

  if (playerStats["sum"] > 21) {
    alert("Give your money to the DEALER");
    gameStats["dealerWins"]++;
    return;
  }

  dealerStats = dealerTurns(dealerStats);

  if (playerStats["sum"] > dealerStats["sum"]) {
    alert("Congratulations, you won!!!");
    gameStats["playerWins"]++;
    return;
  }

  alert("Give your money to the DEALER");
  gameStats["dealerWins"]++;
};

var endOfGame = "nope";
alert("Let's start our game!");
while (endOfGame !== "yes") {
  game();
  endOfGame = prompt(
    `Dealer won ${gameStats["dealerWins"]}, you won ${gameStats["playerWins"]}.\nType 'yes' if you want to stop the game or continue.`,
    "nope"
  );
}
