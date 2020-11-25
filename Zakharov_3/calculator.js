'use strict'

class Calculator extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			firstNumber: 0,
			secondNumber: 0,
			operation: "+"
		};
	}
	
	calculateResult = () => {
		const a = +this.state.firstNumber;
		const b = +this.state.secondNumber;
		const op = this.state.operation;
		if (op === "+") {
			return a + b;
		} else if (op === "*") {
			return a * b;
		} else if (op === "/") {
			return a / b;
		} else if (op === "-") {
			return a - b;
		} else {
			return "";
		}
	}
	
	handleChangeInput = (field, value) => {
		if (isNaN(parseInt(value))) {
			value = value.length > 1 ? value : "0";
		} else {
			value = parseInt(value);
		}
		
		this.setState({
			[field]: +value
		});
	}
	
	setOperation = (event) => {
		const op = event.target.getAttribute("name");
		this.setState({
			operation: op
		});
	}
	
	getButtonOperationStyle = (op) => {
		if (op === this.state.operation) {
			return {
				borderColor: "blue"
			};
		}
		return {};
	}
	
	render() {
		const handleChangeInput = this.handleChangeInput;
		const setOperation = this.setOperation;
		const getButtonOperationStyle = this.getButtonOperationStyle;
		return (
			<div>
				<div>
					<input type="text" placeholder="Первое число" value={this.state.firstNumber} onChange={event => handleChangeInput("firstNumber", event.target.value)} />
					<input type="text" placeholder="Второе число" value={this.state.secondNumber} onChange={event => handleChangeInput("secondNumber", event.target.value)} />
					<button>Посчитать</button>
				</div>
				<div>
					{ this.calculateResult() }
				</div>
				<div>
					<button style={getButtonOperationStyle("+")} onClick={setOperation} name="+">+</button>
					<button style={getButtonOperationStyle("-")} onClick={setOperation} name="-">-</button>
					<button style={getButtonOperationStyle("*")} onClick={setOperation} name="*">*</button>
					<button style={getButtonOperationStyle("/")} onClick={setOperation} name="/">/</button>
				</div>
			</div>
		
		);
	}
}