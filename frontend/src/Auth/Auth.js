import React from "react";

import therapy from '../Imgs/Therapy.png'
import './Auth.css'

export const Auth = props =>{
    return(
        <div className="auth">
            <div className="auth-container__main">
                <div className="auth-static__handle">
                    <div className="static-handle">
                        <img src={therapy} className="static-img" />
                    </div>
                </div>
                {props.children}
            </div>
        </div>
    )
}