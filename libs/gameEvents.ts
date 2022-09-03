import { hop } from "./hop";

export interface GameEvents {
  PLAYER_JOIN: { name: string; color: string };
}

export const publish = <E extends keyof GameEvents>(
  channel: string,
  event: E,
  payload: GameEvents[E]
) => {
  return hop.channels.publishMessage(channel, event, payload);
};
