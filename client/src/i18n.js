import i18next from "i18next";

import home_en from "./translations/en/home.json";
import home_vi from "./translations/vi/home.json";
import users_en from "./translations/en/users.json";
import users_vi from "./translations/vi/users.json";

const resources = {
  en: {
    home: home_en,
    users: users_en,
  },
  vi: {
    home: home_vi,
    users: users_vi,
  },
};

i18next.init({
  resources,
  lng: "vi",

  keySeparator: false,

  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
