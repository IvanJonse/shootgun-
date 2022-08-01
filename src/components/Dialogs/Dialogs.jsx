import React, { useRef, useEffect} from "react";
import send from '../../assets/img/send.png'
import DialogItem from "./DialogItem/DialogItem";
import MassageHeader from "./MassageHeader/MassageHeader";
import Massage from "./Massage/Massage";
import fileUpload from "../../assets/img/fileUpload.png";
import s from './Dialogs.module.sass';
import { reduxForm, Field } from "redux-form";

export default function Dialogs(props) {

    const divRef = useRef(null)

useEffect(() => {
    if (divRef) {
        divRef.current.addEventListener('DOMNodeInserted', event => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: 'auto' });
      },  () => divRef.current.removeEventListener('DOMNodeInserted'))}
    
  },[])

 

    let DialogElem = props.dialogsPage.dialog.map(
            (dialog, index) =>  <DialogItem key={index} id={dialog.id} avatar={dialog.avatar} title={dialog.name} subtitle={dialog.textMessage} time={dialog.time} count={dialog.count}/>
    )

    let HeadInfo = <MassageHeader profile={props.profile} />
   

    let MassageElem = props.dialogsPage.massage.map( (data, index) => (<Massage key={index} text={data.text} avatar={data.avatar}/>))

        const addMassage = (values, resetForm) => {
             
            props.sendMassage(values.dialogText)

            resetForm((values.dialogText = () => values.clear ))
        }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__ListChats}>
                <div className={s.dialogs__ListChats__search}>
                    <input
                        className={s.dialogs__ListChats__search__item}
                        type="text"
                        placeholder="Поиск по чатам"/>
                </div>
                
                    {DialogElem}
                
            </div>
            <div className={s.dialogs__ListMassage} >

                {HeadInfo}
         
                <div className={s.dialogs__ListMassage__massage} ref={divRef}>
                        {MassageElem}
                </div>
                
                <div className={s.massage__send}>
                    <div className={s.massage__send__wrap}>
                        <SendMassageForm onSubmit={addMassage}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

const SendMassage = (props) => {
    
    const {invalid, submitting, pristine } = props

    return (

        <form onSubmit={props.handleSubmit} className={s.massage__send__item}>
            <label className={s.massage__send__label}>
                <img style={{'maxWidth' : '30px', 'minWidth' : '30px', 'height' : '30px'}} src={fileUpload} alt="" />
                <Field
                    component='input'
                    className={s.massage__send__file}
                    type="file"
                    multiple={true}
                    name="files"/>
            </label>
            <Field 
                component='textarea'
                name="dialogText"
                className={s.massage__send__item__text}
                placeholder='Сообщение'
                rows='1'
            />
            <button disabled={invalid || pristine || submitting} className={s.sendItem}>
                <img src={send} className={s.sendItem}  alt="" />
            </button>
        </form>
    )
}

const SendMassageForm = reduxForm({form: 'dialogText'})(SendMassage)