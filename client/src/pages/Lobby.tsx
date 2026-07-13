import { useParams } from "react-router-dom";

function Lobby() {
  const { roomCode } = useParams();

  return (
    <main className="max-w-5xl mx-auto px-8 py-12">

      <h1 className="text-5xl font-bold">
        Lobby
      </h1>

      <div className="mt-8 rounded-3xl border border-slate-700 p-6">

        <div className="flex items-center justify-between">

          <div>
            <p className="text-slate-400">
              Room Code
            </p>

            <h2 className="text-3xl font-bold tracking-widest">
              {roomCode}
            </h2>
          </div>

          <button
            className="
              h-12
              px-5
              rounded-xl
              border
              border-slate-700
              hover:bg-slate-800
              transition
            "
          >
            📋 Copy
          </button>

        </div>

      </div>

      <div className="mt-8 rounded-3xl border border-slate-700 p-6">

        <h3 className="text-2xl font-semibold">
          Players (1/10)
        </h3>

        <div className="mt-6 flex items-center justify-between rounded-xl bg-slate-800/40 p-4">

          <span>👤 Abhishek</span>

          <span className="text-yellow-400">
            👑 Host
          </span>

        </div>

      </div>

      <button
        className="
          mt-8
          w-full
          h-16
          rounded-2xl
          bg-violet-600
          hover:bg-violet-500
          font-semibold
          text-lg
        "
      >
        START GAME
      </button>

    </main>
  );
}

export default Lobby;