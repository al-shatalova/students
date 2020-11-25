'use strict'

class App extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			
		};
	}
	
	render() {
		return (
			<div>
				app!!!
				<Hello1/>
				<Hello2 color="blue"/>
				<Hello3/>
				<Timer/>
				<ColorMouse/>
			</div>
		)
	}
}


ReactDOM.render(React.createElement(App), document.querySelector("#app_container"));