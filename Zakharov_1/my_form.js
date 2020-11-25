'use strict'

class MyForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { text: "" };
	}
	
	handleSubmit = (event) => {
		event.preventDefault();
		alert(this.state.text);
	}
	
	handleInputChange = (event) => {
		this.setState({
			text: event.target.value
		});
	}
	
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input type="text" placeholder="текст" value={this.state.text} onChange={this.handleInputChange}/>
				<input type="submit" value="OK"/>
			</form>
		);
	}
}


ReactDOM.render(React.createElement(MyForm), document.querySelector('#form_container'));