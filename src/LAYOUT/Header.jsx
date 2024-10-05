import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../utils/SwitcherLanguage';
import useStore from '../utils/zustand';
import { DrawerDefault } from '../utils/Drawer';
import Phone from '../utils/Phone';

const Header = () => {
    const { theme, toggleTheme } = useStore();
    const { t } = useTranslation("layout");

    return (
        <header className='bg-oq dark:bg-dakr py-[20px] font-exo sticky top-0 shadow-md shadow-dakr dark:shadow-oq z-20'>
            <div className='px-[20px] sm:container flex flex-row items-center justify-between'>
                <div>
                    <h1 className='text-4xl text-dakr dark:text-oq'>{t("Nik")}</h1>
                </div>

                <ul className='lg:flex hidden flex-row items-center gap-[30px] text-lg dark:text-oq text-qora'>
                    <li className='cursor-pointer hover:text-gren duration-300'>{t("Teacher")}</li>
                    <li className='cursor-pointer hover:text-gren duration-300'>{t("Courses")}</li>
                    <li className='cursor-pointer hover:text-gren duration-300'>{t("Result")}</li>
                </ul>

                <div className='flex flex-row items-center gap-[5px] sm:gap-[20px]'>
                    <button onClick={toggleTheme} className='sm:flex hidden'>
                        <img
                            src={theme === 'light' ? '/moon.png' : '/sun.png'}
                            alt={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
                            width={25}
                        />
                    </button>
                    <LanguageSwitcher />
                    <a href="tel:+998909041685"><Phone /></a>
                    <DrawerDefault />
                </div>
            </div>
        </header>
    );
}

export default Header;
