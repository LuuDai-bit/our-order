import React from "react";
import { useTranslation } from "react-i18next";

const User = () => {
  const [t, i18n] = useTranslation("users");
  return (
    <>
      <h2>{t("title")}</h2>
    </>
  );
};

export default User;
