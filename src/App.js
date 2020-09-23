import React from "react";
import { useRecoilValueLoadable } from "recoil";

import { Card } from "./components";
import { userNames } from "./state/userNames";
import { userDetails } from "./state/userDetails";

import UserList from "./UserList";

function App() {
  const { state: userNamesLoadableState } = useRecoilValueLoadable(userNames);

  const {
    state: userDetailsLoadableState,
    contents: userDetailsList = [{}],
  } = useRecoilValueLoadable(userDetails);

  console.log({ userDetailsList, userDetailsLoadableState });
  // initial fetch for user names
  const isLoadingUserNames = userNamesLoadableState === "loading";

  // user details
  const hasUserDetails = userDetailsLoadableState === "hasValue";

  return (
    <Card isLoading={isLoadingUserNames}>
      {hasUserDetails &&
        userDetailsList.map((user) => <UserList key={user.id} user={user} />)}
    </Card>
  );
}

export default App;
