import React from "react";
import s from './PofileInfo.module.sass'
import edit from '../../../assets/img/edit.png'

const Contact = ({contactTitle, contactValue}) => {

    return (

        <div className={s.profileInfo__contact}> 
            
            <div className={s.profileInfo__contact__item}>{contactTitle}</div> : 
            <div className={s.profileInfo__contact__item__right}>{contactValue} </div>

        </div>
    )
    
}

export default Contact