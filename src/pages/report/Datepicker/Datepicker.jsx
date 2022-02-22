import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import DateRangePicker from '@mui/lab/DateRangePicker';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DateFnsAdapter from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

function Datepicker() {
  const [value, setValue] = useState([null, null]);
  return (
    <div>
      <LocalizationProvider dateAdapter={DateFnsAdapter}>
        <DateRangePicker
          calendars={1}
          inputFormat={"dd/MM/yyyy"}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(startProps, endProps) => (
            <React.Fragment>
              <input ref={startProps.inputRef} {...startProps.inputProps} />
              <Box sx={{ mx: 2 }}><ArrowRightIcon style={{ alignItems: 'center' }} /></Box>
              <input ref={endProps.inputRef} {...endProps.inputProps} />
            </React.Fragment>
          )}
        />
      </LocalizationProvider>
    </div>
  );
}
export default Datepicker;
