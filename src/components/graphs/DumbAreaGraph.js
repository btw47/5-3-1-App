import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const DumbGraph = props => {
  const formatter = value => `${value} lbs`;

  const thisInterval = () => {
    if (props.data) {
      return Math.ceil(props.data.length / 10);
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <br />
      <h2>{props.title}</h2>
      <ResponsiveContainer width={'100%'} height={props.height}>
        <AreaChart
          data={props.data}
          syncId="anyId"
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <XAxis dataKey="name" interval={thisInterval()} />
          <YAxis tickFormatter={formatter} />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey={props.dataKey}
            stackId="1"
            stroke={props.color}
            fill={props.color}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DumbGraph;
