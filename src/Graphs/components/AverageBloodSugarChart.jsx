// LineChartComponent.jsx
import { useEffect, React, useState, useRef } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label, LabelList } from 'recharts';
import '../styles/CustomScroll.css';
import CustomLabel from '../AverageBS/CustomLabel';
import axios from 'axios';

const AverageBloodSugarChart = ({ fetchAverageData, averageData }) => {
  const chartContainerRef = useRef(null);

  useEffect(() => {
    fetchAverageData();
    if (chartContainerRef.current) {
      chartContainerRef.current.scrollLeft = chartContainerRef.current.scrollWidth;
    }
  }, []);

  if (averageData.length != 0) {
    return (
      <div
        style={{ width: '100%', overflowX: 'auto', overflowY: 'hidden' }}
        className="custom-scroll"
        ref={chartContainerRef}
      >
        <div style={{ width: '900px', height: '270px' }}>
          <LineChart
            width={900}
            height={270}
            data={averageData}
            margin={{
              top: 40,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis dataKey="name" padding={{ left: 20, right: 20 }} />
            <Line
              type="linear"
              dataKey="average"
              stroke="#4C62CA"
              strokeWidth={3.5}
              dot={{ r: 4, fill: '#4C62CA' }}
              activeDot={{ r: 6, fill: '#4C62CA', strokeWidth: 0 }}
              label={<CustomLabel />}
            />
          </LineChart>
        </div>
      </div>
    );
  } else return <></>;
};

export default AverageBloodSugarChart;
