import React from "react";
import { Field } from "redux-form";
import s from './PofileInfo.module.sass'
import { FormControll } from '../../FormsComponents/FormControll';
import { reduxForm } from "redux-form";

function ProfileFormEdit (props) {

        const Input = FormControll('input')
     
    return (

        <form className={s.profileInfo__descr__form} action="" onSubmit={props.handleSubmit} >

            <div className={s.profileInfo__descr__form__wrap}>

                <div className={s.profileInfo__descr__form__title}>Full name</div> 
                    
                    <span className={s.profileInfo__descr__subtext__span}>
    
                            <> 
                                <Field placeholder="full name" className={s.profileInfo__descr__form__input} component={Input} name={'fullName'}/>
                            </>

                    </span> 

               <div className={s.profileInfo__descr__form__title}>About me</div> 
                
                <span className={s.profileInfo__descr__subtext__span}>
   
                        <> 
                            <Field placeholder="about me" className={s.profileInfo__descr__form__input} component={Input} name={'aboutMe'}/>
                        </>

                </span> 

               <div className={s.profileInfo__descr__form__title}>Job</div> 

                <span className={s.profileInfo__descr__subtext__span}>
           
                        <>
                           <Field placeholder="job" className={s.profileInfo__descr__form__input} component={Input} name={'lookingForAJobDescription'}/>
                        </>
                    
                </span> 

               <div className={s.profileInfo__descr__form__title}>Job progress</div> 

                <span className={s.profileInfo__descr__subtext__span}>
         
                        <div className={`${s.profileInfo__descr__form__iniput} ${s.Checkbox}`}> 

                            <><label className={s.Checkbox__label} htmlFor="lookingForAJob">Looking for a job?</label></> 
                            <>
                                <Field className={s.Checkbox__item} placeholder="job progress" name={'lookingForAJob'}
                                component='input'  type='checkbox'/>
                            </>
                        </div>
                    
                </span> 

                <br />

                <button className={s.profileInfo__descr__form__btn}>save</button>

            </div>       
        </form>
    )
}

export const ProfileReduxform = reduxForm ({
    form: 'FormEdit', enableReinitialize : true, destroyOnUnmount: false 
}) (ProfileFormEdit)

