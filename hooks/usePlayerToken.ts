import Cookies from "js-cookie";

export const usePlayerToken = () => {
  const playerToken = Cookies.get("_token");
  const setPlayerToken = (token: string) =>
    Cookies.set("_token", token, { expires: 1 });

  return {
    playerToken: playerToken,
    setPlayerToken: setPlayerToken,
  };
};
