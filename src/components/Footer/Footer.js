import React from 'react';

const Footer = () => {
    return (
        <div className='container row bg-secondary mx-auto text-white mt-3 p-5'>
            <div className='col-12 col-md-4'>
                <h1>NewsFeed</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, iure! Fuga deleniti a cumque non, odit nemo. Quisquam, quo omnis!</p>
            </div>
            <div className='col-12 col-md-4'>
                <h4>Important Links</h4>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Sports</li>
                    <li>Bangladesh</li>
                    <li>International</li>
                </ul>
            </div>
            <div className='col-12 col-md-4'>
                <h4>Our Office</h4>
                <address>
                    Next Barisal, <br /> Fakir Bari Road, Barisal. <br />
                    Mobile: 01702XXXXXX
                </address>
            </div>
        </div>
    );
};

export default Footer;