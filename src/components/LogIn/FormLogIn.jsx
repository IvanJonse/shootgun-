import React from "react";
import s from './LogIn.module.sass'
import {Field } from 'redux-form'
import {Checkbox} from "@mui/material";
import { FormControll } from '../FormsComponents/FormControll';
import { ReqaredField, MaxLength } from "../../Utils/Validators/Validators";

export default function FormLogIn(props) {
    
    const Input = FormControll('input')

    const Length = MaxLength(40) 


    return (

        <>
    
            <form className={s.login__form} action="" onSubmit={props.handleSubmit}>
                
                <div className={s.login__form__wrap}>

                    <div className={s.login__form__item}>
                        
                        <Field validate={[ReqaredField, Length]} component={Input} name={'email'}  placeholder="Email" />
                    </div>

                    <div className={s.login__form__item}>
                        <Field validate={[ReqaredField, Length]} component={Input} name={'password'}  placeholder="Password" type={'password'}/>
                    </div>

                    <div className={`${s.login__form__item} ${s.login__form__item__check}`}>
                        {/* <Field component={'input'} id='rem' name={'rememberMe'} className={`${s.login__form__item__input} ${s.login__form__item__check}`} type="checkbox" /> */}
                        
                        <Checkbox id='rem' name={'rememberMe'} sx={{  '& .MuiSvgIcon-root': { color: '#ffffff', fontSize: 52 } }} ></Checkbox>
                        <label className={s.login__form__item__label} htmlFor='rem' >Remember me</label> 
                    </div>
                    
                    <div className={s.login__form__item}>
                        <button className={s.login__form__item__btn}><span className={s.login__form__item__btn__span}>LogIn</span></button> 
                    </div>
                    { props.error && <div className={s.login__form__error}>{props.error}</div>}
                </div>
            </form>

        </>
        
    )
}