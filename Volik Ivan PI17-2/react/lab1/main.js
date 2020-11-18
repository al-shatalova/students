'use strict'

const div = React.createElement;

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return 'You liked id:' + this.props.id;
        }

        return div(
            'button',
            { onClick: () => this.setState({ liked: true})},
            'Like'
        )
    }
}

document.querySelectorAll('#main .butt-container').forEach(DOMContainer => {
    const id = parseInt(DOMContainer.dataset.id, 10);
    ReactDOM.render(div(Main, { id: id}), DOMContainer);
});