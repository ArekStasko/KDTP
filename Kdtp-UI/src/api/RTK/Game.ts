import kdtpApi from "../KdtpApi.ts";
import type { Player } from "../models/Player.ts";

export type JoinGame = {
  Username: string;
};

export const GameApi = kdtpApi.injectEndpoints({
  endpoints: (build) => ({
    getPlayers: build.query<Player[], void>({
      query: () => "game/players",
      providesTags: ["Players"],
    }),
    joinPlayer: build.mutation<Player, JoinGame>({
      query: (body) => ({
        url: "game/players",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Players"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetPlayersQuery, useJoinPlayerMutation } = GameApi;
