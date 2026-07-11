import type { Avatar as AvatarType } from "../../types/avatar";

interface AvatarProps {
  avatar: AvatarType;
}

function Avatar({ avatar }: AvatarProps) {
  return (
    <div className="relative w-64 h-64">

      {/* Skin */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="
            w-36
            h-36
            rounded-full
            bg-[#F6D7C3]
            border-4
            border-slate-700
          "
        />
      </div>

      {/* Hair */}
      <div className="absolute top-7 left-1/2 -translate-x-1/2 text-sm text-violet-400">
        {avatar.hair}
      </div>

    </div>
  );
}

export default Avatar;