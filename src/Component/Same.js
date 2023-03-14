import React from 'react';
import '../Css/HomeAbout.css'

const Same=(props)=>{
    return(
        <>
        <div className='mainsection'>
            <div className='contentBox'>
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <div className='btnBox'>
                    <div className='btn'>
                        <a className="readMore">{props.btn}</a>
                    </div>
                </div>
            </div>
            <div className='imageContainer'>
                <img src={props.imgsrc} alt="home" height="300px" width="500px" />
            </div>
        </div>   
        </>
    )
}
export default Same;