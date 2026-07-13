import AvatarPreview from "../avatar/AvatarPreview";
import type { Avatar } from "../../types/avatar";
import type { Dispatch, SetStateAction } from "react";

interface HeroProps {
  avatar: Avatar;
  setAvatar: Dispatch<SetStateAction<Avatar>>;
  nickname: string;
  setNickname: Dispatch<SetStateAction<string>>;
  onJoinRoom: () => void;
}

function Hero({
  avatar,
  setAvatar,
  nickname,
  setNickname,
  onJoinRoom,
}: HeroProps) {
  return (
    <main className="max-w-7xl mx-auto px-8 min-h-[calc(100vh-180px)] flex items-center">
      <section className="w-full grid grid-cols-[380px_1fr] gap-12 items-center">

        {/* Left */}
        <div className="w-full">
          <AvatarPreview avatar={avatar} setAvatar={setAvatar} />
        </div>

        {/* Right */}
        <div className="flex flex-col justify-center">
          
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="Nickname"
            maxLength={20}
            className="
              w-full
              h-16
              rounded-2xl
              border
              border-slate-700
              bg-transparent
              px-6
              text-lg
              outline-none
              focus:border-violet-500
            "
          />

          <div className="mt-5 grid grid-cols-2 gap-4">

            <button
              className="
              h-16
              rounded-2xl
              bg-violet-600
              hover:bg-violet-500
              transition
              font-semibold
              "
            >
              ▶ PLAY
            </button>

            <button
            onClick={onJoinRoom}
              className="
              h-16
              rounded-2xl
              border
              border-slate-700
              hover:bg-slate-800
              transition
              font-semibold
              "
            >
              👥 JOIN ROOM
            </button>

          </div>

          <button
            className="
            mt-4
            w-full
            h-16
            rounded-2xl
            border
            border-slate-700
            hover:bg-slate-800
            transition
            font-semibold
            "
          >
            🔒 CREATE PRIVATE ROOM
          </button>

        </div>

      </section>
    </main>
  );
}

export default Hero;