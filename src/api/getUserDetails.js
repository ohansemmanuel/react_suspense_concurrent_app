import { URL } from "./url";

/**
 * @param id string
 * @returns Promise<{
    name: string,
    bio:
      string,
    likes: string,
    location: string,
    profilePic: string,
    friends: string[],
  }>
 */
export const getUserDetails = async (id) =>
  await fetch(`${URL}${id}`).then((res) => res.json());
