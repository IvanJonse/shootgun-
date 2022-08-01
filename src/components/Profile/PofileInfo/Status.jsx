import React from "react";
import s from './PofileInfo.module.sass'
import StatusCommon from "./StatusCommon";
import edit from '../../../assets/img/edit.png'

export default function Status (props) {

    let arrwrap = {

        objData : {
    
        arr: [

            {  title: 'About me', status: props.profile.aboutMe, text: 'Here should be some about me'},

            {  title: 'Job', status: props.profile.lookingForAJobDescription, text: 'Here should be some about my job' },

            {  title: 'Job progress'}
         ]

        }
    }

    return ( 
    
        <>  
            { 
                props.owner &&
                <div className={s.profileInfo__contact__img}>
                <img onClick={props.activeEditMode} className={s.profileInfo__contact__img__item} src={edit} alt="" />
                </div>
            }

            { 
                arrwrap.objData.arr.map( (e, item) => 
                    <StatusCommon
                        profile={props.profile} 
                        a={e.a}    
                        key={item} 
                        title={e.title} 
                        textJobProgress={e.textJobProgress} 
                        status={e.status} 
                        text={e.text}
                    />
                )
            } 
        </>  
    )  
}
