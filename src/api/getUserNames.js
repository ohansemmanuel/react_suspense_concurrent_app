import { URL } from "./url";

export const getUserNames = async () =>
  await fetch(`${URL}users`).then((res) => res.json());
