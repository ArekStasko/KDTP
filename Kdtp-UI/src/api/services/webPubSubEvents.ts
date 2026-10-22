export interface PlayerJoinedEvent {
  type: "PlayerJoined";
  player: {
    id: string;
    username: string;
    role: number;
  };
}

export interface SessionStartedEvent {
  type: "GameStarted";
  sessionId: string;
}

export type WebPubSubHandlers = {
  onPlayerJoined?: (event: PlayerJoinedEvent) => void;
  onGameStarted?: (event: SessionStartedEvent) => void;
};