import React, {Component} from 'react';

class Hello extends Component{
    constructor(props){
        super(props);
        this.state = {name: props.name, surname: props.surname, age: props.age};
    }
    render(){
        return(
            <div>
                <h2>Фамилия: {this.state.surname}</h2>
                <h2>Имя: {this.state.name}</h2>
                <h2>Возраст: {this.state.age}</h2>
            </div>
        )
    }
}

export default Hello;