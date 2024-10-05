
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enLayout from "./en/layout";
import ruLayout from "./ru/layout";
import uzLayout from "./uz/layout";
import enHero from "./en/hero";
import ruHero from "./ru/hero";
import uzHero from "./uz/hero";
import enResumcrd from "./en/resumcrd";
import ruResumcrd from "./ru/resumcrd";
import uzResumcrd from "./uz/resumcrd";
import enGlobal from "./en/global";
import ruGlobal from "./ru/global";
import uzGlobal from "./uz/global";
import enTajriba from "./en/tajriba";
import ruTajriba from "./ru/tajriba";
import uzTajriba from "./uz/tajriba";





const resources = {
    en: {
        layout: enLayout,
        hero: enHero,
        resumcrd: enResumcrd,
        global: enGlobal,
        tajriba: enTajriba
    },
    ru: {
        layout: ruLayout,
        hero: ruHero,
        resumcrd: ruResumcrd,
        global: ruGlobal,
        tajriba: ruTajriba
    },
    uz: {
        layout: uzLayout,
        hero: uzHero,
        resumcrd: uzResumcrd,
        global: uzGlobal,
        tajriba: uzTajriba
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
