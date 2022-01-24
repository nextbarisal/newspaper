import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const International = () => {
    const [internationalNews, setInternationalNews] = useState([])

    useEffect(() => {
        fetch(`http://newsapi.munimrahman.xyz/news/International`)
            .then(res => res.json())
            .then(data => setInternationalNews(data))
    }, [])
    const featuredInternationalNews = internationalNews[0];
    const internationalNewsSide = internationalNews.slice(1, 4)
    return (
        <div>
            <h1 className='bg-primary text-white p-2 mt-2 fs-4'>আন্তর্জাতিক</h1>
            <div>
                <Link className='link-style' to={`/${featuredInternationalNews?._id}`}>
                    <div>
                        <img src={featuredInternationalNews?.img} className='img-fluid' alt="" />
                    </div>
                    <div>
                        <h1 className='fs-5 mt-2 fw-bold'>{featuredInternationalNews?.title}</h1>
                    </div>
                    <p className='text-justify'>{featuredInternationalNews?.news.slice(0, 150)}</p>
                </Link>
            </div>
            {
                internationalNewsSide.map(news => <div className='mb-3'>
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
    );
};

export default International;