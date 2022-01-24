import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../images/featured_img1.jpg'
import './HomePolitics.css'

const HomePolitics = () => {
    const [politicsNews, setPoliticsNews] = useState([])

    useEffect(() => {
        fetch(`http://newsapi.munimrahman.xyz/news/Politics`)
            .then(res => res.json())
            .then(data => setPoliticsNews(data))
    }, [])
    const featuredPoliticsNews = politicsNews[0];
    const politicsNewsSide = politicsNews.slice(1, 10)
    return (
        <div className=''>
            <h2 className='bg-primary text-white p-2 mt-2 fs-4'>রাজনীতি</h2>
            <div className='row'>
                <div className='col-12 col-md-6'>
                    <Link className='link-style' to={`/${featuredPoliticsNews?._id}`}>
                        <div>
                            <img src={featuredPoliticsNews?.img} className='img-fluid' alt="" />
                        </div>
                        <div>
                            <h1 className='fs-5 fw-bold mt-2'>{featuredPoliticsNews?.title}</h1>
                        </div>
                        <p className='text-justify'>{featuredPoliticsNews?.news.slice(0, 150)}</p>
                    </Link>
                </div>
                <div className='col-12 col-md-6'>
                    {
                        politicsNewsSide.map(news => <div className='mb-3'>
                            <Link className='link-style row' to={`/${news?._id}`}>
                                <div className='col-4'>
                                    <img src={news?.img} className='img-fluid' alt="" />
                                </div>
                                <div className='col-8 px-0'>
                                    <h1 className='fs-6 fw-bold'>{news?.title}</h1>
                                </div>
                            </Link>
                        </div>)
                    }

                </div>
            </div>
        </div >
    );
};

export default HomePolitics;