import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            xIsMale: true,
        };
    }

    handleClick() {
        this.setState({
            xIsMale: !this.state.xIsMale,
        });
    }

    renderSquare() {
        return (
            <Square
                value={this.state.xIsMale ? 'M' : 'F'}
                onClick={() => this.handleClick()}
            />
        );
    }

    render() {
        return <div className="board-row">{this.renderSquare()}</div>;
    }
}

class Card extends React.Component {
    render() {
        return (
            <div className="game">
                <Board />
            </div>
        );
    }
}

// ========================================

ReactDOM.render(<Card />, document.getElementById('root'));
