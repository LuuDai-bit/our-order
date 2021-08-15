import React from "react";
import { useTranslation } from "react-i18next";

const Home = () => {
  const [t, i18n] = useTranslation("home");
  return (
    <>
      <h2>{t("title")}</h2>
    </>
  );
};

export default Home;
