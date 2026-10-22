import kdtpApi from "../KdtpApi.ts";
import type { Player } from "../models/Player.ts";
import type {QuestionSet} from "../models/QuestionSet.ts";

export type JoinGame = {
  Username: string;
};

export const GameApi = kdtpApi.injectEndpoints({
  endpoints: (build) => ({
    getPlayers: build.query<Player[], void>({
      query: () => "game/players",
      providesTags: ["Players"],
    }),
    getQuestionsSet: build.query<QuestionSet[], void>({
      query: () => "game/questions-set",
    }),
    joinPlayer: build.mutation<Player, JoinGame>({
      query: (body) => ({
        url: "game/players",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Players"],
    }),
    createSession: build.mutation<void, void>({
      query: (body) => ({
        url: "game/session",
        method: "POST",
        body,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetPlayersQuery, useGetQuestionsSetQuery, useJoinPlayerMutation, useCreateSessionMutation } = GameApi;
