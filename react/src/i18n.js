import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en/translation.json';
import ukTranslation from './locales/uk/translation.json';

i18n.use(initReactI18next) // для реакт-привязки
    .init({
        resources: {
            en: {
                translation: enTranslation,
            },
            uk: {
                translation: ukTranslation,
            },
        },
        lng: 'uk', // язык по умолчанию
        fallbackLng: 'uk', // язык по умолчанию на случай отсутствия перевода
        interpolation: {
            escapeValue: false, // необходимо для обработки HTML-тегов в переводах
        },
    });

export default i18n;
