import React from 'react';
import { Bars } from "react-loader-spinner";

const Loader: React.FC = (): JSX.Element => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Bars
        height={50}
        width={50}
        color='white'
        ariaLabel='loading' />
    </div>
  );
}

export default Loader;