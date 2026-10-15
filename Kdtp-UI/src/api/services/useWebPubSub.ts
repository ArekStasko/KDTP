import { useEffect } from "react";
import { webPubSubClient } from "./WebPubSubClient.ts";

export function useWebPubSub(
  onPlayerJoined: (event: {
    type: "PlayerJoined";
    player: {
      id: string;
      username: string;
      role: string;
    };
  }) => void,
) {
  useEffect(() => {
    const handleServerMessage = (event: any) => {
      const message = event.message?.data;
      let parsed: any;

      try {
        parsed = typeof message === "string" ? JSON.parse(message) : message;

        if (parsed?.type === "PlayerJoined") {
          onPlayerJoined(parsed);
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
  }, [onPlayerJoined]);
}
