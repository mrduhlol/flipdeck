import type { Avatar } from "../../types/avatar";
import { hairs } from "../../data/avatar";

function nextHair(current: string) {
  const index = hairs.indexOf(current);

  return hairs[(index + 1) % hairs.length];
}

function previousHair(current: string) {
  const index = hairs.indexOf(current);

  return hairs[(index - 1 + hairs.length) % hairs.length];
}

interface AvatarCustomizerProps {
  avatar: Avatar;
  setAvatar: React.Dispatch<React.SetStateAction<Avatar>>;
}

function AvatarCustomizer({
  avatar,
  setAvatar,
}: AvatarCustomizerProps) {
  return (
    <div className="p-6 space-y-3">

      <div className="flex items-center justify-between rounded-xl bg-slate-800/40 px-5 py-3">

        <button
          onClick={() =>
            setAvatar({
              ...avatar,
              hair: previousHair(avatar.hair),
            })
          }
          className="text-xl hover:text-violet-400"
        >
          ❮
        </button>

        <span>Hair</span>

        <button
          onClick={() =>
            setAvatar({
              ...avatar,
              hair: nextHair(avatar.hair),
            })
          }
          className="text-xl hover:text-violet-400"
        >
          ❯
        </button>

      </div>

    </div>
  );
}

export default AvatarCustomizer;