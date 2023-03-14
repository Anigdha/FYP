import React, { useRef } from 'react';
import logo from '../Images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faSignIn} from '@fortawesome/free-solid-svg-icons'
import '../Css/ListStyle.css'
import {Link} from "react-router-dom"

const List=()=>{
    // const home = useRef(null);
    // const about = useRef(null);
    // const service = useRef(null);
    // const contact = useRef(null);
    // const scrollToSection = (elementRef) => {
    //     window.scrollTo({
    //     top: elementRef.current.offsetTop,
    //     behavior: "smooth"
    //     })
    // }
    return(
        <>
        <header>
            <div className='container container-flex'>
                <div className='logocontainer'>
                    <img src={logo} alt="logo" height="100px" width="100px" className='logo'/>
                </div>
                <nav>
                    <div className='list'>
                        <Link to="" className='listItem'>Home</Link>
                        <Link to="/about" className='listItem'>About</Link>
                        <Link to="/services" className='listItem'>Services</Link>
                        <Link to="/contact" className='listItem'>Contact</Link>

                    </div>
                </nav>
                <div className='icons'>
                    <Link to="/signin" className='icon'>
                        <FontAwesomeIcon className='icon' icon = {faSignIn} />
                    </Link>
                    <Link to="/signup" className='icon'>
                        <FontAwesomeIcon className='icon' icon = {faUser} />
                    </Link>
                </div>
            </div>
        </header>
        </>
    )
}

export default List;