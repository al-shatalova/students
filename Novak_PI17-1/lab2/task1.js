function t1 () {
    let solutions = 0;
    let result = prompt('Does dog looks like a cat? Enter \'yes\' or \'no\'', 'yes')
    if (result === 'no') {
        solutions++
    }
    result = prompt('Does cat looks like a dog? Enter \'yes\' or \'no\'', 'yes')
    if (result === 'no') {
        solutions++
    }
    alert(`You got ${solutions} correct answers`)
}
// export default t1;
