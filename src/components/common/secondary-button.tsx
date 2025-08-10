import React from "react";
import Icon from "./icon";

// const sizeMap: { [key: string]: { [key: string]: string; }; } = {
//   md: {
//     side: 'w-[23%]',
//     center: 'w-[82%]'
//   },
//   sm: {
//     side: 'w-[42%]',
//     center: 'w-[48%]'
//   },
//   default: {
//     side: 'w-[10%]',
//     center: 'w-[80%]'
//   }
// };

const sizeMap: { [key: string]: { [key: string]: string } } = {
  sm: {
    side: "w-[2rem]",
    center: "w-[calc(100%_-_4rem)]",
  },
  md: {
    side: "w-[2.5rem]",
    center: "w-[calc(100%_-_5rem)]",
  },
  default: {
    side: "w-[3rem]",
    center: "w-[calc(100%_-_6rem)]",
  },
};

interface Props {
  children: JSX.Element;
  onClick: () => void;
  disabled?: boolean;
  size?: string;
  icon?: string;
  isDrawerBtn?: boolean;
}

const SecondaryButton: React.FC<Props> = ({
  children,
  onClick,
  disabled,
  size,
  icon,
  isDrawerBtn,
}) => {
  const widthObj = size ? sizeMap[size] : sizeMap.default;

  const handleClick = () => {
    onClick();
  };

  return (
    <div
      className={`flex w-full relative ${
        size === "sm" ? "!h-14" : "!h-16"
      } group cursor-pointer drawer-button`}
      onClick={handleClick}
    >
      <div
        className={`flex justify-center items-center h-full ${
          widthObj?.side
        } group-hover:btn-secondary-left-bg-hover group-active:btn-secondary-left-bg-active ${
          disabled ? "btn-secondary-left-bg-inactive" : "btn-secondary-left-bg"
        }`}
      />
      <div
        className={`h-full ${
          widthObj?.center
        } flex items-center justify-center group-hover:btn-secondary-center-bg-hover group-active:btn-secondary-center-bg-active ${
          disabled
            ? "btn-secondary-center-bg-inactive"
            : "btn-secondary-center-bg"
        }`}
      >
        <div
          className={`relative flex flex-row items-center h-full w-full  ${
            icon ? "justify-start" : "justify-center"
          }`}
        >
          {icon && (
            <div className=" pb-2 flex items-center w-9 h-9">
              <Icon source={icon as string} type="default" />
            </div>
          )}
          {/* <div className={` absolute top-1/4 left-0 flex mt-0.5 ${icon && 'ml-9 w-[95%]'}`}>
            {children}
          </div> */}
          <div className={`flex items-center ${icon && "w-[80%]"}`}>
            {children}
          </div>
        </div>
      </div>
      <div
        className={`h-full ${
          widthObj?.side
        } group-hover:btn-secondary-right-bg-hover group-active:btn-secondary-right-bg-active ${
          disabled
            ? "btn-secondary-right-bg-inactive"
            : "btn-secondary-right-bg"
        }`}
      />
      {isDrawerBtn && (
        <label
          htmlFor="bi-drawer"
          className="btn btn-ghost hover:bg-transparent p-0 w-full h-full absolute"
        />
      )}
      {/* <div className='absolute top-0 left-0 flex flex-row items-center justify-end h-full w-full mt-0.5'>
        <div className={`flex ${icon && 'w-[75%]'}`}>
          {children}
        </div>
      </div> */}
    </div>
  );
};

export default SecondaryButton;
