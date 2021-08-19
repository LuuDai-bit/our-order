import React from "react";
import { useTranslation } from "react-i18next";
import Button from "../Components/User/Button";
import Table from "../Components/User/Table";
import "../scss/users/users.scss";

const Users = () => {
  const [t, i18n] = useTranslation("users");
  return (
    <div className="custom-container">
      <h2>{t("title")}</h2>
      <Button />
      <Table t={t} />
    </div>
  );
};

export default Users;
