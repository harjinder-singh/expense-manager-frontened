import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
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

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const [datasets, setDatasets] = useState([{
    "label": "Test",
    "data": [0,0],
    "borderColor" : 'rgb(255, 99, 132)',
    "backgroundColor" :'rgba(255, 99, 132, 0.5)'
  }]);

  useEffect(() => {
	  getTransactions(2);
	}, []);

	const getTransactions = (accountId) => {
		axios.get(`http://localhost:8080/api/v1/accounts/${accountId}/transactionsForChart`)
		.then((response) => {
			console.log(response.data);
      getDataset(response.data);
		})
		.catch((error) => {
			console.log(error);
		});
	}
  
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
  
  const getDataset = (data) => {
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
    console.log(finalObj);
    setDatasets(finalObj);
  }
  
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