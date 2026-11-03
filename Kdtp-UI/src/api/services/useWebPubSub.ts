import { useEffect } from "react";
import { webPubSubClient } from "./WebPubSubClient.ts";
import type {
  PlayerJoinedEvent,
  PlayerSubmitEvent,
  RoundCompletedEvent,
  SessionStartedEvent,
  WebPubSubHandlers,
} from "./webPubSubEvents.ts";

export function useWebPubSub({
  onPlayerJoined,
  onGameStarted,
  onRoundCompleted,
  onPlayerSubmit,
}: WebPubSubHandlers) {
  useEffect(() => {
    const handleServerMessage = (event: any) => {
      const message = event.message?.data;

      try {
        const parsed =
          typeof message === "string" ? JSON.parse(message) : message;

        switch (parsed?.type) {
          case "PlayerJoined":
            onPlayerJoined?.(parsed as PlayerJoinedEvent);
            break;

          case "GameStarted":
            onGameStarted?.(parsed as SessionStartedEvent);
            break;

          case "RoundCompleted":
            onRoundCompleted?.(parsed as RoundCompletedEvent);
            break;

          case "PlayerSubmit":
            onPlayerSubmit?.(parsed as PlayerSubmitEvent);
            break;

          default:
            console.log("Unknown Web PubSub event:", parsed);
        }
      } catch (error) {
        console.error("Failed to parse Web PubSub message:", error);
      }
    };

    webPubSubClient.on("server-message", handleServerMessage);

    void webPubSubClient.start();

    return () => {
      webPubSubClient.off("server-message", handleServerMessage);
      void webPubSubClient.stop();
    };
  }, [onPlayerJoined, onGameStarted]);
}
