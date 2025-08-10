import SocialActive from "@/public/common/social-active.png";
import SocialHover from "@/public/common/social-hover.png";
import SocialInactive from "@/public/common/social-inactive.png";
import Social from "@/public/common/social.png";
import Image from "next/image";
import React, { useState } from "react";

const sizeMap: { [key: string]: { [key: string]: number | string } } = {
  sm: {
    frame: 50,
    icon: 20,
    textSize: "text-xl",
  },
  md: {
    frame: 60,
    icon: 25,
    textSize: "text-4xl",
  },
  default: {
    frame: 75,
    icon: 30,
    textSize: "text-5xl",
  },
};
interface Props {
  type?: string;
  size?: string;
  text?: string;
}

const SocialButton: React.FC<Props> = ({ type, size, text }) => {
  const dimensions = size ? sizeMap[size] : sizeMap.default;

  const [buttonState, setButtonState] = useState("normal");
  const onMouseEnter = () => setButtonState("hover");
  const onMouseLeave = () => setButtonState("normal");
  const onMouseDown = () => setButtonState("active");
  const onMouseUp = () => setButtonState("normal");

  let frame = Social;
  const icon = type ? `/icons/${type}.png` : null;

  if (buttonState === "hover") {
    frame = SocialHover;
  } else if (buttonState === "active") {
    frame = SocialActive;
  } else if (buttonState === "inactive") {
    frame = SocialInactive;
  }

  return (
    <div
      className={`cursor-pointer flex items-center justify-center relative w-[${dimensions?.frame}] h-[${dimensions?.frame}]`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    >
      <Image
        src={frame}
        alt="frame"
        height={dimensions?.frame as number}
        width={dimensions?.frame as number}
        priority={true}
        placeholder="blur"
        style={{
          maxWidth: "100%",
          height: "auto"
        }} />
      {text && (
        <div className="absolute mt-1">
          <label className={`${dimensions?.textSize} heading`}>{text}</label>
        </div>
      )}
      {icon && (
        <div className={`absolute top-[30%] left-[30%]`}>
          <Image
            src={icon}
            alt="telegram"
            height={dimensions?.icon as number}
            width={dimensions?.icon as number}
            priority={true}
            style={{
              maxWidth: "100%",
              height: "auto",
              objectFit: "contain"
            }} />
        </div>
      )}
    </div>
  );
};

export default SocialButton;
