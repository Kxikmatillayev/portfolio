import React from 'react'
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';


const Backbutton = () => {
    const { t } = useTranslation("btn");

    return (
        <NavLink to={"/"}>
            <button className='text-[20px] border border-qora dark:text-oq dark:border-gren px-5 py-2 mt-5'>
                {t("btntext")}
            </button>
        </NavLink>
    )
}

export default Backbutton
