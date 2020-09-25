import React from "react";
import { CardList } from "./components";

const UserList = ({ name, user, isLoading }) => (
  <CardList details={user} isLoading={isLoading}>
    {name}
  </CardList>
);

export default UserList;
