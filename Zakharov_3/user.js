'use strict'

class User extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			firstName: "",
			lastName: "",
			middleName: "",
			age: ""
		};
	}
	
	handleChangeInput = (field, value) => {
		this.setState({
			[field]: value
		});
	}
	
	filterAge = (age) => {
		if (isNaN(parseInt(age))) {
			return age.length > 1 ? age : "0";
		} else {
			return parseInt(age);
		}
	}
	
	render() {
		const handleChangeInput = this.handleChangeInput;
		
		return (
			<div>
				<form>
					<input type="text" placeholder="Имя" value={this.state.firstName} onChange={event => handleChangeInput("firstName", event.target.value)} />
					<input type="text" placeholder="Фамилия" value={this.state.lastName} onChange={event => handleChangeInput("lastName", event.target.value)} />
					<input type="text" placeholder="Отчество" value={this.state.middleName} onChange={event => handleChangeInput("middleName", event.target.value)} />
					<input type="text" placeholder="Возраст" value={this.state.age} onChange={event => handleChangeInput("age", this.filterAge(event.target.value))} />
				</form>
				<div style={{ padding: 10, backgroundColor: "#eef", height: 20, fontSize: 16 }}>
					<span style={{ color: "red"}}>{ this.state.firstName }</span>
					<span style={{ color: "orange", padding: 5 }}>{ this.state.middleName }</span>
					<span style={{ color: "blue" }}>{ this.state.lastName }</span>
				</div>
				<div style={{ fontSize: 19 }}>Возраст: <span className="age">{ this.state.age }</span></div>
			</div>
		);
	}
}