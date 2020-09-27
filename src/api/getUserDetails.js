/**
 * @param {string} id
 * @returns {promise} {
    name: string,
    bio: string,
    likes: string,
    location: string,
    profilePic: string,
    friends: string[],
  }
 */
export const getUserDetails = async (id) =>
  await fetch(`/users/${id}`).then((res) => res.json());
