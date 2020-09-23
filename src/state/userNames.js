import { selector } from "recoil";
import { getUserNames } from "../api/getUserNames";

/**
 *  Array<{id: string, name: string}>
 */
export const userNames = selector({
  key: "userNames",
  get: async () => await getUserNames(),
});
