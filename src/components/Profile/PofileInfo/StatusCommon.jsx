import React from "react";
import s from './PofileInfo.module.sass'

let StatusCommon = (props) => {

    return (

        <>
            <div className={s.profileInfo__descr__subtext}>
            
                {props.title + `:`}
            
                <span className={s.profileInfo__descr__subtext__span}>

                    {
                
                    props.status || 
                    <>
                        <span className={s.profileInfo__descr__subtext__def}>

                            {props.text ? `<${props.text}...>` :  

                            props.profile.lookingForAJob ? 

                            <b style={{'color' : '#122'}}>Yes</b> : <b style={{'color' : '#122'}}>No</b>}
                        
                        </span> 
                    </>

                    }

                </span> 
            
            </div>
        </>
    )
}

export default StatusCommon;