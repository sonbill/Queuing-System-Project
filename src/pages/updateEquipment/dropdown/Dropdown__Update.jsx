import React, { useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './dropdown_update.css'


function DropdownUpdate({ selected, setSelected, options }) {
  const [isActive, setIsActive] = useState(false)
  return (
    <div className="dropdown__update">
      <div className="dropdown__update__btn" onClick={(e) => setIsActive(!isActive)}>
        <p>{selected}</p>
        <ArrowDropDownIcon style={{ color: '#FF7506', fontSize: 30 }} />
      </div>
      {isActive && (
        <div className="dropdown__update__content">
          {options.map(option => (
            <div className="dropdown__update__item" onClick={(e) => { setSelected(option); setIsActive(false); }}>
              {option}
            </div>
          ))}
        </div>
      )
      }
    </div >
  );
}
export default DropdownUpdate
