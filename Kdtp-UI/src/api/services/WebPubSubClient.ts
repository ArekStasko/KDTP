import { WebPubSubClient } from "@azure/web-pubsub-client";

export const webPubSubClient = new WebPubSubClient({
  getClientAccessUrl: async () => {
    const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}webpubsub/negotiate`,
    );

    if (!response.ok) {
      throw new Error("Failed to negotiate Web PubSub connection");
    }

    const data: { url: any } = await response.json();

    return data.url.result;
  },
});
