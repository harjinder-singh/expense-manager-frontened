import React, { useCallback, useEffect, useMemo, useState} from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Colors
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import './LineChart.css';
import { useGetTransactionsForChartQuery } from './chartApiSlice';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Colors
);

let LineChart = () => {

  const labels = useMemo(() => ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], []);
  
  const [datasets, setDatasets] = useState([{
    "label": "Test",
    "data": [0,0],
    "borderColor" : 'rgb(255, 99, 132)',
    "backgroundColor" :'rgba(255, 99, 132, 0.5)'
  }]);

  const { data: transactions, isLoading } = useGetTransactionsForChartQuery(1);
  
  const getDataset = useCallback((data) => {
    let finalObj = Object.keys(data).map(type => {
      let dataSetObj = {};
      dataSetObj["label"] = type;
      let monthlyValues = [];
      labels.forEach(label => {
        !data[type][label] ? (monthlyValues.push(0)) : (monthlyValues.push(data[type][label]))
      })
      dataSetObj["data"] = monthlyValues;
      return dataSetObj;
    });
    setDatasets(finalObj);
  }, [labels]);

  useEffect(() => {
    if(!isLoading){
      getDataset(transactions);
    }
  }, [isLoading, transactions, getDataset])
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Transactions',
        padding: {
          top: 10,
          bottom: 10
        },
        font: {
          size: 24
        }
      },
      colors: {
        enabled: true
      }
    },
  };
  
  const data = {
    labels,
    datasets
  };

  return (
  <>
    <div className='line-chart'>
      <Line options={options} data={data} />
    </div>
  </>
  )
}

export default LineChart;