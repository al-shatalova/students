import React, {Component} from 'react';

class UserForm extends Component{
    constructor(props){
        super(props);

        let name = props.name;
        let nameIsValid = this.validateName(name);
        let age = props.age;
        let ageIsValid = this.validateAge(age);

        this.state = {
            name: name,
            age: age,
            nameValid: nameIsValid,
            ageValid: ageIsValid,
        };

        this.nameInput = React.createRef();
        this.ageInput = React.createRef();
        this.onNameChange = this.onNameChange.bind(this);
        this.onAgeChange = this.onAgeChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    componentDidMount() {
        this.ageInput.addEventListener('input', this.onAgeChange);
        this.nameInput.addEventListener('input', this.onNameChange);
    }

    onAgeChange(e){
        let val = e.target.value;
        let valid = this.validateAge(val);
        this.setState({ age: val, ageValid: valid });
    }

    onNameChange(e) {
        let val = e.target.value;
        let valid = this.validateName(val);
        this.setState({ name: val, nameValid: valid });
    }

    validateAge(age) {
        return age > 0;
    }

    validateName(name) {
        return name.length > 2;
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.nameValid === true && this.state.ageValid === true) {
            alert("Имя: " + this.state.name + " Возраст: " + this.state.age);
        }
    }

    render() {
        // цвет границы для поля для ввода имени
        let nameColor = this.state.nameValid === true ? "green" : "red";
        // цвет границы для поля для ввода возраста
        let ageColor = this.state.ageValid === true ? "green" : "red";
        return (
            <form onSubmit={this.handleSubmit} className="p-3">
                <div className="form-group">
                    <label>Имя:</label>
                    <input
                        type="text"
                        value={this.state.name}
                        style={{ borderColor: nameColor }}
                        ref={(input) => {
                            this.nameInput = input;
                        }}
                        className="form-control w-25"
                    />
                </div>
                <div className="form-group">
                    <label>Возраст:</label>
                    <input
                        type="number"
                        value={this.state.age}
                        style={{ borderColor: ageColor }}
                        ref={(input) => {
                            this.ageInput = input;
                        }}
                        className="form-control w-25"
                    />
                </div>
                <input type="submit" value="Отправить" />
            </form>
        );
    }
}

export default UserForm;