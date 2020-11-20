import { Space, Spin, Typography, Tooltip } from 'antd';
import React, { useState, useEffect } from 'react';

var { Title } = Typography;

export default function ClockFunction({}) {
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

  return (
    <Space>
      <Spin size="large" />
      <Tooltip placement="right" title="Функциональный компонент">
        <Title level={3} type="warning">
          {date.toLocaleTimeString()}
        </Title>
      </Tooltip>
    </Space>
  );
}
