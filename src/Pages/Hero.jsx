import React from 'react';
import { useTranslation } from 'react-i18next';
// import img from "/public/me.dev.jpg"; // Bu qatorni o'chirib tashlang

const Hero = () => {
    const { t } = useTranslation("hero");
    const imgSrc = "/me.dev.jpg"; // Rasmning to'g'ridan-to'g'ri URLi

    return (
        <section className='bg-oq dark:bg-dakr py-[50px]'>
            <div className='container flex lg:flex-row flex-col-reverse items-center justify-between gap-4'>
                <div className='flex flex-col lg:items-start items-center lg:text-start text-center gap-[20px] sm:w-[50%]'>
                    <h1 className='text-qora dark:text-oq sm:text-5xl text-3xl font-bold'>{t("English")}</h1>
                    <img src={imgSrc} alt="My photo" className='flex sm:hidden w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] object-cover rounded-[50%]' />
                    <span className='sm:text-xl text-lg text-gren cursor-pointer'>{t("Teach")}</span>
                    <ul className='flex flex-row sm:justify-start justify-center items-center text-qora dark:text-oq gap-3 text-2xl sm:text-4xl'>
                        <li>
                            <a href="https://www.instagram.com/kxikmatillayev_r/profilecard/?igsh=bDRrMzJzNzN0eHBn" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-instagram cursor-pointer hover:text-gren duration-200"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://t.me/Kxikmatillayev_R" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-telegram cursor-pointer hover:text-gren duration-200"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-github cursor-pointer hover:text-gren duration-200"></i>
                            </a>
                        </li>
                    </ul>
                </div>

                <img src={imgSrc} alt="My photo" className='hidden sm:flex w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] object-cover rounded-[50%]' />
            </div>
        </section>
    );
}

export default Hero;
