import React, {useState} from "react";
import Input from "../../components/Input";
import Datepicker from "../../components/Datepicker";
import CSelect from "../../components/Select";
import {listSkill} from '../../constant'
import {useDispatch} from "react-redux";
import {setUserList} from "../../redux/users/actions";
import './style.css'
import Button from "../../components/Button";

const RegisterView = () => {
    const dispatch = useDispatch();
    const [formError, setFormError] = useState({});
    const [loader, setLoader] = useState(false);
    const [formValue, setFormValue] = useState({
        name: undefined,
        family: undefined,
        birthDay: undefined,
        skill: undefined,
    });

    const validate = () => {
        let _errors = {};
        let hasError = false;
        Object.keys(formValue).map((item) => {
            // @ts-ignore
            if (!formValue[item]) {
                _errors = {..._errors, [item]: `${item} is required`};
                hasError = true
            }
        });
        setFormError(_errors);
        if (!hasError) submitForm()
    };

    const handleValue = ({target: {value, name}}) => {
        setFormValue({ ...formValue, [name]: value })
    };

    const submitForm = async () => {
        try {
            setLoader(true);
            dispatch(setUserList(formValue));
            console.log(formValue);
            setLoader(false)
        } catch (e) {
            console.log(e);
            setLoader(false)
        }
    };

    const defaultProps = {
        onChange:handleValue,
        error:formError,
        value:formValue
    };

    return (
        <div className={'wrapper'}>
            <div className='formBox'>
                <Input placeholder={'name'} name={'name'} {...defaultProps}/>
                <Input placeholder={'family'} name={'family'} {...defaultProps}/>
                <Datepicker name={'birthDay'} placeholder={'birthDay'} {...defaultProps}/>
                <CSelect name={'skill'} options={listSkill} {...defaultProps}/>
                <Button onClick={validate} label={'send'}/>
            </div>
        </div>
    )
};

export default RegisterView