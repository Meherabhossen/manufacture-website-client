import React from 'react';
import image1 from '../../Images/w-1.jfif';
import image2 from '../../Images/w-2.jfif';
import image3 from '../../Images/w-3.jfif';
import image4 from '../../Images/w-4.jfif';
import image5 from '../../Images/w-5.jfif';
import image6 from '../../Images/w-6.jfif';
const OurWerehouseTools = () => {
    return (
        <div>
            <h2 className='text-3xl text-blue-700 font-bold mb-5 text-center'>Our Manufacture Tools Warehouse</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div class="card w-96 bg-white shadow-xl">
                    <figure><img src={image1} alt="Shoes" /></figure>
                    <div class="card-body">
                        <p className='font-bold text-lg text-blue-500'>This is a large portion of our car tyre. Our Company manufactured this.</p>
                    </div>
                </div>
                <div class="card w-96 bg-white shadow-xl">
                    <figure><img src={image2} alt="Shoes" /></figure>
                    <div class="card-body">
                        <p className='font-bold text-lg text-blue-500'>This is a large portion of our car engin parts. Our Company manufactured this.</p>
                    </div>
                </div>
                <div class="card w-96 bg-white shadow-xl">
                    <figure><img src={image3} alt="Shoes" /></figure>
                    <div class="card-body">
                        <p className='font-bold text-lg text-blue-500'>This is a large portion of our car engin. Our Company manufactured this.</p>
                    </div>
                </div>
                <div class="card w-96 bg-white shadow-xl">
                    <figure><img src={image4} alt="Shoes" /></figure>
                    <div class="card-body">
                        <p className='font-bold text-lg text-blue-500'>This is a large portion of our car body kits. Our Company manufactured this.</p>
                    </div>
                </div>
                <div class="card w-96 bg-white shadow-xl">
                    <figure><img src={image5} alt="Shoes" /></figure>
                    <div class="card-body">
                        <p className='font-bold text-lg text-blue-500'>This is a large portion of our car rim . Our Company manufactured this.</p>
                    </div>
                </div>
                <div class="card w-96 bg-white shadow-xl">
                    <figure><img src={image6} alt="Shoes" /></figure>
                    <div class="card-body">
                        <p className='font-bold text-lg text-blue-500'>This the the full view of our warehouse</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurWerehouseTools;