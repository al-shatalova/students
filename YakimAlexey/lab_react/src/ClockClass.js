import { Space, Spin, Typography, Tooltip, notification } from 'antd';
import React from 'react';

var { Title } = Typography;

export default class ClockClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), counter: 0 };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.counter % 5 === 0 && this.state.counter % 10 !== 0) {
      this.showNotification(this.state.counter, prevState.counter);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.state.counter % 2 === 0) {
  //     return false;
  //   }
  //   return true
  // }

  showNotification = (counter, prevCounter) => {
    notification['warn']({
      message: 'Классовые секунды',
      description: `Прошло ${counter} классовых секунд, а в предыдущем обновлении счетчик был равен ${prevCounter}`,
    });
  };

  tick = () => {
    this.setState({
      date: new Date(),
      counter: this.state.counter + 1,
    });
  };

  render() {
    return (
      <Space>
        <Spin size="large" />
        <Tooltip placement="right" title="Классовый компонент">
          <Title level={3} type="success">
            {this.state.date.toLocaleTimeString()}
          </Title>
        </Tooltip>
      </Space>
    );
  }
}
