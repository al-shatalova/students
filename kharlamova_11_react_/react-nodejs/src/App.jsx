import React from 'react';
import './App.css'
import ItemContainer from "./components/ItemContainer";

class App extends React.Component {
    render() {
        return <div className={'rectangle'}>
            <ItemContainer/>
        </div>
    }
}

export default App;