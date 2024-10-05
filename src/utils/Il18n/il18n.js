
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
import enCenter from "./en/center";
import ruCenter from "./ru/center";
import uzCenter from "./uz/center";
import ezBtn from "./en/btn";
import ruBtn from "./ru/btn";
import uzBtn from "./uz/btn";
import enEnd from "./en/end";
import ruEnd from "./ru/end";
import uzEnd from "./uz/end";


const resources = {
    en: {
        layout: enLayout,
        hero: enHero,
        resumcrd: enResumcrd,
        global: enGlobal,
        tajriba: enTajriba,
        center: enCenter,
        btn: ezBtn,
        end: enEnd,
    },
    ru: {
        layout: ruLayout,
        hero: ruHero,
        resumcrd: ruResumcrd,
        global: ruGlobal,
        tajriba: ruTajriba,
        center: ruCenter,
        btn: ruBtn,
        end: ruEnd,
    },
    uz: {
        layout: uzLayout,
        hero: uzHero,
        resumcrd: uzResumcrd,
        global: uzGlobal,
        tajriba: uzTajriba,
        center: uzCenter,
        btn: uzBtn,
        end: uzEnd,
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
