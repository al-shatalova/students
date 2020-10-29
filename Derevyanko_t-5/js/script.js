function getSum() {
    var arr = [0, 1, 2];
    let items = 0;
    for (i = 0; i <= 1000000; i++) {
        var random = arr[Math.floor(Math.random() * arr.length)];
        if (random == 0) {
            items = items + 1;
        };
        input__item.value = items;
    };
};