'use strict'

class App extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			username: "Vasya",
		};
	}
	
	doubleName = (name) => {
		return name + name;
	}
	
	render() {
		return (
			<div>
				<div>Username: { this.state.username }</div>
				<div>DoubleName: { this.doubleName(this.state.username) }</div>
				<div>2 + 3 = { 2 + 3 }</div>
				<User />
				<Calculator />
			</div>
		);
	}
}


ReactDOM.render(React.createElement(App), document.getElementById("app_container"));