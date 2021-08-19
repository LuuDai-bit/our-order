import React from "react";
import { useTranslation } from "react-i18next";
import Button from "../Components/User/Button";
import Table from "../Components/User/Table";

const Users = () => {
  const [t, i18n] = useTranslation("users");
  return (
    <>
      <h2>{t("title")}</h2>
      <Button />
      <Table t={t} />
    </>
  );
};

export default Users;
