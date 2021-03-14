// task 1
var counter = {
    red: 0,
    black: 0,
    blue: 0,
};

for (let i = 0; i < 100000; i++) {
    switch (Math.ceil(Math.random() * 10) % 3) {
        case 0:
            counter.red++
            break;
        case 1:
            counter.black++
            break;
        case 2:
            counter.blue++
            break;
        default:
            alert('Your code is not wirking correctly!!')
    }
}

alert(`Got ${counter.red} x red, ${counter.black} x black and ${counter.blue} x blue`);

var arr = [];
for (let i = 0; i < 1000000; i++) {
    arr.push([
        Math.ceil(Math.random() * 10) % 3,
        Math.ceil(Math.random() * 10) % 3,
        Math.ceil(Math.random() * 10) % 3,
    ])
}

console.log(arr);

counter = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
}

arr.forEach(a => counter[a.reduce((a, b) => b === 0 ? a + 1 : a, 0)]++);

alert(`Got ${counter[0]} x zero times, ${counter[1]} x one time, ${counter[2]} x two times and ${counter[3]} x three times`)

// task 2
var points = {
    'J': 11,
    'Q': 12,
    'K': 13,
    'A': 14,
}
var cards = ['J', 'J', 'Q', 'A', 'K', 'K'];
var getSum = (cards) => {
    return cards.reduce((a, b) => a + points[b], 0);
}

alert(getSum(cards));
