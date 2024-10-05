import React from 'react';
import { useTranslation } from 'react-i18next';
import Tajriba from './Tajriba';

const Resume = () => {
    const { t } = useTranslation("resumcrd");

    return (
        <>
            <section className='py-10 bg-oq dark:bg-dakr'>
                <section className='container flex flex-col justify-center items-center gap-10'>
                    <div className='w-full hidden sm:flex flex-col justify-start gap-2'>
                        <h1 className='text-3xl font-bold text-qora dark:text-oq underline'>{t("about")}</h1>
                        <h1 className='text-2xl font-semibold dark:text-oq'>
                            {t("span2")}
                        </h1>
                    </div>
                    <section className='hidden sm:flex flex-col lg:flex-row lg:justify-between justify-start items-center w-full gap-10'>
                        <div className='flex flex-row items-center gap-10 font-semibold dark:text-oq w-full lg:w-[40%]'>
                            <ul>
                                <li>{t("li1")}</li>
                                <li>{t("li2")}</li>
                                <li>{t("li3")}</li>
                                <li>{t("li4")}</li>
                                <li>Freelance:</li>
                            </ul>
                            <ul className='text-gray-700'>
                                <li className='cursor-pointer dark:hover:text-oq'>{t("ism")}</li>
                                <li className='cursor-pointer dark:hover:text-oq'>{t("familya")}</li>
                                <li className='cursor-pointer dark:hover:text-oq'>09.04.2008</li>
                                <li className='cursor-pointer dark:hover:text-oq'>{t('millat')}</li>
                                <li className='cursor-pointer dark:hover:text-oq'>{t("yoqlama")}</li>
                            </ul>
                        </div>
                        <div className='flex flex-row items-center gap-10 font-semibold dark:text-oq w-full lg:w-[40%]'>
                            <ul>
                                <li>{t('tel')}</li>
                                <li>{t('lac')}</li>
                                <li>{t('email')}</li>
                                <li>{t('til')}</li>
                                <li>Telegram:</li>
                            </ul>
                            <ul className='text-gray-700'>
                                <a href="tel:+998909041685"><li className='cursor-pointer dark:hover:text-oq'>+998 90 904 16 85</li></a>
                                <li className='cursor-pointer dark:hover:text-oq'>{t('eskiSHahar')}</li>
                                <a href="mailto:ximatillayevrixsitilla24@gmail.com"><li className='cursor-pointer dark:hover:text-oq text-wrap'>ximatillayevrixsitilla24@gmail.com</li></a>
                                <li className='cursor-pointer dark:hover:text-oq'>{t('local')}</li>
                                <li className='cursor-pointer dark:hover:text-oq'>Kxikmatillyev_</li>
                            </ul>
                        </div>
                    </section>
                    <Tajriba />
                    <div className='p-10 w-full dark:text-oq border border-qora dark:border-oq underline text-2xl sm:text-3xl sm:hidden'>
                        {t("men")}
                    </div>
                </section>
            </section>
        </>
    );
}

export default Resume;
