
import { FlagIcon } from '@heroicons/react/solid';
import React from 'react';
import './BusinessSummary.css'
const BusinessSummary = () => {
    return (
        <div >
            <h2 className='text-3xl text-blue-700 font-bold mb-3 text-center'>Our Business Summary</h2>
            <div class=" justify-between card lg:card-side bg-indigo-500 shadow-xl mb-5">
                <div class="card-body">
                    <h2 class="text-center text-2xl font-bold text-white">OUR SERVICE IS ONE THE BEST.TRY TO TRUST US.</h2>
                    <h2 class="text-center text-xl font-bold text-white">PLEASE SEE USER EXPECTATION</h2>
                    <div className='flex  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                        <div>
                            <FlagIcon className='FlagIcon'></FlagIcon>
                            <p className='text-3xl text-black font-bold ml-3'>30+</p>
                            <p className='text-3xl text-white font-bold ml-3'>Countries</p>
                        </div>
                        <div>
                            <div class="rating gap-1 mt-10">
                                <input type="radio" name="rating-3" class="mask mask-heart bg-red-600" />
                                <input type="radio" name="rating-3" class="mask mask-heart bg-red-600" checked />
                                <input type="radio" name="rating-3" class="mask mask-heart bg-white" />
                                <input type="radio" name="rating-3" class="mask mask-heart bg-white" />
                                <input type="radio" name="rating-3" class="mask mask-heart bg-white" />
                            </div>
                            <p className='text-3xl text-black font-bold ml-3 mt-8'>50+</p>
                            <p className='text-3xl text-white font-bold ml-3'>Love Us</p>
                        </div>
                        <div>
                            <div class="rating rating-lg mt-10">
                                <input type="radio" name="rating-9" class="rating-hidden" />
                                <input type="radio" name="rating-9" class="mask mask-star-2 bg-red-600" />
                                <input type="radio" name="rating-9" class="mask mask-star-2 bg-red-600" checked />
                                <input type="radio" name="rating-9" class="mask mask-star-2 bg-white" />
                                <input type="radio" name="rating-9" class="mask mask-star-2 bg-white" />
                                <input type="radio" name="rating-9" class="mask mask-star-2 bg-white" />
                            </div>
                            <p className='text-3xl text-black font-bold ml-3 mt-5'>2+</p>
                            <p className='text-3xl text-white font-bold ml-3'>Our Reatings</p>
                        </div>
                        <div>
                            <div class="rating rating-xs">
                                <input type="radio" name="rating-5" class="mask mask-star-2 bg-red-600" />
                                <input type="radio" name="rating-5" class="mask mask-star-2 bg-red-600" checked />
                                <input type="radio" name="rating-5" class="mask mask-star-2 bg-white" />
                                <input type="radio" name="rating-5" class="mask mask-star-2 bg-white" />
                                <input type="radio" name="rating-5" class="mask mask-star-2 bg-white" />
                            </div>
                            <div class="rating rating-sm">
                                <input type="radio" name="rating-6" class="mask mask-star-2 bg-red-600" />
                                <input type="radio" name="rating-6" class="mask mask-star-2 bg-red-600" checked />
                                <input type="radio" name="rating-6" class="mask mask-star-2 bg-white" />
                                <input type="radio" name="rating-6" class="mask mask-star-2 bg-white" />
                                <input type="radio" name="rating-6" class="mask mask-star-2 bg-white" />
                            </div>
                            <div class="rating rating-md">
                                <input type="radio" name="rating-7" class="mask mask-star-2 bg-red-600" />
                                <input type="radio" name="rating-7" class="mask mask-star-2 bg-red-600" checked />
                                <input type="radio" name="rating-7" class="mask mask-star-2 bg-white" />
                                <input type="radio" name="rating-7" class="mask mask-star-2 bg-white" />
                                <input type="radio" name="rating-7" class="mask mask-star-2 bg-white" />
                            </div>
                            <div class="rating rating-lg">
                                <input type="radio" name="rating-8" class="mask mask-star-2 bg-red-600" />
                                <input type="radio" name="rating-8" class="mask mask-star-2 bg-red-600" checked />
                                <input type="radio" name="rating-8" class="mask mask-star-2 bg-white" />
                                <input type="radio" name="rating-8" class="mask mask-star-2 bg-white" />
                                <input type="radio" name="rating-8" class="mask mask-star-2 bg-white" />
                            </div>
                            <p className='text-3xl text-black font-bold mt-3'>500+</p>
                            <p className='text-3xl text-white font-bold'>Feedbacks</p>
                        </div>
                    </div>
                    <div class="card-actions justify-end">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;