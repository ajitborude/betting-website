import Image from "next/image";
import React, { useState } from 'react';
import Icon from './icon';
import TopBarMenuDown from "@/public/common/menu-down.png";
import TopBarMenuDownHover from "@/public/common/menu-down-hover.png";
import TopBarMenuDownActive from "@/public/common/menu-down-active.png";
import TopBarMenuDownInactive from "@/public/common/menu-down-inactive.png";
import TopBarMenuUp from "@/public/common/menu-up.png";
import TopBarMenuUpHover from "@/public/common/menu-up-hover.png";
import TopBarMenuUpActive from "@/public/common/menu-up-active.png";
import TopBarMenuUpInactive from "@/public/common/menu-up-inactive.png";

interface Props {
  type: string
}

const TopBarMenuButton: React.FC<Props> = ({ type }) => {
  const [buttonState, setButtonState] = useState('normal');
  const onMouseEnter = () => setButtonState('hover');
  const onMouseLeave = () => setButtonState('normal');
  const onMouseDown = () => setButtonState('active');
  const onMouseUp = () => setButtonState('normal');

  let imageSource = type === 'up' ? TopBarMenuUp : TopBarMenuDown;

  if (type === 'up') {
    if (buttonState === 'hover') {
      imageSource = TopBarMenuUpHover
    } else if (buttonState === 'active') {
      imageSource = TopBarMenuUpActive
    } if (buttonState === 'inactive') {
      imageSource = TopBarMenuUpInactive
    }
  } else if (type === 'down') {
    if (buttonState === 'hover') {
      imageSource = TopBarMenuDownHover
    } else if (buttonState === 'active') {
      imageSource = TopBarMenuDownActive
    } if (buttonState === 'inactive') {
      imageSource = TopBarMenuDownInactive
    }
  }

  return (
    <div className='cursor-pointer'
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}>
      <Image
        src={imageSource}
        alt="topBarMenu"
        priority={true}
        placeholder="blur"
        fill
        sizes="100vw" />
      <Icon source='dropdown' size='sm' type={type} />
    </div>
  );
};

export default TopBarMenuButton;