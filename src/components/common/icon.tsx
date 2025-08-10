import Image from "next/image";
import React from 'react';
import { IconMapper } from '@/helper/icon-mapper';

const sizeMap: { [key: string]: { [key: string]: number; }; } = {
  sm: {
    width: 30,
    height: 20
  },
  lg: {
    width: 42,
    height: 32
  },
  default: {
    width: 34,
    height: 24
  }
};

interface Props {
  source: string;
  type?: string;
  size?: string;
}
const Icon: React.FC<Props> = ({ source, type, size }): JSX.Element => {
  const iconSource = IconMapper[source];
  const dimensions = size ? sizeMap[size] : sizeMap.default;

  if (iconSource) {
    return (
      <div className={`w-[${dimensions?.width}] h-[${dimensions?.height}] flex items-center justify-center`} >
        <Image
          src={type ? iconSource[type] as string : iconSource?.default as string}
          width={dimensions?.width}
          height={dimensions?.height}
          alt='icon'
          style={{
            maxWidth: "100%",
            height: "auto",
            objectFit: "contain"
          }} />
      </div>
    );
  }
  return (
    <div className={`w-[${dimensions?.width}] h-[${dimensions?.height}]`} />
  );

};

export default Icon;