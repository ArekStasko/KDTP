export interface PlayerJoinedEvent {
  type: "PlayerJoined";
  player: {
    id: string;
    username: string;
    role: string;
  };
}
