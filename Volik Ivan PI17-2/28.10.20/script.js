export class User {

    constructor(name) {
        this.name = name;
    }

    showName() {
        alert(this.name);
    }
}

export class Clock {

    constructor({ template }) {
        this.template = template;
    }

    render() {
        let date = new Date();
        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;
        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;
        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);
        document.querySelector('.time').innerHTML = output;
    }

    stop() {
        clearInterval(this.timer);
        document.querySelector('.time').innerHTML = '';
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}

const clock = new Clock({ template: 'h:m:s' });
const showBtn = document.querySelector('.clocks-show');
const hideBtn =  document.querySelector('.clocks-hide');

document.querySelector('.alert-name').addEventListener('click', () => {
    let name = prompt('Введите имя пользователя');
    let user = new User(name);
    user.showName();
})

showBtn.addEventListener('click', () => {
    clock.start();
    showBtn.classList.add('d-none');
    hideBtn.classList.remove('d-none');
})

hideBtn.addEventListener('click', () => {
    clock.stop();
    showBtn.classList.remove('d-none');
    hideBtn.classList.add('d-none');
})