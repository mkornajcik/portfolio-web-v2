import React from "react";

interface CircularAvatarProps {
  imageId: string;
  imgSrc: string;
  alt: string;
  onAnimationEnd?: React.AnimationEventHandler<SVGSVGElement>;
  progressStarted: boolean;
  flipped?: boolean;
}

const CircularAvatar: React.FC<CircularAvatarProps> = ({
  imageId,
  imgSrc,
  alt,
  onAnimationEnd,
  progressStarted,
  flipped,
}) => (
  <svg
    width="192"
    height="192"
    viewBox="5 5 250 250"
    className={`circular-progress${progressStarted ? " progress-visible" : ""}`}
    style={{
      animation: progressStarted ? "progress-animation 1s linear forwards" : "none",
      opacity: 1,
    }}
    onAnimationEnd={onAnimationEnd}
    aria-label={alt}
    role="img"
  >
    <title>{alt}</title>
    <defs>
      <pattern id={imageId} patternUnits="userSpaceOnUse" width="250" height="250">
        <image
          href={imgSrc}
          x="0"
          y="0"
          width="250"
          height="250"
          preserveAspectRatio="xMidYMid slice"
          className="z-50"
        />
      </pattern>
    </defs>
    <circle cx="120" cy="120" r="120" fill={`url(#${imageId})`} className="avatar" />

    <circle
      cx="120"
      cy="120"
      r="120"
      className="fg"
      fill="none"
      strokeWidth="10"
      strokeDasharray="754"
      strokeDashoffset="188.5"
      style={{ display: flipped ? "none !important" : "block" }}
    />
  </svg>
);

export default CircularAvatar;
