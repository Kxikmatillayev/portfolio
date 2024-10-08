import React from 'react';
import { useTranslation } from 'react-i18next';
import Backbutton from '../../utils/Backbutton';
import img1 from "/public/my9.png";
import img2 from "/public/pixer.png";
import img3 from "/public/covid19.png";

const projects = [
    {
        id: 1,
        title: 'MY9',
        img: img1,
        url: 'https://my-9.netlify.app/',
    },
    {
        id: 2,
        title: 'PIXER',
        img: img2,
        url: 'https://pixer-eosin-zeta.vercel.app/',
    },
    {
        id: 3,
        title: 'COVID19',
        img: img3,
        url: 'https://covid21-xi.vercel.app/',
    },
];

const Center2 = () => {
    const { t } = useTranslation("center");

    return (
        <>
            <section className='flex flex-col items-center dark:bg-dakr dark:text-oq py-10'>
                <section className='flex flex-col justify-center items-center text-center border-none'>
                    <h1 className='text-3xl font-bold underline'>{t("tema")}</h1>
                    <div className='my-[20px] container flex flex-row flex-wrap justify-center items-center text-center bg-gray-400 dark:bg-teal-700 w-[320px] sm:w-full rounded-lg p-10 gap-4'>
                        {projects.map(project => (
                            <div key={project.id} className='w-[300px] sm:w-[450px] h-[200px] object-cover pb-[40px] bg-gren rounded-lg text-center'>
                                <a href={project.url} target="_blank" rel="noopener noreferrer">
                                    <img className='w-[100%] h-[100%] rounded-lg cursor-pointer object-cover' src={project.img} alt={project.title} />
                                    <h1 className='py-[10px]'>{project.title}</h1>
                                </a>
                            </div>
                        ))}
                    </div>
                </section>
                <Backbutton />
            </section>
        </>
    );
}

export default Center2;
