import React from "react";
import { CardList } from "./components";

function UserList({ name, user, isLoading }) {
  return (
    <CardList details={user} isLoading={isLoading}>
      {name}
    </CardList>
  );
}

export default UserList;
