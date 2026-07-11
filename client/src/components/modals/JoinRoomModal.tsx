interface JoinRoomModalProps {
  open: boolean;
  onClose: () => void;
}

function JoinRoomModal({ open, onClose }: JoinRoomModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div
        className="
          w-[500px]
          rounded-3xl
          border
          border-slate-700
          bg-slate-900
          shadow-2xl
          p-10
          space-y-6
        "
      >

        <h2 className="text-3xl font-bold text-center">
          Join Room
        </h2>

        <input
          placeholder="ABCDE"
          maxLength={5}
          className="
            w-full
            h-16
            rounded-2xl
            border
            border-slate-700
            bg-slate-800/40
            text-center
            text-3xl
            tracking-[0.35em]
            uppercase
            outline-none
            transition
            focus:border-violet-500
          "
        />

        <button
          className="
            w-full
            h-16
            rounded-2xl
            bg-violet-600
            hover:bg-violet-500
            transition
            font-semibold
            text-lg
          "
        >
          JOIN ROOM
        </button>

        <button
          onClick={onClose}
          className="
            w-full
            text-slate-400
            hover:text-white
            transition
          "
        >
          Cancel
        </button>

      </div>

    </div>
  );
}

export default JoinRoomModal;