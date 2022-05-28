import React from 'react';
import bannerOne from '../../Images/banner-1 .jpg';
import bannerTwo from '../../Images/banner-2.jfif';
import bannerThree from '../../Images/banner-3.jfif';
const Banner = () => {
    return (
        <div class="carousel w-full my-8">
            <div id="slide1" class="carousel-item relative w-full">
                <img style={{width: '1400px', height: '600px'}} src={bannerOne} class="w-full" alt='' />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" class="btn btn-circle">❮</a>
                    <a href="#slide2" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" class="carousel-item relative w-full">
                <img style={{width: '1400px', height: '600px'}} src={bannerTwo} class="w-full" alt='' />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" class="btn btn-circle">❮</a>
                    <a href="#slide3" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" class="carousel-item relative w-full">
                <img style={{width: '1400px', height: '600px'}} src={bannerThree} class="w-full" alt='' />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" class="btn btn-circle">❮</a>
                    <a href="#slide4" class="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};
export default Banner;