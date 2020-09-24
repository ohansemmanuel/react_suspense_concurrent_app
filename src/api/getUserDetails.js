import { URL } from "./url";

/**
 * @param {string} id
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
