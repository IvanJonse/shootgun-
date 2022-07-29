import React from "react";
import s from './PofileInfo.module.sass'
import  Wall  from '../../../assets/img/wall.jpg'
import user  from '../../../assets/img/user.jpg';
import Status from "./Status";

export default function PofileInfo(props) {

return (
    
    <div className={s.profileInfo}>
        <div className={s.profileInfo__wrap}>
            <div className={s.content}>
                <div className={s.content__img}>
                    <img className={s.content__img__item} src={Wall}/>
                </div>
            </div>
            <div className={s.profileInfo__descr}>
                <a href='#' className={s.profileInfo__descr__photo}>
                    <img className={s.profileInfo__descr__img} 
                        src={props.profile.photos.large !== null ? props.profile.photos.large  : user } alt="" 
                    />
                </a>
                <Status profile={props.profile} status={props.status} updateStatus={props.updateStatus} userId={props.userId}/>
            </div>    
        </div>
    </div> 
       

    )

}