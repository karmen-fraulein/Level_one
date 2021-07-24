import React from 'react';
import NavBar from '../components/NavBar'
import Footer from '../components/Footer';


const leyout = (props) => {
    return (
        <>
            <NavBar />
            {props.children}
            <Footer />
        </>
    )
}

export default leyout
