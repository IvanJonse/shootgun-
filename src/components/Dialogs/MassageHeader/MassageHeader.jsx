import React, {useState} from "react";
import s from './MassageHeader.module.sass';
import menuD from "../../../assets/img/menuD.png";
import { ClickAwayListener } from '@mui/material';

export default function MassageHeader(props) {

    const [open, setOpen] = useState()
    const handleClickAway = () => setOpen (false)
    
    return (

        <ClickAwayListener onClickAway={handleClickAway}>
        <div className={s.massage}> 
            <div className = {s.massage__header}> 
                <div className={s.massage__header__item}><img className={s.massage__header__item__img} src={props.avatar} alt=""/></div>
                    <div className={s.massage__user}>
                        
                            <div className={s.massage__header__text}>
                                <div className={s.massage__header__text__title}>
                                    {props.title}
                                </div>
                                <div className={s.massage__header__text__subtitle}>
                                    {props.subtitle} минут назад
                                </div>
                            </div>
                    </div>
                <div className={s.massage__header__menu} onClick={() => setOpen(!open)}>
                <img src={menuD} style={{'height' : '45px'}} alt=''/>
                </div>
   
                { open &&
                    <div className={s.massage__header__menu__open}>
                        <div className={s.massage__header__menu__open__item}>
                            Показать профиль
                        </div>
                         <div className={s.massage__header__menu__open__item}>
                            Удалить чат
                        </div>
                    </div>
                }
       
            </div>
        </div>
        </ClickAwayListener>
    )
}
