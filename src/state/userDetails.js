import { selector, selectorFamily, waitForAll } from "recoil";
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
    const userDetailsList = get(
      waitForAll(userList.map(({ id }) => userDetailQuery(id)))
    );
    return userDetailsList;
  },
});
