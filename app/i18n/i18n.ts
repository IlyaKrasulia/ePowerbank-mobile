import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './en';
import uk from './uk';

const languages = [
  {
    value: 'uk',
    name: 'Українська',
  },
  {
    value: 'en',
    name: 'English',
  },
];

const resources = {
  en: {
    translation: en,
  },
  uk: {
    translation: uk,
  },
};

i18n.use(initReactI18next).init({
  resources,
  compatibilityJSON: 'v3',
  fallbackLng: 'uk',
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
