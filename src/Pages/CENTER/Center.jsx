import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import img1 from "/public/my9.png";
import img2 from "/public/pixer.png";
import img3 from "/public/covid19.png";

const projects = [
    {
        id: 1,
        title: 'MY9',
        img: img1,
        url: 'https://my-9.netlify.app/'
    },
    {
        id: 2,
        title: 'PIXER',
        img: img2,
        url: 'https://pixer-eosin-zeta.vercel.app/'
    },
    {
        id: 3,
        title: 'COVID19',
        img: img3,
        url: 'https://covid21-xi.vercel.app/'
    }
];

const Center = () => {
    const { t } = useTranslation("center");

    return (
        <>
            <section id='s2' className='dark:bg-dakr dark:text-oq py-10'>
                <section className='hidden sm:flex flex-col justify-center items-center text-center'>
                    <h1 className='text-3xl font-bold underline mb-10'>{t("tema")}</h1>
                    <div className='container flex flex-row gap-5 justify-center items-center text-center bg-gray-400 dark:bg-teal-700 w-[320px] sm:w-full rounded-lg p-10'>
                        {projects.map(project => (
                            <div key={project.id} className='w-[300px] sm:w-[450px] h-[220px] object-cover pb-[40px] bg-gren rounded-lg text-center cursor-pointer text-oq hover:scale-90 duration-300'>
                                {project.url ? (
                                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                                        <img className='w-[100%] h-[100%] rounded-lg cursor-pointer' src={project.img} alt={project.title} />
                                        <h1 className='py-[10px]'>{project.title}</h1>
                                    </a>
                                ) : (
                                    <>
                                        <img className='w-[100%] h-[100%] rounded-lg cursor-pointer' src={project.img} alt={project.title} />
                                        <h1 className='py-[10px]'>{project.title}</h1>
                                    </>
                                )}
                            </div>
                        ))}
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
    );
}

export default Center;
