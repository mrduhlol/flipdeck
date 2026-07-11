import AvatarCustomizer from "./AvatarCustomizer";
import type { Avatar } from "../../types/avatar";
import type { Dispatch, SetStateAction } from "react";

interface AvatarPreviewProps {
  avatar: Avatar;
  setAvatar: Dispatch<SetStateAction<Avatar>>;
}

function AvatarPreview({ avatar, setAvatar }: AvatarPreviewProps) {
  return (
    <div className="h-[620px] rounded-[32px] border border-slate-700 bg-slate-900/30 overflow-hidden flex flex-col">

      {/* Avatar */}
      <div className="h-[360px] flex items-center justify-center relative">

        <div className="absolute w-64 h-64 rounded-full bg-violet-500/20 blur-3xl" />

        <div className="relative w-36 h-36 rounded-full border-4 border-slate-600 flex items-center justify-center text-6xl bg-slate-900/20">
            <div className="text-center">
            <div className="text-6xl">👤</div>

            <p className="mt-4 text-sm text-slate-400">
                Hair #{avatar.hair}
            </p>
            </div>
        </div>

      </div>

      {/* Divider */}
      <div className="mx-6 border-t border-slate-700" />

      {/* Controls */}
      <AvatarCustomizer
        avatar={avatar}
        setAvatar={setAvatar}
        />

    </div>
  );
}

export default AvatarPreview;