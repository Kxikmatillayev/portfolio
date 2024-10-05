    import React from 'react'
    import { useTranslation } from 'react-i18next';
    import img from "/public/me.dev.jpg"

    const Hero = () => {
        const { t } = useTranslation("hero");
        return (
            <section className='bg-oq dark:bg-dakr py-[50px]'>
                <div className='container flex lg:flex-row  flex-col-reverse items-center justify-between gap-4'>
                    <div className='flex flex-col lg:items-start items-center lg:text-start text-center gap-[20px] sm:w-[50%]'>
                        <h1 className='text-qora dark:text-oq sm:text-5xl text-3xl font-bold'>{t("English")}</h1>
                        <img src={img} alt="" className='flex sm:hidden w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] object-cover rounded-[50%]' />
                        <span className='sm:text-xl text-lg text-gren cursor-pointer'>{t("Teach")}</span>
                        <ul className='flex flex-row sm:justify-start justify-center items-center text-qora dark:text-oq gap-3 text-2xl sm:text-4xl'>
                            <li><i className="fa-brands fa-instagram cursor-pointer hover:text-gren duration-200"></i></li>
                            <li><i className="fa-brands fa-telegram cursor-pointer hover:text-gren duration-200"></i></li>
                            <li><i className="fa-brands fa-github cursor-pointer hover:text-gren duration-200"></i></li>
                        </ul>
                    </div>

                    <img src={img} alt="" className='hidden sm:flex w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] object-cover rounded-[50%]' />
                </div>
            </section>
        )
    }

    export default Hero