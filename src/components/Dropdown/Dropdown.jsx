import React, { useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './dropdown.css'

export default function Dropdown({ selected, setSelected, options, setWidth, setHeight, setPadding }) {
  const [isActive, setIsActive] = useState(false)
  return (
    <div className="dropdown" style={{ width: setWidth.width, height: setHeight.height }}>
      <div className="dropdown__btn" onClick={(e) => setIsActive(!isActive)} style={{ padding: setPadding.padding }}>
        <p>{selected}</p>
        <ArrowDropDownIcon style={{ color: '#FF7506', fontSize: 30 }} />
      </div>
      {isActive && (
        <div className="dropdown__content">
          {options.map(option => (
            <div className="dropdown__item" onClick={(e) => { setSelected(option); setIsActive(false); }}>
              {option}
            </div>
          ))}
        </div>
      )
      }
    </div >
  );
}
