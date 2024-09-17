import React from 'react'
import { useTranslation } from 'react-i18next';

const Hero = () => {
    const { t } = useTranslation("hero");
    return (
        <section className='bg-oq dark:bg-dakr py-[50px]'>
            <div className='container  flex lg:flex-row  flex-col items-center justify-between'>
                <div className='flex flex-col lg:items-start items-center lg:text-start text-center gap-[20px]'>
                    <h1 className='text-qora dark:text-oq sm:text-5xl text-3xl font-bold'>{t("English")}</h1>
                    <span className='sm:text-xl text-lg text-gren cursor-pointer'>{t("Teach")}</span>
                    <ul className='flex flex-row sm:justify-start justify-center items-center text-qora dark:text-oq gap-3 text-2xl sm:text-4xl'>
                        <li><i className="fa-brands fa-instagram cursor-pointer hover:text-gren duration-200"></i></li>
                        <li><i className="fa-brands fa-telegram cursor-pointer hover:text-gren duration-200"></i></li>
                        <li><i className="fa-brands fa-github cursor-pointer hover:text-gren duration-200"></i></li>
                    </ul>
                </div>

                <img src="" alt="" className='lg:w-[50%] w-[100%]'/>
            </div>
        </section>
    )
}

export default Hero