import React from 'react';
import './ItemContainer.css';

class ItemContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            currentTxt: ''
        }
        this.addItem = this.addItem.bind(this);
        this.onInput = this.onInput.bind(this);
    }

    addItem(e) {
        e.preventDefault();
        if (!this.state.currentTxt) {
            alert("Пустое поле");
            return;
        }
        const newItems = this.state.items;
        newItems.push(this.state.currentTxt);
        this.setState({items: newItems, currentTxt: ''});
    }

    onInput(e) {
        this.setState({currentTxt: e.target.value});
    }

    render() {
        const style = {display: 'flex'}
        const itemsVal = this.state.items.map((item, ind) => <p className={'row'}>{ind + 1}. {item}</p>);
        return <div>
            <p className={'txt'}>Список ваших дел ♡</p>
            <div style={style}>
                <input className={'inp'} type="text" value={this.state.currentTxt} onChange={this.onInput}/>
                <button className={'share-button'} onClick={this.addItem}>Добавить</button>
            </div>
            <div>{itemsVal}</div>
        </div>
    }
}

export default ItemContainer;