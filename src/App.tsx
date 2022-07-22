import './App.css';
import react, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const App = () => { 
  
  const [graph, setGraph] = useState<any>({
    label: [],
    data: []
  });

  const [secondGraph, setSecondGraph] = useState<any>({
    data: []
  });
  
  const firstLineGraphData = [
    {
      value: 5
    },
    {
      value: 10
    },
    {
      value: 8
    }
  ];

  const secondLineGraphData = [
    {
      value: 7
    },
    {
      value: 2
    },
    {
      value: 9
    }
  ];

  useEffect(() => {

    const data: any[] = [];
    const label: any[] = [];

    const second_line_data: any[] = [];

    firstLineGraphData?.map((v:any,index) => {
      data.push(v?.value);
      label.push(index)
    });

    secondLineGraphData?.map((v:any) => {
      second_line_data.push(v?.value);
    });

    setGraph({
      label: label,
      data: data
    });

    setSecondGraph({
      data: second_line_data,
    });

  },[]);
  
  const data = {
    labels: graph.label,
    datasets: [
      {
        label: 'React',
        data: graph.data,
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
        yAxisID: 'y-axis-1',
      },
      {
        label: 'Angular',
        data: secondGraph.data,
        fill: false,
        backgroundColor: 'rgb(54, 162, 235)',
        borderColor: 'rgba(54, 162, 235, 0.2)',
        yAxisID: 'y-axis-2',
      },
    ],
  };

  const options: any = {
    scales: {
      yAxes: [
        {
          type: 'linear',
          display: true,
          position: 'left',
          id: 'y-axis-1',
        },
        {
          type: 'linear',
          display: true,
          position: 'right',
          id: 'y-axis-2',
          gridLines: {
            drawOnArea: false,
          },
        },
      ],
    },
  };
  

  return (
    <>
      <div className="App">
      <h3>React Multi Axis Line Chart Example - CodeCheef </h3>
        <div style={{ height:'500px',width:'500px',margin:'0 auto' }}>
           <Line data={data} options={options} />
        </div>
      </div>
    </>
  );

}

export default App;
