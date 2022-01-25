import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
    const [sideNews, setSideNews] = useState([]);
    useEffect(() => {
        fetch(`https://fast-citadel-27550.herokuapp.com/news`)
            .then(res => res.json())
            .then(data => setSideNews(data))
    }, [])
    const latestNews = sideNews.slice(0, 6)

    return (
        <div>
            <div>
                <h2 className='bg-primary text-white p-2 fs-4'>সর্বশেষ খবর</h2>
                {
                    latestNews.map(news => <div className='mb-3'>
                        <Link className='link-style row' to={`/${news?._id}`}>
                            <div className='col-4'>
                                <img src={news?.img} className='img-fluid' alt="" />
                            </div>
                            <div className='col-8 px-0'>
                                <h1 className='fs-6'>{news?.title}</h1>
                            </div>
                        </Link>
                    </div>)
                }

            </div>
            <div>
                <h2 className='bg-primary text-white p-2 mt-2 fs-4'>ভিডিও</h2>
                <div className='mb-3 text-center'>
                    <iframe className='video' src="https://www.youtube.com/embed/G99olPPOe9s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    );
};

export default SideBar;