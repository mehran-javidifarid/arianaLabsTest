import React from "react";
import './style.css';

const Input = ({type = 'text',placeholder,name,onChange,error}) => {
    return <>
        <input className={'input'} type={type} placeholder={placeholder} name={name} onChange={onChange}/>
        {error[name]&&<p className={'textError'}>{error[name]}</p>}
    </>
};

export default Input