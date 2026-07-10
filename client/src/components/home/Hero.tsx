import AvatarPreview from "../avatar/AvatarPreview";

function Hero() {
  return (
    <main className="max-w-7xl mx-auto px-8 pt-4">
      <section className="grid grid-cols-5 gap-12 items-center">

        {/* Avatar */}
        <div className="col-span-2">
          <div className="h-[520px] rounded-[32px] border border-slate-700 bg-slate-900/30 flex items-center justify-center">
            <AvatarPreview />
          </div>
        </div>

        {/* Right */}
        <div className="col-span-3 flex flex-col justify-center h-[520px]">

          {/* Nickname */}
          <div className="mt-10">
            <input
              type="text"
              placeholder="Nickname"
              className="w-full h-16 rounded-2xl border border-slate-700 bg-transparent px-6 text-lg outline-none focus:border-indigo-500 transition"
            />
          </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-col gap-5">

        <div className="grid grid-cols-2 gap-4">

            <button
            className="
            h-[70px]
            rounded-3xl
            bg-violet-600
            hover:bg-violet-500
            transition-all
            duration-200
            text-lg
            font-semibold
            "
            >
            ▶ PLAY
            </button>

            <button
            className="
            h-[70px]
            rounded-3xl
            border
            border-slate-700
            hover:bg-slate-800
            transition-all
            duration-200
            text-lg
            font-semibold
            "
            >
            👥 JOIN ROOM
            </button>

        </div>

        <button
            className="
            h-16
            rounded-2xl
            border
            border-slate-700
            hover:bg-slate-800
            transition-all
            duration-200
            text-lg
            font-medium text-slate-300 hover:text-white
            "
        >
            🔒 CREATE PRIVATE ROOM
        </button>

        </div>

        </div>

      </section>
    </main>
  );
}

export default Hero;