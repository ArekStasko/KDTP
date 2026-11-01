import Cookies from "universal-cookie";

export const savePlayerId = (playerId: string) => {
  const cookies = new Cookies();
  cookies.set("playerId", playerId);
};

export const getPlayerId = (): string => {
  const cookies = new Cookies();
  return cookies.get("playerId");
};
