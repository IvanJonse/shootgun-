import React, {useState, useEffect} from "react";
import s from './PofileInfo.module.sass'

 function Status (props) {
      
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(  () => {

        setStatus(props.status) 

    }, [props.status]);


    const activeEditMode = () => setEditMode(true)
    
    const deActiveEditMode = () => {
    setEditMode(false)
    props.updateStatus(status)
    }
    const onStatusChange = (e) => setStatus(e.currentTarget.value)
           


        return (

            <div className={s.profileInfo__descr__item}>
                        <div className={s.profileInfo__descr__text}>
                            {props.profile.fullName} 
                        </div>
                        <div className={s.profileInfo__descr__subtext}>
                            Обо мне: 
                                <span className={s.profileInfo__descr__subtext__span}>
                                    {props.profile.aboutMe || <span className={s.profileInfo__descr__subtext__def}>{`<Информация отсутствует...>`}</span>} 
                                </span> 
                        </div>
                        <div className={s.profileInfo__descr__subtext}>
                            { 
                            
                                !editMode &&

                                <>
                                Статус работы: 
                                    <span onClick={activeEditMode} className={s.profileInfo__descr__subtext__span}>
                                        {props.status || <span className={s.profileInfo__descr__subtext__def}>{`<Статус не указан...>`}</span> }
                                    </span> 
                                </>

                            }

                            {

                                editMode &&


                                <>
                                Статус работы: 
                                    <input onChange={onStatusChange} onBlur={deActiveEditMode}
                                     autoFocus={true} value={status}
                                    className={s.profileInfo__descr__subtext__input}/>
                                </>

                            }

                        </div>
                </div>
        )
    
}

export default Status