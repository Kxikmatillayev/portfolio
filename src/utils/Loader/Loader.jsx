import React from 'react';
import './loader.css';

const Loader = () => {
    return (
        <section className='flex flex-row justify-center items-center h-screen bg-white dark:bg-[#121212]'>
            <div class="loader">
                <div class="box">
                    <div class="logo">
                       <h1 className='text-white text-2xl'>X.R</h1>
                    </div>
                </div>
                <div class="box"></div>
                <div class="box"></div>
                <div class="box"></div>
                <div class="box"></div>
            </div>

        </section>
    );
};

export default Loader;
