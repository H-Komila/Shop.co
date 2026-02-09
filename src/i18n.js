
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import uzTranslation from "../public/Locols/uz.json";
import ruTranslation from "../public/Locols/ru.json";
import enTranslation from "../public/Locols/en.json";

i18n

.use(initReactI18next)
.init({
    resources:{
        uz: {translation: uzTranslation},
        ru: {translation: ruTranslation},
        en: {translation: enTranslation},
    },
    lng: "en",
    fallbackLng: "uz",
    debug: true,
    interpolition:{
        escapeValue: false,
    },
})

export default i18n;
