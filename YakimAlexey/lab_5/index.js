// task 1
class User {
  constructor({ name }) {
    this.name = name;
  }

  greetUser = () => {
    alert(`Hi, ${this.name}`);
  };
}

var user = new User({ name: prompt('Write your name, dear user', 'JS') });
user.greetUser();

// task 2
class Clock {
  constructor({ template }) {
    this.template = template;
    this.timer = 0;
  }

  render = () => {
    let date = new Date();
    let hours = date.getHours();
    hours = hours < 10 ? `0${hours}` : hours.toString();
    let minutes = date.getMinutes();
    minutes = minutes < 10 ? `0${minutes}` : minutes.toString();
    let seconds = date.getMinutes();
    seconds = seconds < 10 ? `0${seconds}` : seconds.toString();

    let output = this.template.replace('h', hours).replace('m', minutes).replace('s', seconds);
    console.log(output);
  };

  start() {
    this.render();
    this.timer = setInterval(() => {
      this.render;
    }, 500);
  }

  stop() {
    clearInterval(this.timer);
  }
}

alert(`Check console output, ${user.name}!`);
var clock = new Clock({ template: 'h:m:s' });
clock.start();
setTimeout(() => {
  clock.stop();
}, 2000);
