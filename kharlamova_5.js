// 1.	Создайте класс, который будет сохранять в переменную имя пользователя и выводить его на экран.
class User {
    constructor(name) {
        this.name = name;
    }

    showName() {
        alert(this.name);
    }

}

const user = new User('Test name');
user.showName();


// Перепишите код с использованием синтаксиса класса:
class Clock {

    timer;

    constructor(template) {
        this.template = template;
    }

    render() {
        const now = new Date();
        const hours = now.getHours() < 10 ? '0' + now.getHours() : now.getHours();
        const minutes = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();
        const seconds = now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds();
        const output = String(this.template)
            .replace('h', hours)
            .replace('m', minutes)
            .replace('s', seconds);
        console.log(output);
    }

    start() {
        this.render();
        const that = this;
        this.timer = setInterval(function () {
            that.render();
        }, 1000)
    }

    stop() {
        console.log("stop")
        clearInterval(this.timer);
    }
}

const clock = new Clock('h:m:s')
clock.start();
setTimeout(function () {
    clock.stop();
}, 5000);


// Организовать симулятор, который выдает только три случайных значения – красный, черный и белый (0, 1, 2).
// Запустить симуляцию 1000 000 раз.
// Узнать, какая последовательность из красных, черных или белых значений была самой длинной.
class Generator {

    generateNumber() {
        let generated = Math.random() * 3
        if (generated === 3) {
            generated -= 0.01;
        }
        return Math.trunc(generated);
    }
}

class Simulator {

    maxReds = 0;
    maxBlacks = 0;
    maxWhites = 0;

    chain = '';

    constructor(tries) {
        this.tries = tries;
    }

    startSimulation() {
        let lastVal = -1;
        let curLength = 0;

        const generator = new Generator();
        for (let i = 0; i < this.tries; i++) {
            let curNumber = generator.generateNumber();
            this.chain += curNumber;
            if (lastVal === curNumber) {
                curLength++;
                continue;
            }

            curLength++;
            if (lastVal === 0 && curLength > this.maxReds) {
                this.maxReds = curLength;
            }

            if (lastVal === 1 && curLength > this.maxBlacks) {
                this.maxBlacks = curLength;
            }

            if (lastVal === 2 && curLength > this.maxWhites) {
                this.maxWhites = curLength;
            }

            lastVal = curNumber;
            curLength = 0;

        }
    }

    getResults() {
        return {
            'red (0)': this.maxReds,
            'black (1)': this.maxBlacks,
            'white (2)': this.maxWhites
        }
    }
}

const simulator = new Simulator(1_000_000);
// const simulator = new Simulator(20);
simulator.startSimulation();
// console.log(simulator.chain);
console.log(simulator.getResults());