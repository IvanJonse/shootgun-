import React, {useState}  from "react";
import  './HeaderMenu.sass';
import { NavLink } from "react-router-dom";
import { ClickAwayListener } from "@mui/material";
import user  from '../../assets/img/user.jpg';

export default function HeaderMenu (props) {
    
    const [open, setOpen] = useState(false);

    const handleClickAway = () => setOpen();

    return (

        <div className='header__menu'>

                <ul className='header__menu__list'>

                    <li className='header__menu__list__item'>
                        <NavLink to="/" className='header__menu__list__item__link__fq'>
                            F.A.Q
                        </NavLink>
                    </li>

                    <li className='header__menu__list__item header__menu__separ'></li>

                        <ClickAwayListener onClickAway={handleClickAway}>

                            <li className='header__menu__list__item'>       

                                <div className='header__menu__list__item__link' onClick={() => setOpen(!open)} >

                                    <div className='header__menu__list__item__link__avatar'>
                                        <img src={ props.profile.photos.small || user} alt="" className='header__menu__list__item__link__avatar__item'/>
                                    </div> 

                                    {props.isAuth ? 
                                        
                                    
                                        <div className='header__menu__list__item__link__text'>
                                            {props.profile.fullName}
                                        </div>        

                                        :

                                        <div className='header__menu__list__item__link__text'>
                                                Profile
                                        </div> 

                                    }

                                    <div className={open ? 'arrow__active arrow' : 'arrow'}></div>
                                </div>    
                            
                                { open &&

                               
                                    <div className='auth__wrap'>

                                        <div className='auth__wrap__arrow'></div>

                                        { props.isAuth ? 

                                            <>
                                            
                                                <div className='auth__wrap__link' >Account</div>
                                                    
                                                <div className='auth__wrap__link' onClick={ props.logOut }>Log out</div> 
                                                 
                                            </>
                                               
                                            :

                                            <>       
                                                
                                                <NavLink className='auth__wrap__link' to='/'>Log in</NavLink>

                                                <NavLink className='auth__wrap__link' to='/login'>Sign up</NavLink>     
                                                
                                            </>   
                                        }                                                     
                                    </div>
                                                           
                                }
                                                        
                            </li>

                        </ClickAwayListener>  
                </ul>
        </div>
    )


    
}