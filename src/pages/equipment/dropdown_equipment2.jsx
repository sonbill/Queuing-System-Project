import './dropdown_equipment.css'
import React, { useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


function DropdownEquipmentTwo({ selected, setSelected, optionsTwo }) {
  const [isActive, setIsActive] = useState(false)
  return (
    <div className="equipment__dropdown">
      <div className="equipment__btn" onClick={(e) => setIsActive(!isActive)}>
        <p>{selected}</p>
        <ArrowDropDownIcon style={{ color: '#FF7506', fontSize: 30 }} />
      </div>
      {isActive && (
        <div className="equipment__content">
          {optionsTwo.map(option => (
            <div className="equipment__item" onClick={(e) => { setSelected(option); setIsActive(false); }}>
              {option}
            </div>
          ))}
        </div>
      )
      }
    </div >
  );
}
export default DropdownEquipmentTwo
