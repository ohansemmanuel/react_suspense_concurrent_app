import React from "react";
// import { useRecoilValueLoadable } from "recoil";
// import { userDetails } from "./state/userDetails";
import { CardList } from "./components";

function UserList({ user }) {
  return <CardList>{user.name}</CardList>;
}

export default UserList;
