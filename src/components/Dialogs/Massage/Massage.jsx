import React from "react";
import s from './Massage.module.sass';


export default function Massage(props, e) {

    return (

        <>       

                {  e  

                    ?
                      <div className={`${s.massage__list} ${s.massage__left} `}>
                          
                            <div className={s.massage__list__text}>{props.text} </div> 
                            {/* <img style={{maxWidth: '340px', minWidth: '340px', maxHeight: '100%', minHeigh: '100%'}} src={props.avatar} alt="" /> */}
                            {/* <div className={s.massage__list__avatar}><img className={s.massage__list__avatar__item} src={props.avatar} alt="" /></div> */}
                        </div>
                    :
                        <div className={s.massage__list}>
                            
                            <div className={s.massage__list__text}>{props.text}</div>
                        </div>
                }
        </>

    )
}
