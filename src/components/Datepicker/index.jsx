import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './style.css';

const Datepicker = ({name, onChange, value, placeholder,error}) => {
    return (
        <>
            <DatePicker
                placeholderText={placeholder}
                selected={value[name]}
                onChange={(date) => onChange({target: {name: name, value: date}})}
            />
            {error[name] && <p className={'textError'}>{error[name]}</p>}
        </>
    )
};

export default Datepicker