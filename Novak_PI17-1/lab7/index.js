class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {liked: false}
    }

    render() {
        if (this.state.liked) {
            return 'You liked this.';
        }
        return React.createElement(
            'button',
            {
                onClick: () => {
                    this.setState({liked: true})
                }
            },
            'Like'
        )
    }
}

const btnContainer = document.getElementById('like-btn');
ReactDOM.render(React.createElement(LikeButton), btnContainer);
