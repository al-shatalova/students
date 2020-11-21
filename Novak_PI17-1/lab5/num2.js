class Clock {
    timer;

    constructor(template) {
        this.template = template
    }

    render() {
        let date = new Date()
        const templateParts = {
            h: `${date.getHours()}`.padStart(2, '0'),
            m: `${date.getMinutes()}`.padStart(2, '0'),
            s: `${date.getSeconds()}`.padStart(2, '0'),
        }
        console.log(Object.entries(templateParts).reduce((res, [key, val]) => res.replace(key, val), this.template))
    }

    stop() {
        if (this.timer) {
            clearInterval(this.timer)
        }
    }

    start() {
        this.render()
        this.timer = setInterval(this.render.bind(this), 1000)
    }
}

const c = new Clock('h:m:s')
c.start()
