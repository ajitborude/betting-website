import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment } from "react";
import useModal from '@/hooks/useModal';
import PrimaryButton from '../common/primary-button';
import RadioButtons from '../referral/balance-confirmation';
import CloseButton from '../common/close-button';

const accounts = [
  {
    id: 1,
    balance: '0.123123 WFG'
  },
  {
    id: 2,
    balance: '0.123123 MATIC'
  },
  {
    id: 3,
    balance: '0.123123 MATIC'
  },
  {
    id: 4,
    balance: '0.123123 MATIC'
  },
  {
    id: 5,
    balance: '0.123123 MATIC'
  },
];

const ReferralBalance: React.FC<any> = ({ isOpened }): JSX.Element => {
  const { confirm, decline } = useModal();

  const handleDecline = (e?: any) => {
    if (e)
      e.preventDefault();
    decline();
  };

  const handleConfirm = async (e?: any) => {
    if (e)
      e.preventDefault();
    confirm({});
  };

  return (
    <Transition appear show={isOpened} as={Fragment} >
      <Dialog as="div" className="relative z-20" onClose={() => { }} open={isOpened}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-[#402C69] bg-opacity-50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="z-10 flex items-center justify-center min-h-full p-4 text-center ">
            <div className="fixed inset-0 backdrop-blur-sm " aria-hidden="true" />
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative flex flex-col justify-center w-full max-w-md pt-4 pb-8 pl-8 pr-10 campaign-balance-frame">
                <div className='flex self-end'>
                  <label className='pr-2 text-2xl text-right heading typing-change-password'>Conformation</label>
                </div>
                <div className='z-30 flex flex-col items-center justify-center w-full pt-8'>
                  <label className='w-full pl-2 text-left'>Select a payout and confirm your withdrawal</label>
                  <RadioButtons options={accounts} isShowing={isOpened} />
                  <div className='flex items-center justify-center w-full mt-3'>
                    <Transition
                      appear show={isOpened} as={Fragment}
                      enter="ease-in duration-300 delay-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                    >
                      <div className='w-[70%] items-center flex justify-center cursor-pointer'>
                        <PrimaryButton onClick={handleConfirm} size='md'>
                          <label className='pb-2 cursor-pointer typing-save-changes heading'>
                            Confirm
                          </label>
                        </PrimaryButton>
                      </div>
                    </Transition>
                  </div>
                </div>
                <Transition
                  appear show={isOpened} as={Fragment}
                  enter="ease-in duration-300 delay-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                >
                  <div className='absolute z-20 w-20 h-20 rotate-0 rounded-full cursor-pointer -bottom-1 -right-1' onClick={handleDecline}>
                    <CloseButton />
                  </div>
                </Transition>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition >
  );
};

export default ReferralBalance;
