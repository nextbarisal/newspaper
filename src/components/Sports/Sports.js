import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../images/featured_img1.jpg'

const Sports = () => {
    const [sportsNews, setSportsNews] = useState([])

    useEffect(() => {
        fetch(`http://newsapi.munimrahman.xyz/news/Sports`)
            .then(res => res.json())
            .then(data => setSportsNews(data))
    }, [])
    const featuredSportsNews = sportsNews[0];
    const sportsNewsSide = sportsNews.slice(1, 4)

    return (
        <div>
            <h1 className='bg-primary text-white p-2 mt-2 fs-4'>খেলাধুলা</h1>
            <div>
                <Link className='link-style' to={`/${featuredSportsNews?._id}`}>
                    <div>
                        <img src={featuredSportsNews?.img} className='img-fluid' alt="" />
                    </div>
                    <div>
                        <h1 className='fs-5 mt-2 fw-bold'>{featuredSportsNews?.title}</h1>
                    </div>
                    <p className='text-justify'>{featuredSportsNews?.news.slice(0, 150)}</p>
                </Link>
            </div>
            {
                sportsNewsSide.map(news => <div className='mb-3'>
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

export default Sports;