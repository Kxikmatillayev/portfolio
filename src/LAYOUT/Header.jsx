import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../utils/SwitcherLanguage';
import useStore from '../utils/zustand';
import Phone from '../utils/Phone';

const Header = () => {
    const { theme, toggleTheme } = useStore();
    const { t } = useTranslation("layout");
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`bg-oq dark:bg-dakr py-4 font-exo sticky top-0 z-20 transition-shadow duration-300 shadow-gren ${isScrolled ? 'shadow-md' : ''}`}>
            <div className='px-4 sm:container mx-auto flex flex-row items-center justify-between'>
                <ul className='lg:flex hidden flex-row items-center gap-8 text-lg dark:text-oq text-qora'>
                    <li className='relative group cursor-pointer hover:text-gren duration-300'>
                        <a href="#s1">{t("Teacher")}</a>
                        <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-gren scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                    </li>
                    <li className='relative group cursor-pointer hover:text-gren duration-300'>
                        <a href="#s2">{t("Courses")}</a>
                        <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-gren scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                    </li>
                    <li className='relative group cursor-pointer hover:text-gren duration-300'>
                        <a href="#s3">{t("Result")}</a>
                        <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-gren scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                    </li>
                </ul>


                <div className='flex flex-row items-center gap-2 sm:gap-5'>
                    <button onClick={toggleTheme} className='m-2'>
                        <img
                            className='w-[35px]'
                            src={theme === 'light' ? '/moon.png' : '/sun.png'}
                            alt={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
                            width={25}
                        />
                    </button>
                    <LanguageSwitcher />
                    <a href="tel:+998909041685"><Phone /></a>
                </div>
            </div>
        </header>
    );
}

export default Header;
