interface AvatarLayerProps {
  src: string;
}

function AvatarLayer({ src }: AvatarLayerProps) {
  return (
    <img
      src={src}
      draggable={false}
      className="
        absolute
        inset-0
        w-full
        h-full
        object-contain
        pointer-events-none
        select-none
      "
      alt=""
    />
  );
}

export default AvatarLayer;