import React, { useEffect, useState } from 'react';
import {  Legend,  RadialBar, RadialBarChart, Tooltip } from 'recharts';

const GraphChart = () => {

    const [menus,setMenus] = useState([]);

     useEffect(()=>{
        fetch('Graphdata.json')
        .then(res=> res.json())
        .then(data => setMenus(data) )
     },[])



    return (
        <div className='mx-auto w-full rounded-xl '>
        <RadialBarChart
 
  width={1080} 
  height={500} 
  innerRadius="10%" 
  outerRadius="100%" 
  data={menus} 
  startAngle={180} 
  endAngle={0}
>
  <RadialBar minAngle={30} label={{ fill: '#666', position: 'insideStart' }} background clockWise={true} dataKey='uv' />
  <Legend iconSize={20} width={150} height={200} layout='vertical' verticalAlign='bottom' align="right" />
  <Tooltip />
</RadialBarChart>
        </div>
    );
};

export default GraphChart;