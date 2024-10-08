import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import uzb from "/public/uzb.png";
import rus from "/public/rus.png";
import eng from "/public/eng.png";

function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem("language") || "en");
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        if (!localStorage.getItem("language")) {
            localStorage.setItem("language", "en");
        }
        i18n.changeLanguage(selectedLanguage);
    }, [selectedLanguage, i18n]);

    const handleLanguageChange = (lang) => {
        localStorage.setItem("language", lang);
        setSelectedLanguage(lang);
        setDropdownOpen(false); // dropdownni yopamiz
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div className="relative max-w-[200px] text-secondary">
            <div
                className="block w-full py-2 px-3 border border-gray-300 dark:border-gren bg-transparent dark:text-gren rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-colors duration-300 cursor-pointer"
                onClick={toggleDropdown}
            >
                <div className="flex items-center justify-between">
                    <span className="flex items-center">
                        {selectedLanguage === "uz" && (
                            <>
                                <img src={uzb} alt="O‘zbekcha" className="inline-block w-6 h-4 mr-2" />
                                O‘zbek
                            </>
                        )}
                        {selectedLanguage === "ru" && (
                            <>
                                <img src={rus} alt="Русский" className="inline-block w-6 h-4 mr-2" />
                                Русский
                            </>
                        )}
                        {selectedLanguage === "en" && (
                            <>
                                <img src={eng} alt="English" className="inline-block w-6 h-4 mr-2" />
                                English
                            </>
                        )}
                    </span>
                    <span>&#9662;</span> {/* Pastga qaragan o'qcha */}
                </div>
            </div>

            {dropdownOpen && (
                <div className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg">
                    <button
                        onClick={() => handleLanguageChange("uz")}
                        className={`flex items-center w-full py-2 px-3 hover:bg-gray-200 transition-colors duration-300 ${selectedLanguage === "uz" ? "bg-blue-500 text-white" : ""}`}
                    >
                        <img src={uzb} alt="O‘zbek" className="inline-block w-6 h-4 mr-2" />
                        O'zbek
                    </button>

                    <button
                        onClick={() => handleLanguageChange("ru")}
                        className={`flex items-center w-full py-2 px-3 hover:bg-gray-200 transition-colors duration-300 ${selectedLanguage === "ru" ? "bg-blue-500 text-white" : ""}`}
                    >
                        <img src={rus} alt="Русский" className="inline-block w-6 h-4 mr-2" />
                        Русский
                    </button>

                    <button
                        onClick={() => handleLanguageChange("en")}
                        className={`flex items-center w-full py-2 px-3 hover:bg-gray-200 transition-colors duration-300 ${selectedLanguage === "en" ? "bg-blue-500 text-white" : ""}`}
                    >
                        <img src={eng} alt="English" className="inline-block w-6 h-4 mr-2" />
                        English
                    </button>
                </div>
            )}
        </div>
    );
}

export default LanguageSwitcher;
