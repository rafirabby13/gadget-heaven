import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Bar, BarChart, ResponsiveContainer } from "recharts";

const Statistics = () => {
    const [newProducts, setNewProducts] = useState([])

    useEffect(()=>{
        fetch('./new.json')
        .then(res=> res.json())
        .then(data=>{
            // console.log(data);
            setNewProducts(data)
        })

    },[])
    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
  return (
    <div className="min-h-screen px-32">
      <Helmet>
        <title>Statistics | Gadget Heaven</title>
      </Helmet>
      Statistics
      <div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={150} height={40} data={data}>
          <Bar dataKey="uv" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
