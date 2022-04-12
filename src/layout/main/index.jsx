import React from "react";
import { Link } from 'react-router-dom';
import './style.css';

const MainLayout = ({title,children}) => {

    return(
        <div className={'mainBackground'}>
            <div className={'navigationBar'}>
                <Link to={'/'}>add user</Link>
                <Link to={'/table'}>table</Link>
                <Link to={'/result'}>result</Link>
            </div>
            <h2 className={'title'}>{title}</h2>
            {children}
        </div>
    )
};

export default MainLayout