import AvatarCustomizer from "./AvatarCustomizer";

function AvatarPreview() {
  return (
    <div className="h-[620px] rounded-[32px] border border-slate-700 bg-slate-900/30 overflow-hidden flex flex-col">

      {/* Avatar */}
      <div className="flex-1 flex items-center justify-center relative">

        <div className="absolute w-64 h-64 rounded-full bg-violet-500/20 blur-3xl" />

        <div className="relative w-36 h-36 rounded-full border-4 border-slate-600 flex items-center justify-center text-6xl bg-slate-900/20">
          👤
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-slate-700" />

      {/* Controls */}
      <AvatarCustomizer />

    </div>
  );
}

export default AvatarPreview;