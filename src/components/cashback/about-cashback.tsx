import React, { useState, Fragment, useEffect } from "react";
import SocialButton from '../common/social-button';
import Image from 'next/image';
import BigHex from "@/public/referral/big-hex.png";
import Eclipse from "@/public/cashback/about-cashback-eclipse.png";
import RankingHex from "@/public/cashback/ranking.png";
import { Transition } from '@headlessui/react';
import PrimaryButton from "../common/primary-button";


const AboutCashback: React.FC = (): JSX.Element => {
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
        enter="transition-all ease-in duration-400 transition-delay-300"
        enterFrom="origin-center opacity-0"
        enterTo="opacity-100"
      >
        <div className='flex flex-col'>
          <label className='w-full px-2 mt-2 text-4xl text-justify'>
            Lorem ipsum dolor sit amet, consectetur.
          </label>
          <label className='w-full px-2 my-4 text-justify'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum volutpat quam vitae viverra. Pellentesque facilisis feugiat mauris, eu mollis orci dapibus in. Phasellus in pharetra metus. Etiam mattis, nulla sed lacinia bibendum, magna libero convallis mi, vitae porttitor nulla libero nec quam. Donec sit amet turpis iaculis, ultricies urna sed, elementum libero. Aenean ut nisi non nisi pulvinar placerat. Donec leo diam, efficitur id condimentum at, tincidunt id lectus.
          </label>
        </div>

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
          <div className='flex flex-row'>
            <div className='relative flex items-center justify-center w-full mx-4 md:w-1/3'>
              <div className='flex items-center justify-center referral-hex-big' >
                <Image src={BigHex} alt='hex' objectFit='contain' />
              </div>
              <div className=' referral-hex-text-container'>
                <Image src={Eclipse} alt='eclipse' objectFit='contain' width={80} height={80} />
                <label className='heading !text-title-500 text-xl truncate mt-2'>Maximus Helis</label>
                <label className='referral-hex-text-4'>Maximus Helis Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum vol Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum vol</label>
              </div>
            </div>
            <div className='relative flex items-center justify-center w-full mx-4 md:w-1/3 '>
              <div className='flex items-center justify-center referral-hex-big' >
                <Image src={BigHex} alt='hex' objectFit='contain' />
              </div>
              <div className=' referral-hex-text-container'>
                <Image src={Eclipse} alt='eclipse' objectFit='contain' width={80} height={80} />
                <label className='heading !text-title-500 text-xl truncate mt-2'>Maximus Helis</label>
                <label className='referral-hex-text-4'>Maximus Helis Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum vol Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum vol</label>
              </div>
            </div>
            <div className='relative flex items-center justify-center w-full mx-4 md:w-1/3 '>
              <div className='flex items-center justify-center referral-hex-big' >
                <Image src={BigHex} alt='hex' objectFit='contain' />
              </div>
              <div className=' referral-hex-text-container'>
                <Image src={Eclipse} alt='eclipse' objectFit='contain' width={80} height={80} />
                <label className='heading !text-title-500 text-xl truncate mt-2'>Maximus Helis</label>
                <label className='referral-hex-text-4'>Maximus Helis Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum vol Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum vol</label>
              </div>
            </div>
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
        <div className='flex flex-col'>
          <div className='flex flex-row items-center justify-center'>
            <label className='w-full px-2 mt-2 text-4xl text-justify'>
              Know how it works
            </label>
            <div >
              <PrimaryButton onClick={() => { }} size="sm">
                <label className="truncate heading text-sm">Play now</label>
              </PrimaryButton>
            </div>
          </div>

          <label className='w-full px-2 my-4 text-justify'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum volutpat quam vitae viverra. Pellentesque facilisis feugiat mauris, eu mollis orci dapibus in. Phasellus in pharetra metus. Etiam mattis, nulla sed lacinia bibendum, magna libero convallis mi, vitae porttitor nulla libero nec quam. Donec sit amet turpis iaculis, ultricies urna sed, elementum libero. Aenean ut nisi non nisi pulvinar placerat. Donec leo diam, efficitur id condimentum at, tincidunt id lectus.
          </label>
        </div>

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
          <div className='flex flex-row items-center justify-center w-full'>
            <div className='relative flex items-center justify-center w-full mr-16 md:w-1/3'>
              <div className='flex items-center justify-center referral-hex-big' >
                <Image src={BigHex} alt='hex' objectFit='contain' />
              </div>
              <div className=' referral-hex-text-container'>
                <SocialButton text="1" />
                <label className='heading !text-title-500 text-xl truncate'>Maximus Helis</label>
                <label className='referral-hex-text-4'>Maximus Helis Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum vol Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum vol</label>
              </div>
            </div>
            <div className='relative flex items-center justify-center w-full ml-16 md:w-1/3'>
              <div className='flex items-center justify-center referral-hex-big' >
                <Image src={BigHex} alt='hex' objectFit='contain' />
              </div>
              <div className=' referral-hex-text-container'>
                <SocialButton text="2" />
                <label className='heading !text-title-500 text-xl truncate'>Maximus Helis</label>
                <label className='referral-hex-text-4'>Maximus Helis Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum vol Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum vol</label>
              </div>
            </div>
          </div>
          <div className='relative flex items-center justify-center w-full mx-4 -mt-[16%] md:w-1/3'>
            <div className='flex items-center justify-center referral-hex-big' >
              <Image src={BigHex} alt='hex' objectFit='contain' />
            </div>
            <div className=' referral-hex-text-container'>
              <SocialButton text="3" />
              <label className='heading !text-title-500 text-xl truncate'>Maximus Helis</label>
              <label className='referral-hex-text-4'>Maximus Helis Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum vol Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum vol</label>
            </div>
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
        <div className='flex flex-col'>
          <label className='w-full px-2 mt-2 text-4xl text-justify'>
            Lorem ipsum dolor sit amet, consectetur.
          </label>
          <label className='w-full px-2 my-4 text-justify'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum volutpat quam vitae viverra. Pellentesque facilisis feugiat mauris, eu mollis orci dapibus in. Phasellus in pharetra metus. Etiam mattis, nulla sed lacinia bibendum, magna libero convallis mi, vitae porttitor nulla libero nec quam. Donec sit amet turpis iaculis, ultricies urna sed, elementum libero. Aenean ut nisi non nisi pulvinar placerat. Donec leo diam, efficitur id condimentum at, tincidunt id lectus.
          </label>
        </div>

      </Transition>
      <Transition
        show={isShowing}
        as={Fragment}
        appear={true}
        enter="transition-all ease-in duration-400 transition-delay-600"
        enterFrom="origin-center opacity-100 scale-y-0"
        enterTo="opacity-100 scale-y-100"
      >
        <div className='flex flex-col items-center justify-center w-full'>
          <div className='flex flex-row items-center justify-center w-full'>
            <div className='relative flex items-center justify-center w-full mr-8 md:w-1/6'>
              <div className='flex items-center justify-center referral-hex-big' >
                <Image src={RankingHex} alt='hex' objectFit='contain' />
              </div>
              <div className=' h-[30%] absolute flex items-center flex-col justify-end'>
                <label className='my-2 text-3xl truncate align-text-bottom '>3%</label>
                <label className='heading !text-special-500 text-2xl truncate align-text-bottom'>Name</label>
              </div>
            </div>
            <div className='relative flex items-center justify-center w-full mr-8 md:w-1/6'>
              <div className='flex items-center justify-center referral-hex-big' >
                <Image src={RankingHex} alt='hex' objectFit='contain' />
              </div>
              <div className=' h-[30%] absolute flex items-center flex-col justify-end'>
                <label className='my-2 text-3xl truncate align-text-bottom '>3%</label>
                <label className='heading !text-special-500 text-2xl truncate align-text-bottom'>Name</label>
              </div>
            </div>
            <div className='relative flex items-center justify-center w-full mr-8 md:w-1/6'>
              <div className='flex items-center justify-center referral-hex-big' >
                <Image src={RankingHex} alt='hex' objectFit='contain' />
              </div>
              <div className=' h-[30%] absolute flex items-center flex-col justify-end'>
                <label className='my-2 text-3xl truncate align-text-bottom '>3%</label>
                <label className='heading !text-special-500 text-2xl truncate align-text-bottom'>Name</label>
              </div>
            </div>
            <div className='relative flex items-center justify-center w-full mr-8 md:w-1/6'>
              <div className='flex items-center justify-center referral-hex-big' >
                <Image src={RankingHex} alt='hex' objectFit='contain' />
              </div>
              <div className=' h-[30%] absolute flex items-center flex-col justify-end'>
                <label className='my-2 text-3xl truncate align-text-bottom '>3%</label>
                <label className='heading !text-special-500 text-2xl truncate align-text-bottom'>Name</label>
              </div>
            </div>
            <div className='relative flex items-center justify-center w-full mr-8 md:w-1/6'>
              <div className='flex items-center justify-center referral-hex-big' >
                <Image src={RankingHex} alt='hex' objectFit='contain' />
              </div>
              <div className=' h-[30%] absolute flex items-center flex-col justify-end'>
                <label className='my-2 text-3xl truncate align-text-bottom '>3%</label>
                <label className='heading !text-special-500 text-2xl truncate align-text-bottom'>Name</label>
              </div>
            </div>
          </div>
          <div className='flex flex-row items-center justify-center w-full -mt-[20%]'>
            <div className='relative flex items-center justify-center w-full mr-8 md:w-1/6'>
              <div className='flex items-center justify-center referral-hex-big' >
                <Image src={RankingHex} alt='hex' objectFit='contain' />
              </div>
              <div className=' h-[30%] absolute flex items-center flex-col justify-end'>
                <label className='my-2 text-3xl truncate align-text-bottom '>3%</label>
                <label className='heading !text-special-500 text-2xl truncate align-text-bottom'>Name</label>
              </div>
            </div>
            <div className='relative flex items-center justify-center w-full mr-8 md:w-1/6'>
              <div className='flex items-center justify-center referral-hex-big' >
                <Image src={RankingHex} alt='hex' objectFit='contain' />
              </div>
              <div className=' h-[30%] absolute flex items-center flex-col justify-end'>
                <label className='my-2 text-3xl truncate align-text-bottom '>3%</label>
                <label className='heading !text-special-500 text-2xl truncate align-text-bottom'>Name</label>
              </div>
            </div>
            <div className='relative flex items-center justify-center w-full mr-8 md:w-1/6'>
              <div className='flex items-center justify-center referral-hex-big' >
                <Image src={RankingHex} alt='hex' objectFit='contain' />
              </div>
              <div className=' h-[30%] absolute flex items-center flex-col justify-end'>
                <label className='my-2 text-3xl truncate align-text-bottom '>3%</label>
                <label className='heading !text-special-500 text-2xl truncate align-text-bottom'>Name</label>
              </div>
            </div>
            <div className='relative flex items-center justify-center w-full mr-8 md:w-1/6'>
              <div className='flex items-center justify-center referral-hex-big' >
                <Image src={RankingHex} alt='hex' objectFit='contain' />
              </div>
              <div className=' h-[30%] absolute flex items-center flex-col justify-end'>
                <label className='my-2 text-3xl truncate align-text-bottom '>3%</label>
                <label className='heading !text-special-500 text-2xl truncate align-text-bottom'>Name</label>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div >
  );
};

export default AboutCashback;