import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';

const AllSports = () => {

    const [internationalNews, setInternationalNews] = useState([])

    useEffect(() => {
        fetch(`http://newsapi.munimrahman.xyz/news/Sports`)
            .then(res => res.json())
            .then(data => setInternationalNews(data))
    }, [])
    return (
        <div className=''>
            <div className='container row mx-auto'>
                <div className='col-12 col-md-8 mb-3'>
                    {
                        internationalNews.map(news =>
                            <Link className='row link-style' to={`/${news?._id}`}>
                                <div className='col-12 col-md-4'>
                                    <img src={news?.img} className='img-fluid' alt="" />
                                </div>
                                <div className='col-12 col-md-8'>
                                    <h1 className='fs-5 fw-bold'>{news?.title}</h1>
                                    <p>{news?.news.slice(0, 150)}</p>
                                </div>
                            </Link>
                        )
                    }
                </div>

                <div className='col-12 col-md-4'>
                    <SideBar></SideBar>
                </div>
            </div>
        </div>
    )
};

export default AllSports;