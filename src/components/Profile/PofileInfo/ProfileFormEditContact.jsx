import React from "react";
import { Field } from "redux-form";
import s from './PofileInfo.module.sass'
import { FormControll } from '../../FormsComponents/FormControll';
import { reduxForm } from "redux-form";

function ProfileFormEditContact (props) {

    const Input = FormControll('input')

    return (

        <form className={s.profileInfo__descr__form} action="" onSubmit={props.handleSubmit} >
            
            <div className={s.profileInfo__descr__form__wrap}>
                    <div className={s.profileInfo__descr__subtext}>
                            Contacts:   
                    </div>  
                {
                Object.keys(props.pfofile).map( (e, item) => ( 
                        
                <div key={item}> 
                
                  {e + ':'}
                  
                    <span className={s.profileInfo__descr__subtext__span}>
                        <Field placeholder={`example: https://${e}.com`} className={s.profileInfo__descr__form__input} component={Input} name={'contacts.' +  e.toLocaleLowerCase()}/>
                    </span> 
                </div>
                ))}

                { props.error && <div className={s.error}>{props.error}</div>}

                <button className={s.profileInfo__descr__form__btn}>save</button>
            </div>       
        </form>
    )
}

export const ProfileContactReduxform = reduxForm ({
    form: 'FormEditContact', enableReinitialize : true, destroyOnUnmount: false 
}) (ProfileFormEditContact)

