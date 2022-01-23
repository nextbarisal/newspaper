import React from 'react';
import Carousel from '../Carousel/Carousel';
import Header from '../Header/Header';
import HomePolitics from '../HomePolitics/HomePolitics';
import International from '../International/International';
import SideBar from '../SideBar/SideBar';
import Sports from '../Sports/Sports';

const Home = () => {
    return (
        <div className=''>
            <div className='container row mx-auto'>
                <div className='col-12 col-md-8'>
                    <Carousel></Carousel>
                    <HomePolitics></HomePolitics>
                    <div className='row'>
                        <div className='col-12 col-md-6'>
                            <International></International>
                        </div>
                        <div className='col-12 col-md-6'>
                            <Sports></Sports>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-4'>
                    <SideBar></SideBar>
                </div>
            </div>
        </div>
    );
};

export default Home;