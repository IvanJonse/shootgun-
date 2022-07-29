import React from "react";
import './ButtonScrollTo.sass'

export default function ButtonScrollTo (props) {

    return (
        <div className='scrollButtonWrap' onClick={props.onScroll} >
            <div className={ props.visible ? 'scrollButton': 'scrollButtonNone' }></div>
        </div>
    )
}