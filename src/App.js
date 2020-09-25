import React from "react";
import { useRecoilValueLoadable } from "recoil";

import { Card } from "./components";
import { userNames } from "./state/userNames";
import { userDetails } from "./state/userDetails";

import UserList from "./UserList";

function App() {
  const userNamesLoadable = useRecoilValueLoadable(userNames);
  const userDetailsLoadable = useRecoilValueLoadable(userDetails);

  return (
    <Card isLoading={userNamesLoadable.state === "loading"}>
      {userDetailsLoadable.state === "hasValue" &&
        userDetailsLoadable.contents.map(({ state, contents }, i) => (
          <UserList
            key={i}
            isLoading={state === "loading"}
            user={state === "loading" ? null : contents}
            name={`${i + 1}. ${userNamesLoadable.contents[i].name}`}
          />
        ))}
    </Card>
  );
}

export default App;
