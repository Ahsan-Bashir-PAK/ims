'use client'
import Image from 'next/image';
import {React} from 'react'
// import { PieChart } from 'react-minimal-pie-chart'

import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import Logo from '../img/logo.png'


const Dashboard = () => {
   const data = [
      { name: 'Group A', value: 400 },
      { name: 'Group B', value: 300 },
      { name: 'Group C', value: 300 },
      { name: 'Group D', value: 200 },
    ];
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);
    
      return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
          {`${(percent * 100).toFixed(0)}%`}
        </text>
      );
    };
    
    


   return (
    <div>
          <div className='border w-screen h-screen'> {/* bg screen */}
              <div className='border  w-11/12 h-full m-auto flex fex-row'>
                <div className='  border-r-2 bg-slate-700 w-3/12 h-full bg-gradient-to-b from-slate-600  to-blue-300 '>
                <div className=' rounded-full w-4/12 h-26 m-auto mt-4 bg-blue-900 p-2 border-white border-2 border-yellow-500 '>
                     {/* <image src={Logo} height={80} width={100}/> */}
                     <Image src={Logo} className=''/>
                  </div>
                 
                  <div className=' w-full m-auto'>
                      <ul>
                            <li className='pl-5 bg-slate-200  mb-1 mt-2 hover:bg-white cursor-pointer  border-indigo-500'>Advance Class Course</li>
                            <li className='pl-5 bg-slate-200  mb-1 hover:bg-white cursor-pointer  border-indigo-500'>Upper Class Course</li>
                            <li className='pl-5 bg-slate-200  mb-1 hover:bg-white cursor-pointer  border-indigo-500'>Lower Class Course</li>
                            <li className='pl-5 bg-slate-200  mb-1 hover:bg-white cursor-pointer  border-indigo-500'>Recruit Course</li>
                            <li className='pl-5 bg-slate-200  mb-1 hover:bg-white cursor-pointer  border-indigo-500'>Orientation Course</li>
                      </ul>
                  </div>
                </div> 
                {/* Header Area */}
                 <div className='bg-gradient-to-b from-slate-200  to-gray-100 w-9/12 h-full'>
                    <div className=' justify-center items-center  to-slate-100 w-full  flex flex-row mb-1'>
                    
                    <div className='bg-gradient-to-b from-amber-500 to to-slate-300 w-3/12 h-16 ml-2 2 text-xs shadow-slate-700 shadow-md items-center text-center pt-1 '>
                      <h2 className='text-white text-lg '>Advance Qualified</h2>
                      <h2 className='text-white text-lg'>1500</h2>
                    </div> 

                    <div className='bg-gradient-to-br from-red-700 to to-red-400  w-3/12 h-16 ml-2 2 text-xs shadow-slate-700 shadow-md items-center text-center pt-1 '>
                      <h2 className='text-white text-lg '>Upper Qualified</h2>
                      <h2 className='text-white text-lg'>2500</h2>
                    </div> 

                    <div className='bg-green-600  w-3/12  ml-2 h-16 text-xs shadow-slate-700 shadow-md items-center text-center pt-1 '>
                      <h2 className='text-white text-lg '>Probationer Qualified</h2>
                      <h2 className='text-white text-lg'>5500</h2>
                    </div> 

                    
                    
                   
                    </div> {/*end of Header Area*/}
                    <div className=' items-center justify-center to-slate-100 w-full  flex flex-row '>
                    
                    <div className='bg-gradient-to-b from-amber-500 to to-slate-300 w-3/12 h-16 ml-2 2 text-xs shadow-slate-700 shadow-md items-center text-center pt-1 '>
                      <h2 className='text-white text-base '>Intermediate Qualified</h2>
                      <h2 className='text-white text-lg'>3100</h2>
                    </div> 

                    <div className='bg-gradient-to-b from-amber-500 to to-slate-300 w-3/12 h-16 ml-2 2 text-xs shadow-slate-700 shadow-md items-center text-center pt-1 '>
                      <h2 className='text-white text-base '>Lower Qualified</h2>
                      <h2 className='text-white text-lg'>3500</h2>
                    </div> 

                    <div className='bg-gradient-to-b from-amber-500 to to-slate-300 w-3/12 h-16 ml-2 2 text-xs shadow-slate-700 shadow-md items-center text-center pt-1 '>
                      <h2 className='text-white text-base '>Recruit Qualified</h2>
                      <h2 className='text-white text-lg'>2500</h2>
                    </div> 

                    
                   
                    </div> {/*end of Header Area*/}
                    {/* Container Area */}
                    <div className='bg-white w-full h-full flex flex-row'>
                        <div className='bg-blue-400 w-3/12 h-3/6 flex flex-row border-black m-1 '>
                          <div className=' w-full bg-slate-200'>
                             <h6 className='bg-orange-600 p-1 text-white text-center'>Advance Class Course</h6>
                             <ul>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Total Nominatation: 30</li>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Total Arrival: 27</li>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Not Reported: 03</li>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Repatriated: 02</li>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Present: 25</li>
                             </ul>
                             <PieChart
                       className=''
                        data={[
                           { title: 'One', value: 10, color: '#Eeffee' },
                           { title: 'Two', value: 15, color: '#C13C37' },
                           { title: 'Three', value: 20, color: '#6A2135' },
                           { title: 'Three', value: 20, color: '#abcdef' },
                         ]}
                       />
                            </div>
                        </div>
                        
                        <div className='bg-blue-400 w-3/12 h-3/6 flex flex-row border-black m-1 '>
                          <div className=' w-full bg-slate-200'>
                             <h6 className='bg-red-600 p-1 text-white text-center'>Upper Class Course</h6>
                             <ul>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Total Nominatation: 30</li>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Total Arrival: 27</li>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Not Reported: 03</li>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Repatriated: 02</li>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Present: 25</li>
                             </ul>
                            </div>
                        </div>

                        <div className='bg-blue-400 w-3/12 h-3/6 flex flex-row border-black m-1 '>
                          <div className=' w-full bg-slate-200'>
                             <h6 className='bg-green-600 p-1 text-white text-center'>Probationer Class Course</h6>
                             <ul>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Total Nominatation: 30</li>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Total Arrival: 27</li>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Not Reported: 03</li>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Repatriated: 02</li>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Present: 25</li>
                             </ul>
                            </div>
                        </div>
                      
                        <div className='bg-blue-400 w-3/12 h-3/6 flex flex-row border-black m-1 '>
                          <div className=' w-full bg-slate-200'>
                             <h6 className='bg-black p-1 text-white text-center'>Recruite Course</h6>
                             {/* <ul>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Total Nominatation: 30</li>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Total Arrival: 27</li>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Not Reported: 03</li>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Repatriated: 02</li>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Present: 25</li>
                             </ul> */}
                             <ResponsiveContainer width="100%" height="100%">
                                    <PieChart width={400} height={400}>
                                       <Pie
                                          data={data}
                                          cx="50%"
                                          cy="50%"
                                          labelLine={false}
                                          label={renderCustomizedLabel}
                                          outerRadius={80}
                                          fill="#8884d8"
                                          dataKey="value"
                                       >
                                          {data.map((entry, index) => (
                                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                          ))}
                                       </Pie>
                                    </PieChart>
                                    </ResponsiveContainer>
                            </div>
                        </div>
                        {/* End Container Area */}
                    </div>
                 </div>        
              </div>     
          </div>

    </div>
  )
}

export default Dashboard