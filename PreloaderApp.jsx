import React from 'react'
import  beaver  from './assets/img/beaver.gif'
import './components/Preloader/Preloader.sass'

let PreloaderApp = (props) => {
    
    return (

        <div className='wrap'>
            
            <img src={beaver} alt="" className='loader' /> 

        </div>
    )
}

export default PreloaderApp