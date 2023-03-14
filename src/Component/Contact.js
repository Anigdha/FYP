import React from 'react';
import '../Css/ContactStyle.css'
import myimg from '../Images/anigdha.png'

const Contact=()=>{
    return(
        <>
        <h1>OUR TEAM</h1>
        <div className='team'>
            <div className='imgteamDiv'>
                <img src={myimg} className="imgteam" ></img>
                <h3>Aman Rajneesh Singh</h3>
            </div>
            <div className='imgteamDiv'>
                <img src={myimg} className="imgteam" ></img>
                <h3>Alok Singh</h3>
            </div>
            <div className='imgteamDiv'>
                <img src={myimg} className="imgteam" ></img>
                <h3>Anigdha Bansal</h3>
            </div>
            <div className='imgteamDiv'>
                <img src={myimg} className="imgteam" ></img>
                <h3>Ankit Kumar Gupta</h3>
            </div>

        </div>   
        </>
    )
}

export default Contact;