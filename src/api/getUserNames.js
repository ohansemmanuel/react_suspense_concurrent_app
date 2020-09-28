/**
 * @returns {promise} {
    id: string,
    name: string,
  }
 */
export const getUserNames = async () =>
  await fetch("/users").then((res) => res.json());
