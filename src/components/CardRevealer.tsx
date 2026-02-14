import { useState } from "react";

interface CardRevealerProps {
  img_back: string;
  img_front: string;
  width?: string;       // optional, default "w-1/2"
  message?: string;
  onFlip?: () => void;
}

export const CardRevealer = ({
  img_back,
  img_front,
  width = "w-1/2",
  message = "",
  onFlip,
}: CardRevealerProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    if (!isFlipped) {
      setIsFlipped(true);
      onFlip?.();
    }
  };

  return (
    <div className={`${width} flex flex-col items-center gap-4`}>
      <div
        className={`relative max-w-[500px] transition-transform duration-700 cursor-pointer preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        onClick={handleClick}
      >
        <img
          src={img_back}
          alt="card back"
          className="backface-hidden w-full rounded-2xl"
        />
        <img
          src={img_front}
          alt="card front"
          className="backface-hidden w-full absolute top-0 left-0 rotate-y-180 rounded-2xl"
        />
      </div>

      <div className="max-w-[500px]">
        {!isFlipped ? (
          <div
            className="
              text-center 
              p-4 
              border-2 border-dashed 
              rounded-lg 
              w-[340px] 
              min-h-[130px] 
              bg-primary 
              text-white 
              font-bold 
              flex 
              items-center 
              justify-center
              animate-pulse
            "
          >
            Buka
          </div>
        ) : (
          <p
            className="
              text-center 
              text-sm 
              animate-fade-in 
              border-2 border-dashed border-gray-300 
              rounded-lg 
              w-[340px] 
              min-h-[130px]
              max-h-[200px]
              bg-primary 
              text-primary-content 
              p-3
              leading-relaxed
              overflow-y-auto
              break-words
            "
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
};