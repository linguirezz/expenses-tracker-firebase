import { useEffect,useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,Legend } from 'recharts';
import axios from 'axios'
function Chart() {
    // todo: buat data pada chart berdasarkan jam,minggu,dan bulan
 const [list,setList]=useState(
    {
    }
 )
    useEffect(()=>{
        axios.get('http://localhost:3150/dashboard/',{
            headers:{
                token:localStorage.getItem('token')
            }
        }).then(res=>{
           const HourOriented = (res.data.expensesData).map(data=>{
               return {
                amount : data.amount,
                hour : data.time
               }
           })
           setList(HourOriented)
           
         })    
    },[])
    useEffect(()=>{console.log(list)},[list])

    // { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
    // { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
    // { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
    // { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
  

  return (
   
    <div className='bg-white w-[600px] h-[300px]  mx-auto p-5 z-4 '>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={list} margin={{right:30}}>
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis dataKey="hour" />
          <YAxis />
          <Tooltip />
          <Legend/>
          <Area  type="monotone" dataKey="amount" stroke="#8884d8" fill="#8884d8" />
         
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
