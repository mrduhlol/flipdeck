import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

import type { Avatar } from "../types/avatar";
import { defaultAvatar } from "../utils/defaultAvatar";

interface PlayerContextType {
  nickname: string;
  setNickname: React.Dispatch<React.SetStateAction<string>>;

  avatar: Avatar;
  setAvatar: React.Dispatch<React.SetStateAction<Avatar>>;
}

const PlayerContext = createContext<PlayerContextType | null>(null);

export function PlayerProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [nickname, setNickname] = useState("");
  const [avatar, setAvatar] = useState(defaultAvatar);

  return (
    <PlayerContext.Provider
      value={{
        nickname,
        setNickname,
        avatar,
        setAvatar,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}

export function usePlayer() {
  const context = useContext(PlayerContext);

  if (!context) {
    throw new Error("usePlayer must be used inside PlayerProvider");
  }

  return context;
}