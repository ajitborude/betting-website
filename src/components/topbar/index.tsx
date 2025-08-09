import React, { Fragment, useEffect, useState } from 'react';
import useModal from '@/hooks/useModal';
// import { useAppSelector } from '@/hooks/common';
// import { selectIsAuthorized } from '@/redux/slices/auth';
import Dropdown from '../account/account-menu';
import Image from 'next/image';
import Avatar from '@/public/header/avatar.png';
import { Transition } from '@headlessui/react';
import HamMenuButton from '../common/ham-menu-button';
import SecondaryButton from '../common/secondary-button';
import Wallet from '@/public/icons/wallet.png';

interface TopBarProps {
}

const TopBar: React.FC<TopBarProps> = (): JSX.Element => {
  const { open } = useModal();
  // const router = useRouter();
  // const isAuthorized = useAppSelector(selectIsAuthorized);
  // const user: any = useAppSelector(selectUser);
  const [isShowing, setShowing] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowing(true);
    }, 200);
  }, []);
  const openConnectMetamask = () => {
    open({ modalType: 'CONNECT_METAMASK', modalProps: {} });
  };

  // const handleAuthModal = async (isLogin: boolean) => {
  //   router.push(`/login?isLogin=${isLogin}`);
  //   // await open({
  //   //   modalType: "AUTH", modalProps: {
  //   //     isLogin
  //   //   }
  //   // });
  // };


  return (
    <>
      <Transition
        show={isShowing}
        as={Fragment}
        appear={true}
        enter="transition-all ease-in duration-200"
        enterFrom="origin-top translate-y-[-100%]"
        enterTo="translate-y-[0]"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >

        <div className='flex items-center min-h-[75px] w-screen bg-transparent fixed z-50 justify-start px-1 header-bg pb-3'>
          <Transition
            show={isShowing}
            as={Fragment}
            appear={true}
            enter="transition-all ease-in duration-200 delay-200"
            enterFrom="origin-left translate-x-[-100%]"
            enterTo="translate-x-[0]"
          >
            <div className='flex flex-row items-center drawer-button w-10 h-10 ml-2]'>
              <label htmlFor="wager-drawer" className="btn btn-ghost p-0 w-full">
                <HamMenuButton />
              </label>
            </div>
          </Transition>
          <div className='flex w-[40%] lg:w-[32%] xl:w-[25%] 2xl:w-[20%] group cursor-pointer ml-3'>
            <SecondaryButton onClick={() => {
              openConnectMetamask();
            }} >
              <div className='flex flex-row items-center justify-center h-full w-full'>
                <div className='pb-2 flex items-center w-9 h-9'>
                  <Image
                    src={Wallet}
                    width={35}
                    height={35}
                    objectFit='contain'
                    alt='wallet' />
                </div>
                <div className="flex self-center">
                  <label className='connect-wallet-btn-label'>Connect To Wallet</label>
                </div>
              </div>
            </SecondaryButton>
          </div>
          <Transition
            show={isShowing}
            as={Fragment}
            appear={true}
            enter="transition-all ease-in duration-200 delay-500"
            enterFrom="origin-center scale-x-125 opacity-0"
            enterTo="scale-x-100 opacity-100"
          >
            <div className=' absolute h-[60%] w-[17%] top-0 right-[7%] flex justify-around items-center'>
              <label className='heading text-lg'>W</label>
              <label className='heading text-lg'>A</label>
              <label className='heading text-lg'>G</label>
              <label className='heading text-lg'>E</label>
              <label className='heading text-lg'>R</label>
            </div>
          </Transition>
          <Transition
            show={isShowing}
            as={Fragment}
            appear={true}
            enter="transition-all ease-in duration-200 delay-200"
            enterFrom="origin-top translate-y-[-100%] opacity-0"
            enterTo="translate-y-[0] opacity-100"
          >
            <div className=' absolute !max-h-[36px] h-9 min-h-0 w-[18.6%] bottom-0.5 right-[6.4%] rounded-none p-0'>
              <Dropdown />
            </div>
          </Transition >

          <Transition
            show={isShowing}
            as={Fragment}
            appear={true}
            enter="transition-all ease-in duration-200 delay-200"
            enterFrom="origin-center scale-150 opacity-0"
            enterTo="scale-100 opacity-100"
          >
            <div className='bg-transparent absolute z-10 flex items-center justify-center right-0 
        h-12 w-12 top-[35%] md:h-16 md:w-16 md:top-[25%] lg:h-20 lg:w-20 lg:top-[8%] xls:h-24 xls:w-24 xls:top-[5%]'>
              <Image src={Avatar} layout="fill" alt="avatar" />
            </div>
          </Transition >
        </div>
      </Transition >

    </>
  );
};

export default TopBar;
