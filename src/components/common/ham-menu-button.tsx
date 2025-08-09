import Image from 'next/image';
import React, { useState } from 'react';
import HamMenu from "@/public/common/ham-menu.png";
import HamMenuHover from "@/public/common/ham-menu-hover.png";
import HamMenuActive from "@/public/common/ham-menu-active.png";
import HamMenuInactive from "@/public/common/ham-menu-inactive.png";

interface Props {

}

const HamMenuButton: React.FC<Props> = () => {
  const [buttonState, setButtonState] = useState('normal');
  const onMouseEnter = () => setButtonState('hover');
  const onMouseLeave = () => setButtonState('normal');
  const onMouseDown = () => setButtonState('active');
  const onMouseUp = () => setButtonState('normal');

  let imageSource = HamMenu

  if (buttonState === 'hover') {
    imageSource = HamMenuHover
  } else if (buttonState === 'active') {
    imageSource = HamMenuActive
  } if (buttonState === 'inactive') {
    imageSource = HamMenuInactive
  }

  return (
    <div className='cursor-pointer w-full h-full flex'
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}>
      <Image
        src={imageSource}
        alt="close"
        layout="fill"
        objectFit='contain'
        priority={true}
        placeholder="blur" />
    </div>
  );
};

export default HamMenuButton;