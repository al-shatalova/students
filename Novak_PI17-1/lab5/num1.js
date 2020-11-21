class User {
    constructor(name) {
        this.name = name
    }

    showName() {
        alert(this.name)
    }
}

const u = new User('Vord')
u.showName()
