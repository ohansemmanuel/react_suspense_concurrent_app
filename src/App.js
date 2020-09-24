import React from "react";
import { useRecoilValueLoadable } from "recoil";

import { Card } from "./components";
import { userNames } from "./state/userNames";
import { userDetails } from "./state/userDetails";

import UserList from "./UserList";

function App() {
  const {
    contents: userNameList,
    state: userNamesLoadableState,
  } = useRecoilValueLoadable(userNames);

  const {
    state: userDetailsQueryState,
    contents: userDetailsLoadable,
  } = useRecoilValueLoadable(userDetails);

  // initial fetch for user names
  const isLoadingUserNames = userNamesLoadableState === "loading";
  // loadable ready?
  const loadableReady = userDetailsQueryState === "hasValue";

  return (
    <Card isLoading={isLoadingUserNames}>
      {loadableReady &&
        userDetailsLoadable.map(({ state, contents }, index) => (
          <UserList
            key={index}
            isLoading={state === "loading"}
            user={state === "loading" ? null : contents}
            name={userNameList[index].name}
          />
        ))}
    </Card>
  );
}

export default App;
