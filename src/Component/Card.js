import React from 'react';
import '../Css/ServiceStyle.css'


const Card=(props)=>{
    return(
        <>
            <div className='card'>
                <h2>{props.title1}</h2>
                <img src={props.imgSrc} alt="service" height="100px" width="100px" className='serviceImg'/>
                <p>{props.desc1}</p>             
            </div>
        </>
    )
}
export default Card;