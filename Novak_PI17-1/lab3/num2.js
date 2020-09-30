const getSum = arr => {
    const literalCards = {
        J: 11,
        Q: 12,
        K: 13,
        A: 14
    };

    return arr.reduce((sum, elem) => {
        if (Number.isNaN(parseInt(elem))) {
            return sum + (literalCards[elem] || 0)
        } else {
            return sum + parseInt(elem)
        }
    }, 0)
}

// парочка тестов
alert(`getSum([]) = ${getSum([])}
getSum(['10', '8', 'Q']) = ${getSum(['10', '8', 'Q'])}
getSum(['10', '8', 'Q', 'qwe']) = ${getSum(['10', '8', 'Q', 'qwe'])}
`)
