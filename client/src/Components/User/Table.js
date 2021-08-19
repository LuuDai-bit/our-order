import React, { useState, useEffect } from "react";
import User from "./User";

const url = "/users";
const Table = ({ t }) => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
    setLoading(false);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">{t("fields.name")}</th>
              <th scope="col">{t("fields.email")}</th>
              <th scope="col">{t("fields.birthday")}</th>
              <th scope="col">{t("fields.phone_number")}</th>
              <th scope="col">{t("fields.role")}</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return <User user={user} t={t} />;
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
