import { selector } from "recoil";
import { getUserNames } from "../api/getUserNames";

export const userNames = selector({
  key: "userNames",
  get: async () => await getUserNames(),
});
