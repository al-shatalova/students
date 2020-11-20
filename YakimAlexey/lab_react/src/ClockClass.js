import { Space, Spin, Typography, Tooltip } from 'antd';
import React from 'react';

var { Title } = Typography;

export default class ClockClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick = () => {
    this.setState({
      date: new Date(),
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
