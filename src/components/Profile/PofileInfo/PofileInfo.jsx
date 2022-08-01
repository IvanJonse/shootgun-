import React, {useState, useEffect} from "react";
import s from './PofileInfo.module.sass'
import  Wall  from '../../../assets/img/wall.jpg'
import user  from '../../../assets/img/user.jpg';
import ProfileDescr from "./ProfileDescr";

export default function PofileInfo(props) {
    
   const onUpload = (e) => {
       if(e.target.files.length) {
        props.putProfileFiles(e.target.files[0])
       }
    }

return (
        <div className={s.profileInfo}>
            <div className={s.profileInfo__wrap}>
                <div className={s.content}>
                    <div className={s.content__img}>
                        <img className={s.content__img__item} src={Wall}/>
                    </div>
                </div>
                <div className={s.profileInfo__descr}>
                    <div className={s.profileInfo__descr__wrap}>  

                        <label className={s.profileInfo__descr__photo}>

                            <img className={s.profileInfo__descr__img} 
                                src={props.profile.photos.large || user } alt="" 
                            />
                            {
                                props.owner &&

                                <input onChange={onUpload} type="file" multiple={true} name="files" className={s.profileInfo__descr__input}/>
                            }

                        </label>

                        {
                            props.owner &&  

                                <label className={s.profileInfo__descr__label}>
                                    <svg className={s.profileInfo__descr__label__span}></svg>
                                Upload photo
                                    <input onChange={onUpload} type="file" multiple={true} name="files" className={s.profileInfo__descr__input}/>
                                </label>
                        } 

                    </div>  

                    <ProfileDescr {...props}/>
                        
                </div>   
            </div> 
        </div> 
    )
}

