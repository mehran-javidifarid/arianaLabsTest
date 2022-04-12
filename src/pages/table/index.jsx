import React from "react";
import './style.css'
import {useSelector} from "react-redux";
import './style.css';

const TableView = () => {
    const {list} = useSelector(({users}) => users);
    return (
        <div className={'tableWrapper'}>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Family</th>
                    <th>BirthDay</th>
                    <th>skills</th>
                </tr>
                </thead>
                <tbody>
                {list?.map(({name, family, birthDay, skill}, index) => <tr key={name + index}>
                    <td>{name}</td>
                    <td>{family}</td>
                    <td>{birthDay.toString()}</td>
                    <td>{skill?.map((skillItem) => ` ${skillItem.value}`)}</td>
                </tr>)}
                </tbody>
            </table>
        </div>
    )
};

export default TableView