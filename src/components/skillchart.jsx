import React from 'react';
import { Bar } from 'react-chartjs-2'; 

const skillchart = ({skills}) => {
    const data={
        labels:skills.map((s)=>s.skill),
        datasets:[
            {
                label:'profieciency level',
                data:skills.map((s)=>s.level),
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
            },
        ],
    };
  return (
    <div>
      <Bar data={data} />
    </div>
  )
}

export default skillchart
