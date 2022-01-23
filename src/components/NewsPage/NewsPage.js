import React, { useEffect, useState } from 'react';
import SideBar from '../SideBar/SideBar';
import img1 from '../../images/featured_img1.jpg'
import { useParams } from 'react-router-dom';

const NewsPage = () => {
    const { id } = useParams();
    const [news, setNews] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/news/${id}`)
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])

    return (
        <div>
            <div className='container row mx-auto'>
                <div className='col-12 col-md-8'>
                    <h1 className='fs-3 my-2'>{news?.title}</h1>
                    <div className='border-top border-bottom'>
                        <span className='m-2 text-secondary'><i class="my-2 fas fa-user"></i> Reporter Name</span>
                        <span className='m-2 text-secondary'><i class="my-2 fas fa-tags"></i> Tag Name</span>
                        <span className='m-2 text-secondary'><i class="my-2 fas fa-clock"></i> 20 Jan, 2022</span>
                    </div>
                    <div className='text-center my-3'>
                        <img src={news?.img} className='w-100' alt="" />
                    </div>
                    <div>
                        <p className='fs-5 text-justify'>{news?.news}</p>
                    </div>
                </div>
                <div className='col-12 col-md-4'>
                    <SideBar></SideBar>
                </div>
            </div>
        </div>
    );
};

export default NewsPage;