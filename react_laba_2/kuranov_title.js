"use strict";

const createEl = React.createElement;
class ReactTitle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { clicked: false };
    }

    render() {
        if (this.state.clicked) {
            return createEl(
                "h2",
                { onClick: () => this.setState({ clicked: false }) },
                "Made by Kuranov K"
            );
        }

        return createEl(
            "h2",
            { onClick: () => this.setState({ clicked: true }) },
            "Create React in 1 min"
        );
    }
}

const domTitle = document.querySelector("#title");
ReactDOM.render(createEl(ReactTitle), domTitle);
