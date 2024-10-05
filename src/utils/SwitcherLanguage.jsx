import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem("language") || "en");

    useEffect(() => {
        if (!localStorage.getItem("language")) {
            localStorage.setItem("language", "en");
        }
        i18n.changeLanguage(selectedLanguage); // Har safar selectedLanguage o'zgarganda, i18n yangilanadi
    }, [selectedLanguage, i18n]);

    const handleLanguageChange = (event) => {
        const newLang = event.target.value;
        localStorage.setItem("language", newLang);
        setSelectedLanguage(newLang); // state ni yangilaymiz
    };

    return (
        <div className="relative max-w-[120px] text-secondary">
            <select
                value={selectedLanguage}
                onChange={handleLanguageChange}
                className="block w-full py-2 px-3 border border-gray-300 dark:border-gren bg-transparent dark:text-gren rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-colors duration-300"
            >
                <option value="uz">O‘zbekcha</option>
                <option value="ru">Русский</option>
                <option value="en">English</option>
            </select>
        </div>
    );
}

export default LanguageSwitcher;
