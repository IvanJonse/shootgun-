import React from 'react'
import load from '../../assets/img/loader.gif'
import './Preloader.sass'

let Preloader = (props) => {
    
    return (

        <div className='wrap'>
            
            <img src={load} alt="" className='loader' /> 

        </div>
    )
}

export default Preloader