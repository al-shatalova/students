import React, {Component} from 'react';

class ClickButton extends Component{
    constructor(props){
        super(props);
        this.state = {class_: 'off', label: 'Button'};
        this.press = this.press.bind(this);
    }

    press(){
        if (this.state.class_ === 'off'){
            this.setState({class_: 'on'})
        }
        else{
            this.setState({class_: 'off'})
        }
        alert(this.state.class_);
    }

    render() {
        return <button onClick={this.press} className={this.state.class}>{this.state.label}</button>;
    }
}

export default ClickButton;