import React from 'react';
import img1 from '../../images/featured_img1.jpg'
import img2 from '../../images/featured_img2.jpg'
import img3 from '../../images/featured_img3.jpg'

const Carousel = () => {
    return (
        <div>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active car-h">
                        <img src="https://samakal.com/uploads/2022/01/online/photos/a-samakal-61e80cf3dae0f.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item car-h">
                        <img src="https://samakal.com/uploads/2022/01/online/photos/hasan-mahmud-2-samakal-61ebe78fe9b35.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item car-h">
                        <img src="https://samakal.com/uploads/2022/01/online/photos/minister-samakal-61e952a5bf713.jpg" class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Carousel;