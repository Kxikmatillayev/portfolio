import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import img1 from "/public/my9.png"
import img2 from "/public/pixer.png"
import img3 from "/public/covid19.png"

const Center = () => {

    const { t } = useTranslation("center");

    return (
        <>
            <section id='s2' className='dark:bg-dakr dark:text-oq py-10'>
                <section className='hidden sm:flex flex-col justify-center items-center text-center'>
                    <h1 className='text-3xl font-bold underline mb-10'>{t("tema")}</h1>
                    <div className='container flex flex-row gap-5 justify-center items-center text-center bg-gray-400 dark:bg-teal-700 w-[320px] sm:w-full rounded-lg p-10'>
                        <div className='w-[300px] sm:w-[450px] h-[220px] object-cover pb-[40px] bg-gren rounded-lg text-center cursor-pointer text-oq hover:scale-90 duration-300'>
                            <img className='w-[100%] h-[100%] rounded-lg cursor-pointer' src={img1} alt="" />
                            <h1 className='py-[10px]'>MY9</h1>
                        </div>
                        <div className='w-[300px] sm:w-[450px] h-[220px] object-cover pb-[40px] bg-gren rounded-lg text-center cursor-pointer text-oq hover:scale-90 duration-300'>
                            <img className='w-[100%] h-[100%] rounded-lg cursor-pointer' src={img2} alt="" />
                            <h1 className='py-[10px]'>PIXER</h1>
                        </div>
                        <div className='w-[300px] sm:w-[450px] h-[220px] object-cover pb-[40px] bg-gren rounded-lg text-center cursor-pointer text-oq hover:scale-90 duration-300'>
                            <img className='w-[100%] h-[100%] rounded-lg cursor-pointer' src={img3} alt="" />
                            <h1 className='py-[10px]'>COVID19</h1>
                        </div>
                    </div>
                </section>
                <NavLink to={"/center"}>
                    <div className='container'>
                        <div className='sm:hidden flex items-center justify-center border-2 border-qora dark:border-oq container h-[200px] text-center'>
                            <h1 className='text-2xl underline'>{t("tema")}</h1>
                        </div>
                    </div>
                </NavLink>
            </section>
        </>
    )
}

export default Center;
