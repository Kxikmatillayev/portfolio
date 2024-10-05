import React from 'react'
import { useTranslation } from 'react-i18next';
import Backbutton from '../utils/Backbutton';

const Tajriba2 = () => {
    const { t } = useTranslation("tajriba");

    return (
        <div className='flex flex-col justify-center items-center'>
            <section className='flex flex-col items-center text-qora dark:text-oq border border-qora dark:border-oq w-full'>
                <div className='py-5 border border-qora dark:border-oq w-full text-center'>
                    <h1 className='text-gren'>{t('span1')}</h1>
                </div>
                <div className='w-full p-10 border border-qora dark:border-oq flex flex-col gap-3'>
                    <h1 className='text-3xl font-bold'>CoddyCamp IT Academy</h1>
                    <span className='text-xl'>{t('parag')}</span>
                    <h2>{t("paragg")}</h2>
                </div>
            </section>
            <Backbutton/>
        </div>
    )
}

export default Tajriba2
