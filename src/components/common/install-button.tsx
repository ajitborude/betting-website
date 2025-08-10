import Image from "next/image";
import React, { useState } from 'react';
import Install from "@/public/common/install.png";
import InstallHover from "@/public/common/install-hover.png";
import InstallActive from "@/public/common/install-active.png";
import InstallInactive from "@/public/common/install-inactive.png";

interface Props {

}

const InstallButton: React.FC<Props> = () => {
  const [buttonState, setButtonState] = useState('normal');
  const onMouseEnter = () => setButtonState('hover');
  const onMouseLeave = () => setButtonState('normal');
  const onMouseDown = () => setButtonState('active');
  const onMouseUp = () => setButtonState('normal');

  let imageSource = Install;

  if (buttonState === 'hover') {
    imageSource = InstallHover;
  } else if (buttonState === 'active') {
    imageSource = InstallActive;
  } else if (buttonState === 'inactive') {
    imageSource = InstallInactive;
  }

  return (
    <div className='cursor-pointer'
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}>
      <Image
        src={imageSource}
        alt="install"
        priority={true}
        placeholder="blur"
        style={{
          maxWidth: "100%",
          height: "auto",
          objectFit: "contain"
        }} />
    </div>
  );
};

export default InstallButton;