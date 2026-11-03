import {
  createContext,
  type Dispatch,
  type SetStateAction,
  useContext,
  useState,
} from "react";
import type { PlayerScore } from "../../api/models/PlayerScore.ts";

export type EventContextType = {
  roundCompleted: PlayerScore[];
  submittedPlayers: string[];
  clearSubmittedPlayers: () => void;
  setSubmittedPlayers: Dispatch<SetStateAction<string[]>>;
  setRoundCompleted: Dispatch<SetStateAction<PlayerScore[]>>;
  clearRoundCompleted: () => void;
};

const EventContext = createContext<EventContextType | null>(null);

export const EventProvider = ({ children }: { children: React.ReactNode }) => {
  const [submittedPlayers, setSubmittedPlayers] = useState<string[]>([]);
  const [roundCompleted, setRoundCompleted] = useState<PlayerScore[]>([]);

  const clearSubmittedPlayers = () => {
    setSubmittedPlayers([]);
  };

  const clearRoundCompleted = () => {
    setRoundCompleted([]);
  };

  return (
    <EventContext.Provider
      value={{
        roundCompleted,
        submittedPlayers,
        clearSubmittedPlayers,
        setSubmittedPlayers,
        setRoundCompleted,
        clearRoundCompleted,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

export const useEvent = () => {
  const context = useContext(EventContext);

  if (context) return context;

  throw new Error("useEvent must be used as an event");
};
