import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

const url = "/users/";
const UserDetail = () => {
  const [t, i18n] = useTranslation("users");
  const { id } = useParams();
  const [user, setUser] = useState({});
  const getUser = async () => {
    const response = await fetch(url + id);
    const user = await response.json();
    setUser(user);
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      <h2>{t("title")}</h2>
      <label>{t("fields.name")}</label>
      <p>{user.name}</p>
      <label>{t("fields.email")}</label>
      <p>{user.name}</p>
      <label>{t("fields.birthday")}</label>
      <p>{user.birthday}</p>
      <label>{t("fields.phone_number")}</label>
      <p>{user.phone_number}</p>
      <label>{t("fields.role")}</label>
      <p>{user.role}</p>
    </>
  );
};

export default UserDetail;
