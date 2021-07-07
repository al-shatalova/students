class UserCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = props;
    }

    render() {
        return (
            <div>
                <p> Фамилия: {this.state.lastName} </p>
                <p> Имя: {this.state.firstName} </p>
                <p> Возраст: {this.state.age} </p>
            </div>
        );
    }
}