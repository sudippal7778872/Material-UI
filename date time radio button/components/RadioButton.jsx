import React, { useState } from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
// import { TextField } from '@mui/material';
import DateTimePick, { TimePick } from './DateandTime';

const RadioButton = () => {
    const [field, setField] = useState(null);
    const handleChange = (event) => {
        // console.log(event.target.value);
        const selected = event.target.value;
        setField(selected);
    }

    return (
        <>
            <div>
                RadioButton

                <FormControl onChange={handleChange}>
                    <FormLabel id="demo-radio-buttons-group-label">duration</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="time" control={<Radio />} label="Time" 
                        /> {field === "time" ? <TimePick/>:null}
                        <FormControlLabel value="date" control={<Radio />}
                            label="Date" /> {field === "date" ? <DateTimePick/>:null}
                    </RadioGroup>
                </FormControl>
            </div>
        </>

    )
}

export default RadioButton