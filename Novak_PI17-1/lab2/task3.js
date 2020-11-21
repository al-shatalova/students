var t3 = () => {
    alert('Let\'s drink!')
    let oneMore;
    let mugs = 0;
    while (oneMore !== '1') {
        oneMore = prompt('One more?', '0');
        mugs++;
    }
    alert(`We drank ${mugs} mugs of something, let\'s have a break`);
}
