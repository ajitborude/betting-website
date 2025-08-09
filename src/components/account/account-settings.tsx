import React, { useState, Fragment, useEffect } from "react";
import useModal from '@/hooks/useModal';
import { useAppSelector } from '@/hooks/common';
import { selectUser } from '@/redux/slices/auth';
import Image from 'next/image';
import Avatar from '@/public/header/avatar.png';
import Icon from '../common/icon';
import SecondaryButton from '../common/secondary-button';
import { Transition } from '@headlessui/react';


const AccountSettings: React.FC = (): JSX.Element => {
  const [isShowing, setShowing] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowing(true);
    }, 600);
  }, []);
  const user: any = useAppSelector(selectUser);
  const { open } = useModal();

  // const openChangeUsername = () => {
  //   open({ modalType: 'CHANGE_USERNAME', modalProps: {} });
  // };

  const openChangePhone = () => {
    open({ modalType: 'CHANGE_PHONE', modalProps: {} });
  };

  const openChangeEmail = () => {
    open({ modalType: 'CHANGE_EMAIL', modalProps: {} });
  };

  const openChangePassword = () => {
    open({ modalType: 'CHANGE_PASSWORD', modalProps: {} });
  };

  const openTwoFactorAuth = () => {
    open({ modalType: 'TWO_FACTOR_AUTH', modalProps: {} });
  };

  return (
    <div className="grid w-full h-full grid-cols-3 grid-rows-1 mt-6 2xl:gap-2">
      <Transition
        show={isShowing}
        as={Fragment}
        appear={true}
        enter="transition-all ease-in duration-400"
        enterFrom="origin-center opacity-0 scale-125"
        enterTo="opacity-100 scale-100"
      >
        <div className='relative flex items-center justify-center flex-col mt-10 p-4'>
          <div className='flex flex-col items-center w-full h-full py-3 frame-sm'>
            <div className="flex self-end">
              <label className='my-account-sub-label'> My Ranking</label>
            </div>
            <div className='flex flex-col items-center justify-center w-[95%] h-[90%] py-2'>
              <label className='w-full text-center text-red-500'>TBA</label>
            </div>
          </div>
        </div>
      </Transition>
      <Transition
        show={isShowing}
        as={Fragment}
        appear={true}
        enter="transition-all ease-in duration-400"
        enterFrom="origin-center opacity-0 scale-125"
        enterTo="opacity-100 scale-100"
      >
        <div className='relative flex items-center justify-center mt-10 p-3'>
          <div className='bg-transparent absolute flex items-center justify-center left-0 h-32 w-32 -top-6 z-10'>
            <Image src={Avatar} layout="fill" alt="avatar" />
          </div>
          <div className='flex flex-col items-center justify-center w-full h-full pt-24 frame-sm'>
            <Transition
              show={isShowing}
              as={Fragment}
              appear={true}
              enter="transition-all ease-in duration-200 delay-200"
              enterFrom="origin-bottom opacity-0"
              enterTo="opacity-100"
            >
              <div className='flex items-center justify-between w-full account-strip py-1 mt-2 px-2'>
                <span className='flex flex-row items-center justify-start w-4/5'>
                  <Icon source='mobile' />
                  <label className='ml-1 text-sm truncate'>+91 8876675654</label>
                </span>
                <div className='w-1/5 btn btn-ghost btn-sm'
                  onClick={openChangePhone}>
                  <Icon source='edit' />
                </div>
              </div>
            </Transition>
            <Transition
              show={isShowing}
              as={Fragment}
              appear={true}
              enter="transition-all ease-in duration-200 delay-400"
              enterFrom="origin-bottom opacity-0"
              enterTo="opacity-100"
            >
              <div className='flex items-center justify-between w-full account-strip py-1 mt-4 px-2'>
                <span className='flex flex-row items-center justify-start w-4/5'>
                  <Icon source='email' />
                  <label className='ml-1 text-sm truncate'>{user.email ? user.email : 'wageruser@wagermail.com'}</label>
                </span>
                <div className='w-1/5 btn btn-ghost btn-sm'
                  onClick={openChangeEmail}>
                  <Icon source='edit' />
                </div>
              </div>
            </Transition>
            <Transition
              show={isShowing}
              as={Fragment}
              appear={true}
              enter="transition-all ease-in duration-200 delay-600"
              enterFrom="origin-bottom opacity-0"
              enterTo="opacity-100"
            >
              <div className='flex items-center justify-between w-full mt-4 px-4'>
                <div className='flex flex-row my-2 items-start w-full justify-center' >
                  <div className="custom-checkbox ">
                    <input type="checkbox"
                      name='tnc'
                      value='tnc'
                      id="tnc"
                      // checked={isAccepted}
                      onChange={openTwoFactorAuth} />
                    <label htmlFor="tnc" />
                  </div>
                  <label className='font-bold text-sm'>
                    Turn on 2 Factor Authentication {" "}
                    <label className='underline cursor-pointer underline-offset-2 text-special-500'>Know More</label>
                  </label>
                </div>
              </div>
            </Transition>
            <Transition
              show={isShowing}
              as={Fragment}
              appear={true}
              enter="transition-all ease-in duration-200 delay-800"
              enterFrom="origin-bottom opacity-0"
              enterTo="opacity-100"
            >
              <div className='flex mt-2 mb-6 w-[75%] 2xl:w-[70%]'>
                <SecondaryButton onClick={openChangePassword} size='md'>
                  <label className='change-password-label text-center truncate'>
                    Change Password
                  </label>
                </SecondaryButton>
              </div>
            </Transition>
          </div>
        </div>
      </Transition >
      <Transition
        show={isShowing}
        as={Fragment}
        appear={true}
        enter="transition-all ease-in duration-400"
        enterFrom="origin-center opacity-0 scale-125"
        enterTo="opacity-100 scale-100"
      >
        <div className='relative flex items-center justify-center flex-col mt-10 p-4'>
          <div className='flex flex-col items-center w-full h-full py-3 frame-sm'>
            <div className="flex self-end">
              <label className='my-account-sub-label'> My Cashback</label>
            </div>
            <div className='flex flex-col items-center justify-center w-[95%] h-[90%] py-2'>
              <label className='w-full text-center text-red-500'>TBA</label>
            </div>
          </div>
        </div>
      </Transition>
    </div >
  );
};

export default AccountSettings;