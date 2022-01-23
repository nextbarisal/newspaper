import React from 'react';
import { Link } from 'react-router-dom';
import addBanner from '../../images/addbanner_728x90_V1.jpg'
import './Header.css'

const Header = () => {
    return (
        <div className='container mt-4'>
            <div className='d-flex justify-content-between align-items-center row'>
                <div className='logo col-12 col-md-4'>
                    <Link className='text-decoration-none text-dark' to={'/'}><h1>News<span className='text-primary'>Feed</span></h1></Link>
                </div>
                <div className='ad-banner col-12 col-md-8'>
                    <img src={addBanner} className='img-fluid' alt="" />
                </div>
            </div>
            <div className='menu-bar d-flex my-3 bg-primary flex-wrap'>
                <Link className='menu-item text-decoration-none text-white pe-2 ps-3 py-2 fs-5 ' to="/">হোম</Link>
                <Link className='menu-item text-decoration-none text-white px-2 py-2 fs-5 ' to="/politics">রাজনীতি</Link>
                <Link className='menu-item text-decoration-none text-white px-2 py-2 fs-5 ' to="/international">আন্তর্জাতিক</Link>
                <Link className='menu-item text-decoration-none text-white px-2 py-2 fs-5 ' to="/sports">খেলাধুলা</Link>
            </div>
        </div>
    );
};

export default Header;