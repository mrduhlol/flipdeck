function AvatarCustomizer() {
  const options = [
    "Hair",
    "Eyes",
    "Mouth",
    "Outfit",
    "Skin",
  ];

  return (
    <div className="p-5 space-y-3">
      {options.map((option) => (
        <div
          key={option}
          className="flex items-center justify-between rounded-xl bg-slate-800/50 px-4 py-3"
        >
          <button className="text-xl hover:text-violet-400 transition">
            ❮
          </button>

          <span className="font-medium text-sm tracking-wide">
            {option}
          </span>

          <button className="text-xl hover:text-violet-400 transition">
            ❯
          </button>
        </div>
      ))}
    </div>
  );
}

export default AvatarCustomizer;