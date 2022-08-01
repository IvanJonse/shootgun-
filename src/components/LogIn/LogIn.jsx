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
    props.logIn(formData.email, formData.password, formData.rememberMe,)
}

if (props.isAuth) {
    return <Navigate to={'/profile'}/>
}

    return (
               
        <div className={s.login}>

            <div className={s.login__title}>LogIn</div>
       
            <LoginReduxform onSubmit={onSubmit} rememberMe={props.rememberMe} />

        </div>    
    )

}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    rememberMe: state.auth.rememberMe

})

export default connect(mapStateToProps, {logIn}) (LogIn)