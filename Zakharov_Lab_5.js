// Задание 1.
class User {
	constructor(username) {
		this.username = username;
	}
	printName() {
		console.log(this.username);
	}
}

console.log("Задание 1:");
const user = new User("Вася");
user.printName();


// Задание 2.


class Clock {
	constructor({ template }) {
		this.template = template;
	}
	
	render() {
		const template = this.template;
		const date = new Date();
		
		let hours = date.getHours();
		if (hours < 10) hours = '0' + hours;
		
		let minutes = date.getMinutes();
		if (minutes < 10) minutes = '0' + minutes;
		
		let seconds = date.getSeconds();
		if (seconds < 10) seconds = '0' + seconds;
		
		const output = template
			.replace('h', hours)
			.replace('m', minutes)
			.replace('s', seconds);
		
		console.log(output);
	}
	
	start() {
		if (this.timer) {
			this.stop();
		}
		this.timer = setInterval(this.render.bind(this), 1000);
	}
	
	stop() {
		if (!this.timer) return;
		clearInterval(this.timer);
		this.timer = null;
	}
}

console.log("Задание 2:");
const clock = new Clock({template: "h:m:s"});
clock.start();
setTimeout(() => {
	clock.stop();
}, 3500)


