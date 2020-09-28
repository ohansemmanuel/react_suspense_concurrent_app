import { selector, selectorFamily, waitForNone } from "recoil";
import { userNames } from "./userNames";
import { getUserDetails } from "../api/getUserDetails";

const userDetailQuery = selectorFamily({
  key: "userDetailQuery",
  get: (id) => async () => await getUserDetails(id),
});

export const userDetails = selector({
  key: "userDetails",
  get: ({ get }) => {
    const userList = get(userNames);
    return get(waitForNone(userList.map(({ id }) => userDetailQuery(id))));
  },
});
