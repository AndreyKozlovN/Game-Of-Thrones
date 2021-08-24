import React from 'react';
import img from './error.jpg';

const Error = () => {
    return (
        <>
            {/* <img src={process.env.PUBLIC_URL + '/img/error.jpg'} alt="error"></img> */}
            <img src={img} alt="error"></img>
            <span>Sorry, there was an error.</span>
        </>
    )
}

export default Error;