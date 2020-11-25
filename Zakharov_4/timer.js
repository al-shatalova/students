class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div style={{
		  backgroundColor: "#e5e5e5",
		  paddingTop: 10,
		  paddingBottom: 10,
		  paddingLeft: 4
	  }}>
        Seconds:
		<span style={{
			color: "purple",
			fontSize: 20,
			display: "inline-block",
			marginLeft: 10
		}}>{this.state.seconds}</span>
      </div>
    );
  }
}