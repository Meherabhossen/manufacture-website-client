import React from 'react';
import image from '../../Images/service-1.jpg';
import image1 from '../../Images/service-2.jpg';
import image2 from '../../Images/service-3.jpg';
import image3 from '../../Images/service-4.jfif';
import image4 from '../../Images/service-5.jpg';
import image5 from '../../Images/service-6.jpg';

const OurService = () => {
    return (
        <div>
            <h2 className='text-center text-blue-500 font-bold text-2xl mb-5'>Our Showroom Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
                < div class="card w-96 bg-white shadow-xl" >
                    <figure class="px-10 pt-10">
                        <img src={image} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <p className='text-black'>This is Jon.He is one of the best expert person of our showroom he fix the engin problem.</p>
                    </div>
                </div >
                <div class="card w-96  bg-white shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={image1} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <p className='text-black'>Besides manufacturing in our showrooms we also provide some tyre repairing </p>
                    </div>
                </div>
                <div class="card w-96  bg-white shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={image2} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <p className='text-black'>He is David.He use to works on the parts checking .</p>
                    </div>
                </div>
                <div class="card w-96  bg-white shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={image3} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <p className='text-black'>We also provide engin parts and services also</p>
                    </div>
                </div>
                <div class="card w-96  bg-white shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={image4} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <p className='text-black'>Regular checking of our engineers </p>
                    </div>
                </div>
                <div class="card w-96  bg-white shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={image5} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <p className='text-black'>This our Tyre plants where we repair and service tyres</p>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default OurService;