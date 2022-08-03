import React from "react";
import { Field } from "redux-form";
import s from './PofileInfo.module.sass'
import { FormControll } from '../../FormsComponents/FormControll';
import { reduxForm } from "redux-form";

function ProfileFormEdit (props) {
    
        const Input = FormControll('input')
     
    return (

        <>
            <div className={s.profileInfo__descr__form__title}>{props.title}</div> 
                
                <span className={s.profileInfo__descr__subtext__span}>

                        <> 
                            <Field placeholder={props.placeholder} 
                            className={s.profileInfo__descr__form__input} 
                            component={Input} name={props.name}/>
                        </>

                </span> 
        </>
    )

}

export default ProfileFormEdit

