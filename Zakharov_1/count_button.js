'use strict'

class CountButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {count: props.start ?? 0};
	}
	
	handleClick = () => {
		//this.setState({ count: this.state.count + 1 });
		this.setState(({ count }) => ({ count: count + 1 }));
	}
	
	render() {
		
		return React.createElement(
			'button',
			{ onClick: this.handleClick },
			this.state.count
		);
	}
}

ReactDOM.render(React.createElement(CountButton), document.querySelector('#count_button_container1'));
ReactDOM.render(React.createElement(CountButton, { start: 10 }), document.querySelector('#count_button_container2'));