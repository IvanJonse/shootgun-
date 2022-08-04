import React from "react";
import style from './LogIn.module.sass'
import {Field} from 'redux-form'
import {Checkbox} from "@mui/material";
import { FormControll } from '../FormsComponents/FormControll';

export default function FormLogIn(props) {
    
    const Input = FormControll('input')

    return (

        <>
            <form className={style.login__form} action='' onSubmit={props.handleSubmit}>
                
                <div className={style.login__form__wrap}>

                    <div className={style.login__form__item}>
                        
                        <Field component={Input} name={'email'}  placeholder="Email" />
                    </div>

                    <div className={style.login__form__item}>
                        <Field component={Input} name={'password'}  placeholder="Password" type={'password'}/>
                    </div>

                    <div className={`${style.login__form__item} ${style.login__form__item__check}`}>                        
                        <Checkbox id='rem' name={'rememberMe'} sx={{  '& .MuiSvgIcon-root': { color: '#ffffff', fontSize: 52 } }} ></Checkbox>
                        <label className={style.login__form__item__label} htmlFor='rem' >Remember me</label> 
                    </div>
                    { props.captchaUrl && <img className={style.login__form__captchaUrl} src={props.captchaUrl} alt="" /> }    
                    { props.captchaUrl && <Field  name="captcha" component={Input} placeholder='Symbols from image' /> }
                   
                    <div className={style.login__form__item}>
                        <button className={style.login__form__item__btn}><span className={style.login__form__item__btn__span}>LogIn</span></button> 
                    </div>
                        
                    { props.error && <div className={style.login__form__error}>{props.error}</div>}
                </div>
            </form>
        </>
        
    )
}