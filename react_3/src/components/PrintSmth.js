import React, {Component} from 'react';


let lastName = 'Тюрин';
class PrintSmth extends Component{
    render(){
        return (
            <div>
                <ul>
                    <li style={{'font-family': 'Arial'}}>0 + 7 = {0+7}</li>
                    <li style={{'font-family': 'Menlo', 'font-size': 30}}>ФИО: {lastName} Александр Владиславович</li>
                    <li style={{'color': 'red'}}>Возраст: 21</li>
                </ul>
            </div>
        )
    }
}

export default PrintSmth;