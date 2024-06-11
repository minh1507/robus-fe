import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      validation: {
        required: '{{object}} is required'
      },
      label: {
        username: 'username',
        password: 'password',
        name: 'name'
      },
      mix: {
        login: 'login {{object}}',
        logout: 'logout {{object}}'
      },
      message: {
        success: 'successfully'
      },
      main: 'Trade and exchange food',
      title: {
        home: 'home',
        login: 'login',
        account: 'account',
        role: 'role',
        setting: 'setting'
      },
    }
  },
  fr: {
    translation: {
    }
  }
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: "en", 

    interpolation: {
      escapeValue: false 
    }
  });

  export default i18n;