function getSum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    let score = 0;
    const card = arr[i];
    if (card > 0) {
      score = parseInt(card);
    } else if (card === 'J') {
      score = 11;
    } else if (card === 'Q') {
      score = 12;
    } else if (card === 'K') {
      score = 13;
    } else if (card === 'A') {
      score = 14;
    }

    //console.log('card = ', card, score);

    sum += score;
  }
  return sum;
}



//const arr = ['J', 'J', '2', '5', 'A', '6', 'K'];
const arr = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

console.log("Сумма очков: ", getSum(arr));
