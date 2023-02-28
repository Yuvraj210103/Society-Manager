
import { Bar } from 'react-chartjs-2';

import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
const data = {
  labels: ['Water', 'Electricity', 'House Keeping', 'Lift', 'Others'],
  datasets: [
    {
      label: 'Complaints',
      data: [8, 1, 12, 10, 6],
      barThickness: 16
    }
  ]
};

const ComplaintsBarGraph = () => {
  
  return (
    <div className="flex w-full">
      <Bar
        //style={{ minHeight: '200px' }}
        data={data}
        options={{
          maintainAspectRatio: false,
          font: { style: 'normal' },
          layout: { padding: 0 },
          elements: {
            point: {
              backgroundColor: '#23B89A',
              borderWidth: 0.2,
              borderColor: 'black'
            },
            bar: {
              borderWidth: 0,
              backgroundColor: '#2368DD'
            }
          },
          responsive: true,

          indexAxis: 'x',
          borderColor: '#23B89A',

          scales: {
            y: {
              //border: { color: theme === 'dark' ? '#F5F5F51A' : '#0000001A' },
              min: 0,
              
              display: true,
             // grid: { color: theme === 'dark' ? '#F5F5F51A' : '#0000001A' },
              stacked: true,
              title: {
                //color: theme === 'dark' ? 'white' : 'black',
                display: true,
                text: 'Complaints',
                font: { weight: '600' },
                padding: 0
              },
              ticks: {
                stepSize: 2,
                maxTicksLimit: 11,
                //color: theme === 'dark' ? 'white' : 'black'
              }
            },
            x: {
             // border: { color: theme === 'dark' ? '#F5F5F51A' : '#0000001A' },
              grid: {
                display: false
              },
              stacked: true,

              title: {
                //color: theme === 'dark' ? 'white' : 'black',
                display: true,
                text: 'Category',
                align: 'center',
                font: { weight: '600' }
              },
              //ticks: { color: theme === 'dark' ? 'white' : 'black' }
            }
          },

          plugins: {
            legend: {
              position: 'bottom',
              align: 'start',
              fullSize: false,

              labels: {
                pointStyle: 'rect',
                padding: 0,
                usePointStyle: true,
                textAlign: 'center',
                //color: theme === 'dark' ? 'white' : 'black'
              }
            }
          }
        }}
      />
    </div>
  );
};

export default ComplaintsBarGraph;
