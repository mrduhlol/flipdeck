import type { Avatar } from "../../types/avatar";

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
              hair: avatar.hair - 1,
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
              hair: avatar.hair + 1,
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