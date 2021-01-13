import React, {Component} from 'react';

class LikeButton extends Component{
    constructor(props){
        super(props);
        this.state = {liked: false};
        this.createLike = this.createLike.bind(this);
    }

    createLike(){
        this.setState({liked: true});

        alert("You liked this )");
        
    }

    render() {
        return (
            <button onClick={this.createLike}>Press to like</button>
        )
    }
}

export default LikeButton;


