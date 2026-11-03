import type { PlayerScore } from "../models/PlayerScore.ts";

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

export interface RoundCompletedEvent {
  type: "RoundCompleted";
  playerScores: PlayerScore[];
}

export interface PlayerSubmitEvent {
  type: "PlayerSubmit";
  playerId: string;
}

export type WebPubSubHandlers = {
  onPlayerJoined?: (event: PlayerJoinedEvent) => void;
  onGameStarted?: (event: SessionStartedEvent) => void;
  onRoundCompleted?: (event: RoundCompletedEvent) => void;
  onPlayerSubmit?: (event: PlayerSubmitEvent) => void;
};
