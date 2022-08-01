import React, {useState, useEffect} from "react";
import s from './PofileInfo.module.sass'
import edit from '../../../assets/img/edit.png'

let StatusItem = (props) => {

    const onStatusChange = (e) => setStatus(e.currentTarget.value)

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(  () => {

        setStatus(props.status) 

    }, [props.status]);

    const activeEditMode = () => props.owner && setEditMode(true)
    
    const deActiveEditMode = () => {
        
    setEditMode(false)

    props.updateStatus(status)

    }

    return (
        <div className={s.wrap}>
                <div className={s.profileInfo__descr__subtext}>
                    <> 
                        { !editMode && 
                            <>
                                status: 
                                <>
                                    <span className={s.profileInfo__descr__subtext__span}>
                                        {props.status || <span className={s.profileInfo__descr__subtext__def}>{ `<Here should be status...>` }</span> }
                                        
                                    </span> 
                                </>                          
                            </>    
                        }
                    
                        { editMode && props.owner &&

                            <>
                                 status:
                                <input onChange={onStatusChange} onBlur={deActiveEditMode}
                                autoFocus={true} value={status}
                                className={s.profileInfo__descr__subtext__input}/>
                            </>
                         }
                         
                    </>
                    
                </div>
               <div className={s.profileInfo__contact__img} > 
               { 
                props.owner && 
                <img onClick={activeEditMode} className={s.profileInfo__contact__img__item}  src={edit} alt="" />
                }
               </div>
              
        </div>
    )
}

export default StatusItem;