import React from "react";
import s from './Post.module.sass';

export default function Post(props) {

    return (
        <div className={s.Post}>
            <div className={s.Post__drscr}>
                <div className={s.Post__drscr__item__avatar}>
                    <img className={s.Post__drscr__item__img} src={props.avatar} alt=""/>
                </div>
                <div className={s.Post__drscr__item}>
                    <h2 className={s.Post__drscr__item__title}>{props.name}</h2>
                </div>
            </div>
                <div className={s.Post__drscr__item__massage}>
                    <div className={s.Post__drscr__item__text}>{props.massage}</div>
                </div>
            <div className={s.Post__drscr__wrap}>
                    <div className={s.Post__drscr__item__like}><span>like:</span> <span>{props.like} </span></div>
                    <div className={s.Post__drscr__item__dislike}><span>dislike:</span> <span> {props.dislike}</span></div>
            </div>
        </div>
    )

}