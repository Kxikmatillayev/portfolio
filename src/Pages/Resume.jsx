import React from 'react'
import Tajriba from './Tajriba'

const Resume = () => {
    return (
        <>
            <section className='py-10 bg-oq dark:bg-dakr'>
                <section className='container flex flex-col justify-center items-center gap-10'>
                    <div className='w-full hidden sm:flex flex-col justify-start gap-2'>
                        <h1 className='text-3xl font-bold text-qora dark:text-oq underline'>Men haqimda</h1>
                        <h1 className='text-2xl font-semibold dark:text-oq'>Men Toshkent shahrida front-end dasturlashni bir yil o‘rganib, HTML, CSS, JavaScript bo‘yicha tajribaga ega bo‘ldim.</h1>
                    </div>
                    <section className='hidden sm:flex flex-col lg:flex-row lg:justify-between justify-start items-center w-full gap-10'>
                        <div className='flex flex-row  items-center gap-10 font-semibold dark:text-oq w-full lg:w-[40%]'>
                            <ul>
                                <li>ISM:</li>
                                <li>FAMILIYA:</li>
                                <li>Tug'ilgan kun:</li>
                                <li>Millati:</li>
                                <li>Freelance:</li>
                            </ul>
                            <ul className='text-gray-700'>
                                <li className='cursor-pointer dark:hover:text-oq'>Rixsitilla</li>
                                <li className='cursor-pointer dark:hover:text-oq'>Xikmatillayev</li>
                                <li className='cursor-pointer dark:hover:text-oq'>09.04.2008</li>
                                <li className='cursor-pointer dark:hover:text-oq'>O'zbek</li>
                                <li className='cursor-pointer dark:hover:text-oq'>Hozrcha yo'q</li>
                            </ul>
                        </div>
                        <div className='flex flex-row items-center gap-10 font-semibold dark:text-oq w-full lg:w-[40%]'>
                            <ul>
                                <li>Telefon Raqam:</li>
                                <li>Manzil:</li>
                                <li>Email:</li>
                                <li>Tillar:</li>
                                <li>Telegram:</li>
                            </ul>
                            <ul className='text-gray-700'>
                                <a href=""><li className='cursor-pointer dark:hover:text-oq'>+998 90 904 16 85</li></a>
                                <li className='cursor-pointer dark:hover:text-oq'>O'zbekiston, Toshkent</li>
                                <a href=""><li className='cursor-pointer dark:hover:text-oq'>ximatillayevrixsitilla24@gmail.com</li></a>
                                <li className='cursor-pointer dark:hover:text-oq'>O'zbek</li>
                                <li className='cursor-pointer dark:hover:text-oq'>Hozrcha yo'q</li>
                            </ul>
                        </div>
                    </section>
                    <Tajriba /> 
                    <div className='p-10 w-full dark:text-oq border border-qora dark:border-oq underline text-2xl sm:text-3xl sm:hidden'>Men haqimda</div>
                </section>
            </section>
        </>
    )
}

export default Resume
