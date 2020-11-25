'use strict'

class StyleButton extends React.Component {
	constructor(props) {
		super(props);
		
		this.styles = [
		 { color: "black", backgroundColor: "gray" },
		 { color: "orange", backgroundColor: "red", width: 400 },
		 { color: "blue", backgroundColor: "white" },
		];
		
		this.state = {
			styleIndex: 0
		};
	}
	
	handleClick = () => {
		this.setState(({ styleIndex }) => ({ styleIndex: (styleIndex + 1) % this.styles.length }));
	}
	
	render() {
		return React.createElement(
			'button',
			{ 
				onClick: this.handleClick,
				style: this.styles[this.state.styleIndex]
			},
			"Сменить стиль"
		);
	}
}

ReactDOM.render(React.createElement(StyleButton), document.querySelector('#style_button_container'));