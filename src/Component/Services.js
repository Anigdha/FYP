import React from 'react'
import '../Css/ServiceStyle.css'
import Card from './Card'
import Data from './Data'

const Services=()=>{
    return(
        <>
        <h1>OUR SERVICES</h1> 
        <div className='services'>
            {Data.map((values)=>{
                return (
                    <Card
                        title1={values.stitle}
                        imgSrc={values.imgsrc}
                        desc1={values.desc}
                    />
                )
            })} 
        </div>   
        </>
    )
}

export default Services;