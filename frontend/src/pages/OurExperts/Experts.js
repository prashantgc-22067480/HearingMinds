import React from "react";

import './Experts.css'
import doc from '../../Imgs/doctor.jpg'

export const Expert = () =>{
    return(
        // <div className="main-container">
            <div className="clinicians-container">

                <div className="clinicians-container__card">
                    <div className="clinicians-container__img">
                        <img src={doc} className="clinicians__img" />
                    </div>

                    <div className="clinicians-container__info">
                        <span className="info__name kanit-semibold">Name, (Specialty)</span>
                        <p className="info__details kanit-regular">details</p>
                    </div>
                </div>

                <div className="clinicians-container__card">
                    <div className="clinicians-container__img">
                        <img src={doc} className="clinicians__img" />
                    </div>

                    <div className="clinicians-container__info">
                        <span className="info__name kanit-semibold">Name, (Specialty)</span>
                        <p className="info__details kanit-regular">details</p>
                    </div>
                </div>


                <div className="clinicians-container__card">
                    <div className="clinicians-container__img">
                        <img src={doc} className="clinicians__img" />
                    </div>

                    <div className="clinicians-container__info">
                        <span className="info__name kanit-semibold">Name, (Specialty)</span>
                        <p className="info__details kanit-regular">details</p>
                    </div>
                </div>


                <div className="clinicians-container__card">
                    <div className="clinicians-container__img">
                        <img src={doc} className="clinicians__img" />
                    </div>

                    <div className="clinicians-container__info">
                        <span className="info__name kanit-semibold">Name, (Specialty)</span>
                        <p className="info__details kanit-regular">details</p>
                    </div>
                </div>

                <div className="clinicians-container__card">
                    <div className="clinicians-container__img">
                        <img src={doc} className="clinicians__img" />
                    </div>

                    <div className="clinicians-container__info">
                        <span className="info__name kanit-semibold">Name, (Specialty)</span>
                        <p className="info__details kanit-regular">details</p>
                    </div>
                </div>

            </div>
        // </div>
    )
}