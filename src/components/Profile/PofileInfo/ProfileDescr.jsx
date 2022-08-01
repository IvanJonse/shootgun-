import React, {useState, useEffect} from "react";
import s from './PofileInfo.module.sass'
import Status from "./Status";
import edit from '../../../assets/img/edit.png'
import StatusItem from "./StatusItem";
import Contact from "./Contact.jsx";
import {ProfileReduxform} from "./ProfileFormEdit";

export default function ProfileDescr(props) {

    const [editMode, setEditMode] = useState(false)

    const activeEditMode = () => setEditMode(true)

    const onSubmit = (formData) => {
        props.saveProfile(formData);
        setEditMode(false);
    }

    return (

        <div className={s.profileInfo__descr__item}>

            <StatusItem
                updateStatus={props.updateStatus}  
                status={props.status}
                owner={props.owner}
            />

            <div className={s.profileInfo__descr__common}>

               { editMode ?

                    <ProfileReduxform initialValues={props.profile} onSubmit={onSubmit}/>
                : 
                    <>
                        <div className={s.profileInfo__descr__text}>
                            {props.profile.fullName}
                        </div>
                        <Status activeEditMode={activeEditMode}
                            profile={props.profile} 
                            status={props.status}
                            owner={props.owner} 
                        />
                        <div className={s.profileInfo__descr__subtext}>
                            <div className={s.profileInfo__descr__subtext__wrap}>
                                Contacts:   
                                <span className={s.profileInfo__descr__subtext__def}>
                                        { `  <Here should be contacts...>` }                                      
                                </span> 
                            </div>                                               
                        </div>
                        {
                            Object.keys(props.profile.contacts).map((e, item) => {
                                
                            return (<Contact owner={props.owner} key={item} contactTitle={e} contactValue={props.profile.contacts[e]}/>)})
                        }
                    </>
               }
            </div>
        </div>
    )

}