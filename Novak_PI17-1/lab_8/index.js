class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {liked: 0}
    }

    render() {
        return React.createElement(
            'button',
            {
                onClick: () => {
                    this.setState((state) => {
                        return {liked: ++state.liked}
                    })
                }
            },
            `Кол-во нажатий на кнопку: ${this.state.liked}`
        )
    }
}

const btnContainer = document.getElementById('btn');
ReactDOM.render(React.createElement(LikeButton), btnContainer);
