import { selector, selectorFamily, waitForNone } from "recoil";
import { userNames } from "./userNames";
import { getUserDetails } from "../api/getUserDetails";

const userDetailQuery = selectorFamily({
  key: "userDetailQuery",
  get: (id) => async ({ get }) => await getUserDetails(id),
});

/**
 *  @returns Array<{id: string, name: string}>
 */
export const userDetails = selector({
  key: "userDetails",
  get: ({ get }) => {
    const userList = get(userNames);
    const userDetailsListLoadable = get(
      waitForNone(userList.map(({ id }) => userDetailQuery(id)))
    );
    return userDetailsListLoadable;
  },
});
