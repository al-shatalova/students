import { Space, Spin, Typography, Tooltip, notification } from 'antd';
import React, { useState, useEffect } from 'react';

var { Title } = Typography;

const ClockArrowFunction = ({}) => {
  const [date, setDate] = useState(new Date());

  const tick = () => {
    setDate(new Date());
  };

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timerID);
    };
  }, []);

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(counter + 1);
    if (counter % 10 === 0) {
      notification['success']({
        message: 'Функционально-стрелочные секунды',
        description: `Прошло ${counter} функционально-стрелочных секунд`,
      });
    }
  }, [date]);

  return (
    <Space>
      <Spin size="large" />
      <Tooltip placement="right" title="Компонент стрелочной функции">
        <Title level={3} type="danger">
          {date.toLocaleTimeString()}
        </Title>
      </Tooltip>
    </Space>
  );
};

export default ClockArrowFunction;
