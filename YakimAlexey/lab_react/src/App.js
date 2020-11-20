import React from 'react';
import { HeartTwoTone, LikeTwoTone } from '@ant-design/icons';
import { Space, Button, Tooltip, notification, Divider } from 'antd';
import ClockClass from './ClockClass';
import ClockFunction from './ClockFunction';
import ClockArrowFunction from './ClockArrowFunction';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likeTimes: 0,
      heartLikes: 0,
    };
  }

  like = () => {
    this.setState({ likeTimes: this.state.likeTimes + 1 });
  };

  likeHeart = () => {
    this.setState({ heartLikes: this.state.heartLikes + 1 });
    this.like();
  };

  showNotification = () => {
    notification['info']({
      message: 'Вы нажали кнопку лайка',
      description: `Всего нажатий ${this.state.likeTimes + 1}`,
    });
  };

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          padding: '8px 16px',
        }}
      >
        <Space>
          <Tooltip placement="right" title={this.state.heartLikes}>
            <Button
              onClick={() => {
                this.likeHeart();
                this.showNotification();
              }}
              size="large"
              icon={<HeartTwoTone twoToneColor="#eb2f96" />}
            />
          </Tooltip>
          <Tooltip placement="right" title={this.state.likeTimes - this.state.heartLikes}>
            <Button
              onClick={() => {
                this.like();
                this.showNotification();
              }}
              size="large"
              icon={<LikeTwoTone twoToneColor="#eb2f96" />}
            />
          </Tooltip>
        </Space>
        <Space direction="vertical" split={<Divider type="horizontal" />}>
          <ClockClass />
          <ClockFunction />
          <ClockArrowFunction />
        </Space>
      </div>
    );
  }
}

export default App;
