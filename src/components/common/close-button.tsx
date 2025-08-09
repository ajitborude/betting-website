import Image from 'next/image';
import React, { useState } from 'react';
import Close from "@/public/common/close.png";
import CloseHover from "@/public/common/close-hover.png";
import CloseActive from "@/public/common/close-active.png";
import CloseInactive from "@/public/common/close-inactive.png";

interface Props {

}

const CloseButton: React.FC<Props> = () => {
  const [buttonState, setButtonState] = useState('normal');
  const onMouseEnter = () => setButtonState('hover');
  const onMouseLeave = () => setButtonState('normal');
  const onMouseDown = () => setButtonState('active');
  const onMouseUp = () => setButtonState('normal');

  let imageSource = Close;

  if (buttonState === 'hover') {
    imageSource = CloseHover;
  } else if (buttonState === 'active') {
    imageSource = CloseActive;
  } else if (buttonState === 'inactive') {
    imageSource = CloseInactive;
  }

  return (
    <div className='cursor-pointer'
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}>
      <Image
        src={imageSource}
        alt="close"
        layout="fill"
        priority={true}
        placeholder="blur" />
    </div>
  );
};

export default CloseButton;