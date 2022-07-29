import React  from "react";
import { NavLink } from "react-router-dom";
import s from './SideBar.module.sass';

export default function Sidebar() {
   
    return (
      <div className={s.container}>
           <nav className = {s.SideBar}> 
              <li>
                    <NavLink className={({isActive})=> isActive ? s.active__link: ''} to='/profile'>Profile</NavLink>
              </li>
              <li>
                    <NavLink className={({isActive})=> isActive ? s.active__link: ''} to='/dialogs'>Message</NavLink>
              </li>
            
              <li>
                    <NavLink className={({isActive})=> isActive ? s.active__link: ''} to='/find-users'>Find users</NavLink>
              </li>
        </nav>
        
    </div>
    )

}