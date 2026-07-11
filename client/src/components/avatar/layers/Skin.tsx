interface SkinProps {
  type: number;
}

const colors = [
  "#F6D7C3",
  "#E9BE9A",
  "#D79B6D",
  "#B87346",
  "#7A4B2E",
];

function Skin({ type }: SkinProps) {
  return (
    <svg
      width="180"
      height="180"
      viewBox="0 0 180 180"
      className="absolute"
    >
      {/* Neck */}
      <rect
        x="78"
        y="112"
        width="24"
        height="28"
        rx="8"
        fill={colors[type]}
      />

      {/* Head */}
      <circle
        cx="90"
        cy="78"
        r="34"
        fill={colors[type]}
      />
    </svg>
  );
}

export default Skin;