import React from 'react';
import s from './FindUsers.module.sass';
import userP  from '../../assets/img/user.jpg';
import { NavLink } from 'react-router-dom';

export default function UserItem (user) {

return (
        <div className={s.findUsers}>

            <div className={s.findUsers__wrap}>

                    <div className={s.findUsers__wrap__img}>
                        <NavLink to={'./../profile/' + user.u.id}>
                            <img className={s.findUsers__wrap__img__item} src={user.u.photos.small || userP} alt="" /> 
                        </NavLink>
                    </div>

                <div className={s.findUsers__wrap__btn}>
                    { 
                    
                    user.u.followed 
                    ? 
                        <button 
                            disabled={user.followingInProgress.some(id => id === user.u.id)} 
                            onClick={() => {user.unfollow(user.u.id)}} className={s.findUsers__wrap__btn__item}>
                                Unfollow
                        </button> 

                        : 

                        <button 
                        disabled={user.followingInProgress.some(id => id === user.u.id)} 
                        onClick={ () => {user.follow(user.u.id)}} className={s.findUsers__wrap__btn__item}>
                            Follow
                        </button>
                    }
                </div>
            </div>

            <div className={s.findUsers__name}>
                <div className={s.findUsers__name__item}>
                    <div className={s.findUsers__name__item__text}>{user.u.name}</div>
                    <div className={s.findUsers__name__item__text}>{user.u.status}</div>
                </div>
                <div className={s.findUsers__name__item}>
                    <div className={s.findUsers__name__item__adress}>{'u.location.country'}</div>
                    <div className={s.findUsers__name__item__adress}>{'u.location.city'}</div>
                </div>
            </div>

        </div>
    )
}
