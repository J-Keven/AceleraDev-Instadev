import React, { useState, useEffect } from "react";

import UsersList from "../../containers/UsersList/UsersList";
import Loading from "../../components/Loading";

const UsersRoute = () => {
  const [users, setUsers] = useState([]);

  async function handleLoadUsers() {
    fetch(
      "https://5e7d0266a917d70016684219.mockapi.io/api/v1/users"
    ).then((res) => res.json().then((data) => setUsers(data)));
  }

  useEffect(() => {
    handleLoadUsers();
  }, []);

  return (
    <div className="container" data-testid="users-route">
      {users.length > 0 ? <UsersList users={users} /> : <Loading />}
    </div>
  );
};

export default UsersRoute;
