import React, {useState} from "react";
import s from './PofileInfo.module.sass'
import Status from "./Status";
import edit from '../../../assets/img/edit.png'
import StatusItem from "./StatusItem";
import Contact from "./Contact.jsx";
import { ProfileReduxform } from "./ProfileFormEditContainer";
import { ProfileContactReduxform } from "./ProfileFormEditContact";

export default function ProfileDescr(props) {

    const [editMode, setEditMode] = useState(false)

    const activeEditMode = () => setEditMode(true)

    const [editContact, setEditContact] = useState(false)

    const activeEditContact = () => setEditContact(true)

    const onSubmit = (formData) => {
        props.saveProfile(formData);
        setEditMode(false);
    }

    const onSubmitContact = async(formData) => {
        props.saveProfile(formData).then( () => {
        setEditContact(false)
    })}

    let forrArr = {
        arr: [
            {title: 'Full name', placeholder: 'full name', name: 'fullName' },
            {title: 'About me', placeholder: 'about me', name: 'aboutMe' },
            {title: 'Professional skills', placeholder: 'professional skills', name: 'lookingForAJobDescription' },
        ]
    }

let Des = () => {
    return (
        <span className={s.profileInfo__descr__subtext__def}>{ `<Here should be status...>` }</span> 
    )
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
     
                        <ProfileReduxform 
                            Arr={forrArr.arr}
                            initialValues={props.profile} 
                            onSubmit={onSubmit}
                        />
      
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
                    </>
                }
            </div>
                
            <>
                 { editContact ?  
                        <ProfileContactReduxform
                            pfofile={props.profile.contacts}
                            initialValues={props.profile} 
                            onSubmit={onSubmitContact}
                        /> : 
                    <>   
                       
                        <div className={s.profileInfo__descr__subtext}>
                        
                            <div className={s.profileInfo__descr__subtext__wrap}>
                            Contacts: 
                            </div>          
                            {
                            props.owner &&
                                <div className={s.profileInfo__contact__img}>
                                    <img onClick={activeEditContact} className={s.profileInfo__contact__img__item} src={edit} alt="" />
                                </div>
                            }                                     
                        </div>
                        {
                            Object.keys(props.profile.contacts).map((e, item) => {
                                
                            return (props.profile.contacts[e] && <Contact owner={props.owner} key={item} contactTitle={e} contactValue={props.profile.contacts[e]}/>  
                        )})
                            
                        }

                       
                    </>
            }
                
                
            </>

        </div>
    )

}


