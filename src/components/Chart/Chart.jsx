import React, { useState } from 'react'
import './chart.css'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import DropdownViewChart from './dropdown_viewchart'

function Chart() {
  const data = [
    {
      day: '1',
      orderedNumber: 2200,
    },
    {
      day: '5',
      orderedNumber: 4000,
    },
    {
      day: '10',
      orderedNumber: 2000,

    },
    {
      day: '15',
      orderedNumber: 3180,
    },
    {
      day: '20',
      orderedNumber: 4221,
    },
    {
      day: '25',
      orderedNumber: 2400,
    },
    {
      day: '31',
      orderedNumber: 3490,
    },
  ];

  const [selected, setSelected] = useState("ngày")

  return (
    <div className="chart">
      <div className="chartDetails">
        <div className="chartInfor">
          <h3 className="chartTitle">Bảng thống kê theo {selected}</h3>
          <p className="chartDate">Tháng 11/2021</p>
        </div>
        <div className="chartSortDate">
          <p className="sortdate__name">Xem theo</p>
          <DropdownViewChart selected={selected} setSelected={setSelected} />
        </div>
      </div>
      <ResponsiveContainer with='100%' aspect={3 / 1} >
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey="name" stroke="#535261" />
          <YAxis stroke="#535261" />
          <Tooltip />
          <Area type="monotone" dataKey="orderedNumber" stroke="#5286F7" fill="#5286F7" />
        </AreaChart>
      </ResponsiveContainer>
    </div >
  )
}
export default Chart
