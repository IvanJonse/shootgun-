import React from "react";
import './Home.sass'
import logo  from '../../assets/img/logo.svg'
import { NavLink } from "react-router-dom";

export default function Home(props) {

return (
    
    <div className='Home'>

        <div className='Home__img'>
            <img className='Home__img__item' src={logo} alt='home-logo'/>
        </div>

        <NavLink to='/log-in' className='Home__btn'>Start now</NavLink>
        
    </div> 
    

    )

}
