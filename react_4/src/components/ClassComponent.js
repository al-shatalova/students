import React, {Component} from 'react';

class ClassComponent extends Component{
    render(){
        return(
            <div>
                <h1>This is class component</h1>
            </div>
        )
    }

    componentWillUnmount() {
        return(
            <div>
                <h5>smth</h5>
            </div>
        )
    }
}

export default ClassComponent;