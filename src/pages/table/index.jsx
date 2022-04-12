import React from "react";
import './style.css'
import {useSelector} from "react-redux";
import './style.css';

const TableView = () => {
    const {list} = useSelector(({users}) => users);
    return (
        <div className={'tableWrapper'}>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Family</th>
                    <th>BirthDay</th>
                    <th>skills</th>
                </tr>
                {list.map(({name, family, birthDay, skill}) => <tr>
                    <td>{name}</td>
                    <td>{family}</td>
                    <td>{birthDay}</td>
                    <td>{skill?.map((skillItem) => ` ${skillItem.value}`)}</td>
                </tr>)}
            </table>
        </div>
    )
};

export default TableView