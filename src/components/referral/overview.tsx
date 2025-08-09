import React, { useState, Fragment, useEffect } from "react";
import { toast } from 'react-toastify';
import Icon from '../common/icon';
import SocialButton from '../common/social-button';
import SecondaryButton from '../common/secondary-button';
import Image from 'next/image';
import SmallHex from "@/public/referral/small-hex.png";
import BigHex from "@/public/referral/big-hex.png";
import { Transition } from '@headlessui/react';

const referralLink = 'https://wagerverse.xyz.net/bike/approval?beds=battle&blood=bell';

const OverviewPage: React.FC = (): JSX.Element => {
  const [isShowing, setShowing] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowing(true);
    }, 600);
  }, []);
  return (
    <div className="flex flex-col w-full h-full">
      <Transition
        show={isShowing}
        as={Fragment}
        appear={true}
        enter="transition-all ease-in duration-400"
        enterFrom="origin-center opacity-0"
        enterTo="opacity-100"
      >
        <div className='flex flex-col w-full overview-frame'>
          <div className='flex flex-col w-full px-4 pt-3'>
            <label className='w-full mb-4 text-right heading !text-title-500 text-xl '>My Statistics</label>
            <div className='flex flex-col items-center justify-between mb-6 md:flex-row'>
              <div className='flex flex-col items-start justify-center w-full py-6 md:py-0 md:items-center md:w-1/5'>
                <label className='mb-4 text-xl'>1</label>
                <label className='heading !text-special-500 text-sm'>Referrals</label>
              </div>
              <div className='flex flex-col items-start justify-center w-full py-6 md:py-0 md:items-center md:w-2/5'>
                <label className='flex flex-row mb-4 text-2xl'>
                  <Icon source='bitcoin' />
                  0.123423424134 BTC
                </label>
                <label className='heading !text-special-500 text-sm'>Total Wager</label>
              </div>
              <div className='flex flex-col items-start justify-center w-full py-6 md:py-0 md:items-center md:w-2/5'>
                <label className='flex flex-row mb-4 text-2xl'>
                  <Icon source='bitcoin' />
                  0.124134324234523 BTC
                </label>
                <label className='heading !text-special-500 text-sm'>Total Earned</label>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-center justify-between md:flex-row '>
            <div className='flex flex-row items-start justify-start w-full px-4 border-r md:w-[60%] border-r-special-400 border-opacity-20'>
              <Transition
                show={isShowing}
                as={Fragment}
                appear={true}
                enter="transition-all ease-in duration-400 transition-delay-200"
                enterFrom="origin-center opacity-0 translate-x-[-20%]"
                enterTo="opacity-100 translate-x-0"
              >
                <div className='flex flex-col w-[70%]'>
                  <label className='w-full my-2 font-bold text-left'>My Referral Link</label>
                  <div className='flex flex-row items-center justify-between w-full py-2 input-bg'>
                    <label className='py-2 pl-20 truncate 2xl:pl-24 '>
                      {referralLink}
                    </label>
                    <div className='px-4 mx-2 text-sm btn btn-ghost btn-sm heading'
                      onClick={() => {
                        navigator.clipboard.writeText(referralLink);
                        toast.info('Copied!');
                      }}>Copy</div>
                  </div>
                </div>
              </Transition>
              <Transition
                show={isShowing}
                as={Fragment}
                appear={true}
                enter="transition-all ease-in duration-400 transition-delay-200"
                enterFrom="origin-center opacity-0 scale-0"
                enterTo="opacity-100 scale-100"
              >
                <div className='flex flex-col items-center justify-start w-1/3 2xl:w-1/4'>
                  <div className='flex flex-row justify-between w-[75%] 2xl:w-[70%]'>
                    <SocialButton type='telegram' size='md' />
                    <SocialButton type='twitter' size='md' />
                  </div>
                  <div className='flex flex-row -mt-6 justify-center w-[75%] 2xl:w-[70%]'>
                    <SocialButton type='reddit' size='md' />
                  </div>
                </div>
              </Transition>
            </div>
            <Transition
              show={isShowing}
              as={Fragment}
              appear={true}
              enter="transition-all ease-in duration-400 transition-delay-200"
              enterFrom="origin-center opacity-0 translate-x-[-20%]"
              enterTo="opacity-100 translate-x-0"
            >
              <div className='flex flex-col items-center justify-center w-[40%] px-12 2xl:px-18 py-2 '>
                <label className='w-full my-2 font-bold text-left'> Promo</label>
                <SecondaryButton onClick={() => { }}>
                  <div className='flex flex-row items-center justify-center'>
                    <Icon source='dropbox' />
                    <label className='pb-2 text-sm truncate heading'>View promo Materials</label>
                  </div>
                </SecondaryButton>
              </div>
            </Transition>
          </div>
        </div>
      </Transition>
      <Transition
        show={isShowing}
        as={Fragment}
        appear={true}
        enter="transition-all ease-in duration-400 transition-delay-300"
        enterFrom="origin-center opacity-0"
        enterTo="opacity-100"
      >
        <label className='w-full px-2 my-6 text-justify'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum volutpat quam vitae viverra. Pellentesque facilisis feugiat mauris, eu mollis orci dapibus in. Phasellus in pharetra metus. Etiam mattis, nulla sed lacinia bibendum, magna libero convallis mi, vitae porttitor nulla libero nec quam. Donec sit amet turpis iaculis, ultricies urna sed, elementum libero. Aenean ut nisi non nisi pulvinar placerat. Donec leo diam, efficitur id condimentum at, tincidunt id lectus.
        </label>
      </Transition>
      <Transition
        show={isShowing}
        as={Fragment}
        appear={true}
        enter="transition-all ease-in duration-400 transition-delay-600"
        enterFrom="origin-center opacity-100 scale-y-0"
        enterTo="opacity-100 scale-y-100"
      >
        <div className='flex flex-col items-center justify-center w-full my-4'>
          <div className='flex flex-row items-center justify-center w-[55%]'>
            <div className='flex items-center justify-center mr-20 2xl:mr-24 referral-hex-small' >
              <Image src={SmallHex} alt='hex' objectFit='contain' />
            </div>
            <div className='flex items-center justify-center ml-20 2xl:ml-24 referral-hex-small' >
              <Image src={SmallHex} alt='hex' objectFit='contain' />
            </div>
          </div>

          <div className='flex flex-row -my-28'>
            <div className='relative flex items-center justify-center w-full mx-4 md:w-1/3'>
              <div className='flex items-center justify-center referral-hex-big' >
                <Image src={BigHex} alt='hex' objectFit='contain' />
              </div>
              <div className=' referral-hex-text-container'>
                <label className='referral-hex-text-1'>For </label>
                <label className='referral-hex-text-2'>Centralized Games</label>
                <label className='referral-hex-text-3 heading'>1.5%</label>
                <label className='referral-hex-text-4'>of the rake generated by the referee on the winning bet.</label>
              </div>
            </div>
            <div className='relative flex items-center justify-center w-full mx-4 md:w-1/3 '>
              <div className='flex items-center justify-center referral-hex-big' >
                <Image src={BigHex} alt='hex' objectFit='contain' />
              </div>
              <div className='referral-hex-text-container'>
                <label className='referral-hex-text-1'>For </label>
                <label className='referral-hex-text-2'>In-house Games</label>
                <label className='referral-hex-text-3 heading'>15%</label>
                <label className='referral-hex-text-4'>of the rake generated by the referee on the winning bet.</label>
              </div>
            </div>
            <div className='relative flex items-center justify-center w-full mx-4 md:w-1/3 '>
              <div className='flex items-center justify-center referral-hex-big' >
                <Image src={BigHex} alt='hex' objectFit='contain' />
              </div>
              <div className='referral-hex-text-container'>
                <label className='referral-hex-text-1'>For </label>
                <label className='referral-hex-text-2'>Token Mining</label>
                <label className='referral-hex-text-3 heading'>5%</label>
                <label className='referral-hex-text-4'>of the rake generated by the referee on the winning bet.</label>
              </div>
            </div>
          </div>

          <div className='flex flex-row items-center justify-center w-[55%]'>
            <div className='flex items-center justify-center mr-20 2xl:mr-24 referral-hex-small' >
              <Image src={SmallHex} alt='hex' objectFit='contain' />
            </div>
            <div className='flex items-center justify-center ml-20 2xl:ml-24 referral-hex-small' >
              <Image src={SmallHex} alt='hex' objectFit='contain' />
            </div>
          </div>
        </div>
      </Transition>
      <Transition
        show={isShowing}
        as={Fragment}
        appear={true}
        enter="transition-all ease-in duration-400 transition-delay-900"
        enterFrom="origin-center opacity-0"
        enterTo="opacity-100"
      >
        <div className='flex flex-row items-center justify-center w-full py-10 mt-10 overview-strip mb-52'>
          <div className='w-1/2 pr-10'>
            <label className='w-full text-justify '>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum volutpat quam vitae viverra. Pellentesque facilisis feugiat mauris, eu mollis orci dapibus in. Phasellus in pharetra metus. Etiam mattis, nulla sed lacinia bibendum, magna libero convallis mi, vitae porttitor nulla libero nec quam. Donec sit amet turpis iaculis, ultricies urna sed, elementum libero.

              Aenean ut nisi non nisi pulvinar placerat. Donec leo diam, efficitur id condimentum at, tincidunt id lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum volutpat quam vitae viverra.
            </label>
          </div>
          <div className='flex items-center justify-center referral-hex-small' >
            <Image src={SmallHex} alt='hex' objectFit='contain' />
          </div>
          <div className='flex items-center self-start justify-center -ml-10 w-28 h-28' >
            <Image src={SmallHex} alt='hex' objectFit='contain' />
          </div>
        </div>
      </Transition>
    </div >
  );
};

export default OverviewPage;;