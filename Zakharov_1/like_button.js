'use strict'

const e = React.createElement;

class LikeButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {liked: false};
	}
	
	render() {
		if (this.state.liked) {
			return "You liked button with id = " + this.props.id;
		}
		
		return e(
			'button',
			{ onClick: () => this.setState({ liked: true }) },
			'Like'
		);
	}
}


ReactDOM.render(e(LikeButton, { id: "5462342304358" }), document.querySelector('#like_button_container1'));
ReactDOM.render(e(LikeButton, { id: "5674523099999" }), document.querySelector('#like_button_container2'));