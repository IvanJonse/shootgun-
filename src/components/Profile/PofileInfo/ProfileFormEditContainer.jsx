import React from "react";
import { Field } from "redux-form";
import s from './PofileInfo.module.sass'
import { reduxForm } from "redux-form";
import ProfileFormEdit from "./ProfileFormEdit";

function ProfileFormEditContainer (props) {

    return (

        <form className={s.profileInfo__descr__form} action="" onSubmit={props.handleSubmit} >
            <div className={s.profileInfo__descr__form__wrap}>

                { props.Arr.map( (e, item) =>
                        <ProfileFormEdit  
                            key={item}
                            title={e.title}
                            placeholder={e.placeholder}
                            name={e.name}
                        />
                    )
                }
                                 
                <>
                    <div className={s.profileInfo__descr__form__title}>Job progress</div> 

                    <span className={s.profileInfo__descr__subtext__span}>

                        <div className={`${s.profileInfo__descr__form__iniput} ${s.Checkbox}`}> 

                            <><label className={s.Checkbox__label} htmlFor="lookingForAJob">Looking for a job?</label></> 
                        
                            <Field className={s.Checkbox__item} placeholder="job progress" name={'lookingForAJob'}
                            component='input'  type='checkbox'/>
                
                        </div>
                    </span> 

                    <button className={s.profileInfo__descr__form__btn}>save</button>
                </>
                
            </div>
        </form>
    )
}

export const ProfileReduxform = reduxForm ({ form: 'formEdit', enableReinitialize : true, destroyOnUnmount: false }) (ProfileFormEditContainer)

