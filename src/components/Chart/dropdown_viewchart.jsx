import React, { useState } from 'react'
import './dropdown_viewchart.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function DropdownViewChart({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false)
  const options = ['ngày', 'tháng', 'năm']

  return (
    <div className="dropdown__viewchart">
      <div className="btn__viewchart" onClick={(e) => setIsActive(!isActive)}>
        <p>{selected}</p>
        <ArrowDropDownIcon style={{ color: '#FF7506', fontSize: 30 }} />
      </div>
      {isActive && (
        <div className="content__viewchart">
          {options.map(option => (
            <div onClick={(e) => { setSelected(option); setIsActive(false); }} className="item__viewchart">{option}</div>
          ))}
        </div>
      )
      }
    </div >
  )
}
export default DropdownViewChart
