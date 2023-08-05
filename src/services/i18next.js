import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../locales/en.json"
import tr from "../locales/tr.json"
import LANGUAGES from "./languageList.json"
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNLocalize from 'react-native-localize';


export const languageResources = {
    en: {translation: en},
    tr: {translation: tr},
}


const LANG_CODES = Object.keys(LANGUAGES);

LANGUAGE_DETECTOR = {
  type: 'languageDetector',
  async: true,
  detect: callback => {
    AsyncStorage.getItem('user-language', (err, language) => {
      // if error fetching stored data or no language was stored
      // display errors when in DEV mode as console statements
      if (err || !language) {
        if (err) {
          console.log('Error fetching Languages from asyncstorage ', err);
        } else {
          console.log('No language is set, choosing English as fallback');
        }
        // bu kod sanırım telenfonun diline göre ayarlama yapıyo 
        //ama ilk açılışta RNLocalize.findBestAvailableLanguage(LANG_CODES) hata verdiği için sildik
          const findBestAvailableLanguage = null 
         //  RNLocalize.findBestAvailableLanguage(LANG_CODES) ? RNLocalize.findBestAvailableLanguage(LANG_CODES) : 'en';

         callback(findBestAvailableLanguage? findBestAvailableLanguage.languageTag : 'en'); 

     //   callback('en');
        return;
      }
      callback(language);
    });
  },
  init: () => {},
  cacheUserLanguage: language => {
    AsyncStorage.setItem('user-language', language);
  }
};

i18next.use(LANGUAGE_DETECTOR)
.use(initReactI18next).init({
    compatibilityJSON:'v3',
    resources: languageResources,
    fallbackLng:'en',
    react: {
        useSuspense: false
      },
      interpolation: {
        escapeValue: false
      },
      

})

export default i18next