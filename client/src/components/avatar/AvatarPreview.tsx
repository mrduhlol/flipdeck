import AvatarCustomizer from "./AvatarCustomizer";
import Avatar from "./Avatar";

import type { Avatar as AvatarType } from "../../types/avatar.ts";
import type { Dispatch, SetStateAction } from "react";

interface AvatarPreviewProps {
  avatar: AvatarType;
  setAvatar: Dispatch<SetStateAction<AvatarType>>;
}

function AvatarPreview({
  avatar,
  setAvatar,
}: AvatarPreviewProps) {
  return (
    <div className="h-[620px] rounded-[32px] border border-slate-700 bg-slate-900/30 overflow-hidden flex flex-col">

      {/* Avatar */}
      <div className="h-[360px] flex items-center justify-center relative">

        <div className="absolute w-64 h-64 rounded-full bg-violet-500/20 blur-3xl" />

        <Avatar avatar={avatar} />

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