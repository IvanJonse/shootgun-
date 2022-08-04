import React from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import FormLogIn from "./FormLogIn";
import s from './LogIn.module.sass'
import { logIn } from './../../state/auth-reducer';
import { Navigate } from "react-router-dom";

const LoginReduxform = reduxForm ({
    form: 'login'
}) (FormLogIn)

const LogIn = (props) => {
  
const onSubmit = (formData) => {
    props.logIn(formData.email, formData.password, formData.captcha)
    
}

if (props.isAuth) {
    return <Navigate to={'/profile'}/>
}

    return (
               
        <div className={s.login}>

            <div className={s.login__title}>LogIn</div>
       
            <LoginReduxform  captchaUrl={props.captchaUrl} onSubmit={onSubmit} />

        </div>    
    )

}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl,
    clear: state.auth.clear

})

export default connect(mapStateToProps, {logIn}) (LogIn)