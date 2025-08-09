import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import useModal from '@/hooks/useModal';
import Link from 'next/link';
import CloseButton from '../common/close-button';
import InstallButton from '../common/install-button';
import MetamaskBg from '@/public/common//metamask-bg.png';
import MetamaskIcon from '@/public/common//metamask-icon.png';
import Image from 'next/image';

const ConnectMetamask: React.FC<any> = ({ isOpened }): JSX.Element => {
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
              <Dialog.Panel className="relative flex flex-col justify-center w-full max-w-lg pt-8 pb-10 pl-6 pr-10 edit-username-frame">
                <div className='flex self-end'>
                  <label className='pr-2 text-2xl text-right heading typing-change-password '>Connect to wallet</label>
                </div>
                <div className='flex flex-col items-start justify-start w-full mt-8 mb-2'>
                  <div className='flex flex-row items-center justify-between w-full'>
                    <div className='flex flex-col items-center justify-between w-1/2'>
                      <div className='relative flex flex-col items-center h-24'>
                        <div className='absolute w-24 h-24'>
                          <Image
                            src={MetamaskBg}
                            alt="metamask-bg"
                            priority={true}
                            objectFit='contain'
                            placeholder="blur" />
                        </div>
                        <div className='absolute w-24 h-24 top-3'>
                          <Image
                            src={MetamaskIcon}
                            alt="metamask-icon"
                            priority={true}
                            objectFit='contain'
                            placeholder="blur" />
                        </div>
                      </div>
                      <label className='text-lg heading'>Metamask</label>
                    </div>
                    <div className='flex flex-col items-center w-1/2'>
                      <div className='flex flex-col items-center justify-end w-24 h-24'>
                        <InstallButton />
                      </div>
                      <label className='text-lg heading' onClick={handleConfirm}>Install</label>
                    </div>
                  </div>
                  <div className='flex flex-col pl-6 pr-8 mt-6 login-v2-strip'>
                    <label className='font-bold '>Clueless about how to connect your Wallet? See </label>
                    <Link href="\" className='cursor-pointer'>
                      <label className='ont-bold !underline underline-offset-2 cursor-pointer text-special-500'>Guide on Connecting to Metamask</label>
                    </Link>
                  </div>
                </div>
                <Transition
                  appear show={isOpened} as={Fragment}
                  enter="ease-in duration-300 delay-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                >
                  <div className='absolute z-20 w-20 h-20 rounded-full cursor-pointer -rotate-3 bottom-1 -right-0' onClick={handleDecline}>
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

export default ConnectMetamask;
