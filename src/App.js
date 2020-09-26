import React from "react";
import { useRecoilValueLoadable } from "recoil";

import { Card, CardList } from "./components";
import { userNames } from "./state/userNames";
import { userDetails } from "./state/userDetails";

function App() {
  const userNamesLoadable = useRecoilValueLoadable(userNames);
  const userDetailsLoadable = useRecoilValueLoadable(userDetails);

  return (
    <Card isLoading={userNamesLoadable.state === "loading"}>
      {userDetailsLoadable.state === "hasValue" &&
        userDetailsLoadable.contents.map(({ state, contents }, i) => (
          <CardList
            key={i}
            isLoading={state === "loading"}
            details={state === "loading" ? null : contents}
          >
            {`${i + 1}. ${userNamesLoadable.contents[i].name}`}
          </CardList>
        ))}
    </Card>
  );
}

export default App;
