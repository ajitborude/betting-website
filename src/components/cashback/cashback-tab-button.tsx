import React from 'react';

// types => [even, odd, start, even-end, odd-end]

interface Props {
  text: string | undefined,
  selected?: boolean;
  type: string;
}

const CashbackTabButton: React.FC<Props> = ({ text, selected, type }) => {
  let classes = {
    left: '',
    center: '',
    right: '',
    extra: ''
  };

  switch (type) {
    case 'start':
      if (selected) classes = { left: 'tab-odd-left', center: 'tab-odd-center', right: 'tab-odd-right', extra: 'tab-start-cashback' };
      else classes = { left: 'tab-odd-left-inc', center: 'tab-odd-center-inc', right: 'tab-odd-right-inc', extra: 'tab-start-cashback' };
      break;
    case 'even':
      if (selected) classes = { left: 'tab-even-left', center: 'tab-even-center', right: 'tab-even-right', extra: '' };
      else classes = { left: 'tab-even-left-inc', center: 'tab-even-center-inc', right: 'tab-even-right-inc', extra: '' };
      break;
    case 'odd':
      if (selected) classes = { left: 'tab-odd-left', center: 'tab-odd-center', right: 'tab-odd-right', extra: '' };
      else classes = { left: 'tab-odd-left-inc', center: 'tab-odd-center-inc', right: 'tab-odd-right-inc', extra: '' };
      break;
    case 'end-even':
      if (selected) classes = { left: 'tab-even-left', center: 'tab-even-center', right: 'tab-even-right', extra: 'tab-end-even-cashback' };
      else classes = { left: 'tab-even-left-inc', center: 'tab-even-center-inc', right: 'tab-even-right-inc', extra: 'tab-end-even-cashback' };
      break;
    case 'end-odd':
      if (selected) classes = { left: 'tab-odd-left', center: 'tab-odd-center', right: 'tab-odd-right', extra: 'tab-end-odd' };
      else classes = { left: 'tab-odd-left-inc', center: 'tab-odd-center-inc', right: 'tab-odd-right-inc', extra: 'tab-end-odd' };
      break;

    default:
      break;
  }
  return (
    <div className={`flex w-full relative !h-16 group cursor-pointe outline-0 ${classes.extra}`}>
      <div className={`h-full w-[15%] flex justify-center items-center ${classes.left}`} />
      <div className={`h-full w-[72%] flex justify-center items-center  ${classes.center}`} />
      <div className={`h-full w-[15%] flex justify-center items-center ${classes.right}`} />
      <div className='absolute top-0 left-0 flex flex-row items-center justify-center h-full w-full mt-0.5'>
        <label className={`${selected ? 'account-tab-label-active' : 'account-tab-label-inactive'} w-full text-center px-8`}>
          {text}
        </label>
      </div>
    </div >
  );
};

export default CashbackTabButton;