import React, { useEffect } from "react";
import CircularAvatar from "./avatar-logic";

interface FlipAvatarProps {
  notify: boolean;
  flipped: boolean;
  handlePingEnd: React.AnimationEventHandler<HTMLSpanElement>;
  handleMouseEnter: React.MouseEventHandler<HTMLDivElement>;
  handleMouseLeave: React.MouseEventHandler<HTMLDivElement>;
  handleProgressAnimationEnd: React.AnimationEventHandler<SVGSVGElement>;
  progressStarted: boolean;
}

const AVATAR_SRC = "/avatar.webp";
const BACKEND_SRC = "/backend.webp";

function preloadImage(src: string): void {
  const img = new window.Image();
  img.src = src;
}

const FlipAvatar: React.FC<FlipAvatarProps> = ({
  notify,
  flipped,
  handlePingEnd,
  handleMouseEnter,
  handleMouseLeave,
  handleProgressAnimationEnd,
  progressStarted,
}) => {
  useEffect(() => {
    preloadImage(AVATAR_SRC);
    preloadImage(BACKEND_SRC);
  }, []);

  return (
    <div className="relative w-48 h-48">
      {notify && !flipped && (
        <span
          className="absolute inset-5 rounded-full ring-1 ring-[#cba6f7] animate-ping"
          onAnimationEnd={handlePingEnd}
          aria-hidden="true"
        />
      )}

      <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#cba6f7]">
        <div
          className={`flip-container${flipped ? " hover" : ""}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          tabIndex={0}
          aria-pressed={flipped}
          role="button"
        >
          <div className="flipper">
            <div className="front">
              <CircularAvatar
                imageId="avatarPattern"
                imgSrc={AVATAR_SRC}
                alt="Photo"
                onAnimationEnd={handleProgressAnimationEnd}
                progressStarted={progressStarted && !flipped}
                flipped={flipped}
              />
            </div>
            <div className="back">
              <CircularAvatar
                imageId="avatarPattern2"
                imgSrc={BACKEND_SRC}
                alt="Avatar"
                onAnimationEnd={handleProgressAnimationEnd}
                progressStarted={progressStarted && !flipped}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 pointer-events-none">
                <h2 className="text-xl font-bold text-[#f5c2e7] bg-black/60 rounded shadow-lg mx-5.5">Backend</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipAvatar;
