import React from 'react';
import  DateTimePick, {TimePick} from './components/DateandTime'
import { TextField } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

const DateTime = () => {
    const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <div>
                <h1>DateTime picker</h1>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateTimePicker
                        label="Date&Time picker"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </div>

            <div>
                <h1>Time picker</h1>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <TimePicker
                        label="Time"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </div>
        </>
    )
}

export default DateTime