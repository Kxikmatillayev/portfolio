// import React from 'react';
// import { useTranslation } from 'react-i18next';

// const Global = () => {
//     const { t } = useTranslation('global');

//     const globalleft = [
//         {
//             h1: t("d1parag1"),
//             p: t("d1parag2"),
//         },
//         {
//             h1: t("d2parag1"),
//             p: t("d2parag2"),
//         },
//     ];

//     const globalright = [
//         {
//             h2: t("d3parag1"),
//             p2: t("d3parag2"),
//         },
//         {
//             h2: t("d4parag1"),
//             p2: t("d4parag2"),
//         },
//     ];

//     return (
//         <section className='bg-oq dark:bg-dakr py-10'>
//             <section className='container flex flex-col justify-center items-center gap-10'>
//                 <div className='flex flex-col justify-center text-center items-center gap-2 text-qora dark:text-oq'>
//                     <h1 className='text-[30px] font-bold'>{t("h1")}</h1>
//                     <p>{t("span")}</p>
//                 </div>
//                 <section className='flex flex-col md:flex-row gap-10 justify-center items-center dark:text-oq'>
//                     <div className='flex flex-col gap-5 sm:gap-[100px] w-[350px]'>
//                         {globalleft.map(({ h1, p }, index) => (
//                             <div key={index} className='flex flex-col items-center md:items-end justify-center text-center md:justify-end md:text-end'>
//                                 <h1 className='text-[20px] font-bold text-gren'>{h1}</h1>
//                                 <div className='w-[300px]'>
//                                     <p className='text-[10px]'>{p}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                     <div className='border-4 border-white rounded-lg shadow-lg shadow-green'>
//                         <img className='w-[300px] border-4 border-amber-400 rounded-lg' src="https://my9-learning-center.vercel.app/Mamura_Yuldasheva.png" alt="Mamura Yuldasheva" />
//                     </div>
//                     <div className='flex flex-col gap-5 sm:gap-[100px] w-[350px]'>
//                         {globalright.map(({ h2, p2 }, index) => (
//                             <div key={index} className='flex flex-col items-center md:items-start text-center md:text-start'>
//                                 <h2 className='text-[20px] font-semibold text-gren'>{h2}</h2>
//                                 <div className='w-[300px]'>
//                                     <p className='text-[10px]'>{p2}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </section>
//             </section>
//         </section>
//     );
// };

// export default Global;
