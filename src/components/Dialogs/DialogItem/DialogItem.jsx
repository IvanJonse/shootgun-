import  { React } from 'react';
import { NavLink } from 'react-router-dom';
import s from '../Dialogs.module.sass'

export default function DialogItem(props)  {
    let path = '/dialogs/' + props.id
    return (
        <NavLink to={path} className={s.dialogs__ListChats__item}>
        <div className={s.dialogs__ListChats__item__head}>
            <div className={s.dialogs__ListChats__item__head__avatar}>
                <img className={s.dialogs__ListChats__item__head__avatar__img} src={props.avatar} alt=""/>
            </div>
            <div className={s.dialogs__ListChats__item__head__wrap}>
                <div className={s.dialogs__ListChats__item__head__title}>
                    {props.title}
                </div>
                <div className={s.dialogs__ListChats__item__head__subtitle}>
                {props.subtitle}
                </div>
            </div>
        </div>
        <div className={s.dialogs__ListChats__item__wrap}>
            <div className={s.dialogs__ListChats__item__time}>{props.time}</div>
            <div className={s.dialogs__ListChats__item__count}><span className={s.dialogs__ListChats__item__count__item}>{props.count}</span></div>
        </div>
    </NavLink>
    )
}
