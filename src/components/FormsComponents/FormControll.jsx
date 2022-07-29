import React from "react";
import './FormControll.sass'

export const FormControll = (Element) => ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error


    const showError = hasError && <div className='error__span'>{meta.error}</div>
   
    return (

        <div className='wrapForm'>
        
                <Element  className={hasError ? 'error' : 'itemForm'} {...input} {...props} />
            
                    { showError }
                
        </div>
      
    )
}



