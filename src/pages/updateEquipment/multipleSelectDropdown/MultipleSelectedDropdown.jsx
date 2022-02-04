import React from 'react';
import Select from 'react-select'

import './multipleSelectDropdown.css'

function MultipleSelectedDropdown() {

  const usingServices = [
    {
      value: 1,
      label: 'Khám tim mạch'
    },
    {
      value: 2,
      label: 'Khám Sản - Phụ khoa'
    },
    {
      value: 3,
      label: 'Khám răng hàm mặt'
    },
    {
      value: 4,
      label: 'Khám tai mũi họng'
    },
    {
      value: 5,
      label: 'Khám hô hấp'
    },
    {
      value: 6,
      label: 'Khám tổng quát'
    },
    {
      value: 7,
      label: 'Tất cả'
    },
  ];
  return (
    <div>
      <Select
        menuColor="red"
        isMulti
        defaultValue={[usingServices[1], usingServices[2], usingServices[3]]}
        options={usingServices}
        value={usingServices.value}
      />
    </div >
  );
}
export default MultipleSelectedDropdown
