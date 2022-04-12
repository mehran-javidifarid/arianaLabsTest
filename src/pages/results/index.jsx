import React, {useEffect, useState} from "react";
import {BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import {useSelector} from "react-redux";
import moment from "jalali-moment";
import './style.css'

const ResultsView = () => {
    const {list} = useSelector(({users}) => users);
    const [chartType, setChartType] = useState(1);
    const [chartData, setChartData] = useState([]);

    const setAgeData = () => {
        let dataList = [];
        let dataObject = {};
        list.map((item) => {
            const age = moment().year() - moment(item.birthDay).year();
            dataObject = {...dataObject, [age]: (dataObject[age] || 0) + 1}
        });
        Object.keys(dataObject).map((key) => dataList.push({name: `age ${key}`, count: dataObject[key]}));
        setChartData(dataList)
    };

    const setSkillData = () => {
        let dataList = [];
        let dataObject = {};
        list.map((item) => {
            item.skill.map(({value}) => {
                dataObject = {...dataObject, [value]: (dataObject[value] || 0) + 1}
            })
        });
        Object.keys(dataObject).map((key) => dataList.push({name: `skill ${key}`, count: dataObject[key]}));
        setChartData(dataList)
    };

    useEffect(() => {
        switch (chartType) {
            case 1:
                setAgeData();
                break;
            case 2:
                setSkillData();
                break;
        }
    }, [chartType]);

    return (
        <div>
            <div className={'chartTypeBox'}>
                <p>select chart type</p>
                <select className={'selectChart'} name="type" id="type" onChange={({target: {value}}) => setChartType(parseInt(value))}>
                    <option value={1}>age</option>
                    <option value={2}>skill</option>
                </select>
            </div>
            <div style={{height: '550px', padding: '0px 150px'}}>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart width={730} height={250} data={chartData}>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="name"/>
                        <YAxis/>
                        <Tooltip/>
                        <Legend/>
                        <Bar dataKey="count" fill="#66fcf2"/>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>

    );
};

export default ResultsView
