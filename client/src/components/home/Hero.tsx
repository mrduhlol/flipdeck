import AvatarPreview from "../avatar/AvatarPreview";
import type { Avatar } from "../../types/avatar";
import type { Dispatch, SetStateAction } from "react";

interface HeroProps {
  avatar: Avatar;
  setAvatar: Dispatch<SetStateAction<Avatar>>;
}

function Hero({
  avatar,
  setAvatar,
}: HeroProps) {
  return (
    <main className="max-w-7xl mx-auto px-8 mt-6">
      <section className="flex items-start gap-16">

        {/* Left */}
        <div className="w-[420px] shrink-0">
          <AvatarPreview avatar={avatar} setAvatar={setAvatar} />
        </div>

        {/* Right */}
        <div className="flex-1 pt-16">

          <input
            type="text"
            placeholder="Nickname"
            className="w-full h-16 rounded-2xl border border-slate-700 bg-transparent px-6 text-lg outline-none focus:border-violet-500"
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