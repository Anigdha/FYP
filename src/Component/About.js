import React from 'react';
import img1 from '../Images/img1.png'
import '../Css/HomeAbout.css'
import Same from './Same'

const About=()=>{
    return(
        <>
            <Same
                title="Know more about us"
                text = "A system to simplify repetitive activities (by providing proof-of-ownership, an NFT token to the customers who have completed their one-time KYC verification) and enable the sharing of KYC-related data. A blockchain directs collaboration among many players, and several services are developed around it to support the overall performance of the system."
                imgsrc = {img1}
                // btn="Know More"
            />
        </>
    )
}

export default About;