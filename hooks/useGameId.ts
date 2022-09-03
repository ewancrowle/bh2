import Cookies from "js-cookie";

export const useGameId = () => {
  const gameId = Cookies.get("_gid");
  const setGameId = (token: string) => Cookies.set("_gid", token);

  return {
    gameId: gameId,
    setGameId: setGameId,
  };
};
