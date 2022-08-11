import React from "react";
import logo from '../../assets/img/logo.svg';
import './Header.sass';
import HeaderMenu from './HeaderMenu';

export default function Header(props) {

    return (
        
            <header className='header'> 
                  <div className='header__wrap'>
                        <div className='header__img'>
                           <img className='header__img__item' src={logo}/>
                        </div>
                        <div className='HeaderMenu'>
                           <HeaderMenu isAuth={props.isAuth} login={props.logIn} profile={props.profile} logOut={props.logOut} />
                        </div>
                  </div>
            </header>
       
    )

}