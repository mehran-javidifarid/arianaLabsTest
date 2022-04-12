import React from "react";
import {MultiSelect} from "react-multi-select-component";
import './style.css';

const CSelect = ({name, onChange, value, options,placeholder, error}) => {

    return (
        <>
            <div className={'select'}>
                <MultiSelect
                    options={options}
                    value={value[name] || []}
                    onChange={(e) => onChange({target: {name, value: e}})}
                    labelledBy={placeholder}
                />
            </div>
            {error[name] && <p className={'textError'}>{error[name]}</p>}
        </>

    );
};

export default CSelect;