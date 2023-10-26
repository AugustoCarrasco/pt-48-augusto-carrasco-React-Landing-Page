import React from "react";
import "./Fullbody.css";


const Fullbody = ({wear}) => {

    return (
        <>
        <div className="fullbody-image__container">
            <img src={wear.fullBodyImgUri} alt="" />
        </div>
        </>
    )

}

export default Fullbody;