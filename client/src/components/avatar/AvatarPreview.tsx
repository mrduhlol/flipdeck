function AvatarPreview() {
  return (
    <div className="relative w-full h-full rounded-3xl bg-slate-900/40 border border-slate-700 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-72 h-72 rounded-full bg-violet-500/20 blur-3xl left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />

      {/* Placeholder */}
      <div className="relative flex h-full items-center justify-center">
        <div className="w-48 h-48 rounded-full border-4 border-slate-600 flex items-center justify-center text-7xl">
          👤
        </div>
      </div>

    </div>
  );
}

export default AvatarPreview;