import React from 'react';
import Icon from './icon';


// const sizeMap: { [key: string]: { [key: string]: string } } = {
//   md: {
//     side: 'w-[21%]',
//     center: 'w-[80%]'
//   },
//   sm: {
//     side: 'w-[40%]',
//     center: 'w-[60%]'
//   },
//   default: {
//     side: 'w-[10%]',
//     center: 'w-[80%]'
//   }
// }

const sizeMap: { [key: string]: { [key: string]: string; }; } = {
  sm: {
    side: 'w-[2rem]',
    center: 'w-[calc(100%_-_4rem)]'
  },
  md: {
    side: 'w-[2.5rem]',
    center: 'w-[calc(100%_-_5rem)]'
  },
  default: {
    side: 'w-[3rem]',
    center: 'w-[calc(100%_-_6rem)]'
  }
};

interface Props {
  children: JSX.Element,
  onClick: () => void;
  disabled?: boolean;
  size?: string;
  icon?: string;
  btnType?: string;

}

const PrimaryButton: React.FC<Props> = ({ children, onClick, disabled, size, icon, btnType }) => {

  const widthObj = size ? sizeMap[size] : sizeMap.default

  const handleClick = () => {
    onClick()
  }

  return (
    // @ts-ignore
    <button className={`flex w-full relative ${size === 'sm' ? '!h-14' : '!h-16'} group cursor-pointer`} onClick={handleClick} type={btnType}>
      <div className={`flex justify-center items-center h-full ${widthObj?.side} group-hover:btn-primary-left-bg-hover group-active:btn-primary-left-bg-active ${disabled ? 'btn-primary-left-bg-inactive' : 'btn-primary-left-bg'}`} />
      <div className={`h-full ${widthObj?.center} flex items-center justify-center group-hover:btn-primary-center-bg-hover group-active:btn-primary-center-bg-active ${disabled ? 'btn-primary-center-bg-inactive' : 'btn-primary-center-bg'}`} >
        <div className='flex flex-row items-center justify-center h-full w-full'>
          {icon && <div className=' pb-2 flex items-center justify-end  w-9 h-9'>
            <Icon source={icon as string} type='default' />
          </div>
          }
          <div className={`flex mx-1 ${icon && 'w-[95%]'}`}>
            {children}
          </div>
        </div>
      </div>
      <div className={`h-full ${widthObj?.side} group-hover:btn-primary-right-bg-hover group-active:btn-primary-right-bg-active ${disabled ? 'btn-primary-right-bg-inactive' : 'btn-primary-right-bg'}`} />
      {/* <div className='absolute top-0 left-0 flex flex-row items-center justify-center h-full w-full mt-0.5'>
        {icon && <div className='h-full pb-2 flex items-center justify-end w-[25%]'>
          <Icon source={icon as string} type='default' />
        </div>
        }
        <div className={`flex mx-1 ${icon && 'w-[75%]'}`}>
          {children}
        </div>
      </div> */}
    </ button>
  );
};

export default PrimaryButton;