import React from 'react';
import homeimg from '../Images/homeimg.png'
import '../Css/HomeAbout.css'
import Same from './Same'


const Home=()=>{
    return(
        <>

            <Same 
                title="UNI_KYC"
                text="Be a part of global kyc-chain...A portal, using Blockchain technology to assure a secure and time-efficient UNI-KYC system for clients and institutions."
                imgsrc={homeimg}
                // btn="Read More"
            />

           

        </>
    )
}
export default Home;