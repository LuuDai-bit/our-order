import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

const User = ({ user, t }) => {
  const match = useRouteMatch();
  return (
    <tr>
      <th scope="row">{user.id}</th>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.birthday}</td>
      <td>{user.phone_number}</td>
      <td>{user.role_id}</td>
      <td>
        <Link
          to={{ pathname: `${match.url}/${user.id}`, state: { user: user } }}
          class="btn btn-secondary"
        >
          {t("button.detail")}
        </Link>
      </td>
    </tr>
  );
};

export default User;
