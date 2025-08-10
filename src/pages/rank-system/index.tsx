import React, { useState, Fragment, useEffect } from "react";
import { GetServerSideProps, NextPage } from "next";
import { wrapper } from '@/redux/store';
// import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { Transition } from '@headlessui/react';
import Image from "next/image";
import LobbyCoins from "@/public/common/lobby.png";
import BigHex from "@/public/referral/big-hex.png";
import Eclipse from "@/public/cashback/about-cashback-eclipse.png";
import PrimaryButton from "@/components/common/primary-button";
import TaskFrame from "@/public/daily-tasks/task-frame-2.png";

const TopBar = dynamic(() => import('@/components/topbar'), { loading: () => <div /> });
const Footer = dynamic(() => import('@/components/common/footer'), { loading: () => <div /> });


interface PageProps {

}

const RankSystemPage: NextPage<PageProps> = (_props) => {
  const [isShowing, setShowing] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowing(true);
    }, 400);
  }, []);
  // const router = useRouter();
  // const { tab } = router.query;
  return (
    <Transition
      show={isShowing}
      as={Fragment}
      appear={true}
      enter="transition-all ease-in duration-200"
      enterFrom="origin-center opacity-0 scale-100 translate-y-[-10%]"
      enterTo="opacity-100 scale-100 translate-y-[0]"
    >
      <div className='w-[85%] md:w-[95%] lg:w-[90%] xl:w-[85%] frame pb-20 mb-10 min-h-screen' >
        <div className={`flex flex-col w-full  items-center relative justify-start px-3 sm:px-10 z-10`}>
          <div className='flex self-end mt-4 -mr-10'>
            <label className='my-account-label'>
              rank system
            </label>
          </div>
          <div className="flex flex-col items-start justify-start w-[90%] mt-12">
            <label className="text-4xl font-bold w-full">Lorem ipsum dolor sit amet, consectetur.</label>
            <label className="w-full mt-4">
              maximus felis. Nullam tempus nisi libero, ac commodo ante elementum eget. Ut justo elit, congue eu aliquam nec, blandit laoreet erat. Pellentesque congue nisi ex, rhoncus commodo eros aliquet ac. Maecenas egestas aliquam felis nec laoreet. Morbi vel efficitur leo. Maecenas vehicula, orci in consequat bibendum, quam odio efficitur dui, id mollis mi mi et enim. Aenean eleifend aliquet hendrerit. Aliquam aliquet mauris in iaculis suscipit.
            </label>

            <div className="mt-8 flex flex-row items-center justify-center w-full">
              <Image
                src={LobbyCoins}
                alt='hex'
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  objectFit: "contain"
                }} />
            </div>

            <div className="mt-16 flex flex-col items-center justify-between w-full">
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
                enter="transition-all ease-in duration-400 transition-delay-500"
                enterFrom="origin-center opacity-100 scale-y-0"
                enterTo="opacity-100 scale-y-100"
              >
                <div className='flex flex-col items-center justify-center w-full my-4'>
                  <div className='flex flex-row'>
                    <div className='relative flex items-center justify-center w-full mx-4 md:w-1/3'>
                      <div className='flex items-center justify-center referral-hex-big' >
                        <Image
                          src={BigHex}
                          alt='hex'
                          style={{
                            maxWidth: "100%",
                            height: "auto",
                            objectFit: "contain"
                          }} />
                      </div>
                      <div className=' referral-hex-text-container'>
                        <Image
                          src={Eclipse}
                          alt='eclipse'
                          width={80}
                          height={80}
                          style={{
                            maxWidth: "100%",
                            height: "auto",
                            objectFit: "contain"
                          }} />
                        <label className='heading !text-title-500 text-xl truncate mt-2'>Maximus Helis</label>
                        <label className='referral-hex-text-4'>Maximus Helis Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum vol Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum vol</label>
                      </div>
                    </div>
                    <div className='relative flex items-center justify-center w-full mx-4 md:w-1/3 '>
                      <div className='flex items-center justify-center referral-hex-big' >
                        <Image
                          src={BigHex}
                          alt='hex'
                          style={{
                            maxWidth: "100%",
                            height: "auto",
                            objectFit: "contain"
                          }} />
                      </div>
                      <div className=' referral-hex-text-container'>
                        <Image
                          src={Eclipse}
                          alt='eclipse'
                          width={80}
                          height={80}
                          style={{
                            maxWidth: "100%",
                            height: "auto",
                            objectFit: "contain"
                          }} />
                        <label className='heading !text-title-500 text-xl truncate mt-2'>Maximus Helis</label>
                        <label className='referral-hex-text-4'>Maximus Helis Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum vol Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum vol</label>
                      </div>
                    </div>
                    <div className='relative flex items-center justify-center w-full mx-4 md:w-1/3 '>
                      <div className='flex items-center justify-center referral-hex-big' >
                        <Image
                          src={BigHex}
                          alt='hex'
                          style={{
                            maxWidth: "100%",
                            height: "auto",
                            objectFit: "contain"
                          }} />
                      </div>
                      <div className=' referral-hex-text-container'>
                        <Image
                          src={Eclipse}
                          alt='eclipse'
                          width={80}
                          height={80}
                          style={{
                            maxWidth: "100%",
                            height: "auto",
                            objectFit: "contain"
                          }} />
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
                enter="transition-all ease-in duration-400 transition-delay-700"
                enterFrom="origin-center opacity-0"
                enterTo="opacity-100"
              >
                <div className='flex flex-col'>
                  <div className='flex flex-row items-center justify-center'>
                    <label className='w-full px-2 mt-2 text-4xl text-justify'>
                      About the levels
                    </label>
                  </div>

                  <label className='w-full px-2 my-4 text-justify'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum volutpat quam vitae viverra. Pellentesque facilisis feugiat mauris, eu mollis orci dapibus in. Phasellus in pharetra metus. Etiam mattis, nulla sed lacinia bibendum, magna libero convallis mi, vitae porttitor nulla libero nec quam. Donec sit amet turpis iaculis, ultricies urna sed, elementum libero. Aenean ut nisi non nisi pulvinar placerat. Donec leo diam, efficitur id condimentum at, tincidunt id lectus.
                  </label>
                </div>

              </Transition>

              <div className="mt-8 flex flex-row items-center justify-center w-full">
                <div className="flex flex-row items-center justify-center w-[22%] relative ">
                  <Image
                    src={TaskFrame}
                    alt='hex'
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      objectFit: "contain"
                    }} />
                  <div className="absolute w-full px-16 h-full items-end flex">
                    <div className="w-full h-3/4 flex items-center justify-center flex-col pb-4">
                      <label className="heading !text-title-500 text-center my-2">gambler II</label>
                      <label className="font-bold text-lg uppercase text-center">3%</label>
                      <label className="heading !text-special-500 !text-xs text-center mb-2">cashback</label>
                      <label className="font-bold text-lg uppercase text-center">10,000 USDT</label>
                      <label className="heading !text-special-500 !text-xs text-center mb-2">total wager</label>
                      <label className="font-bold text-lg uppercase text-center">5 usdt</label>
                      <label className="heading !text-special-500 !text-xs text-center mb-4">rank bonus</label>
                      <label className="heading !text-special-500 !text-xs text-center">personalization</label>
                      <label className="heading !text-special-500 !text-xs text-center mb-2">daily task</label>
                      <label className="font-bold text-lg uppercase text-center">3%</label>
                      <label className="heading !text-special-500 !text-xs text-center mb-4">rakeback</label>
                      <label className="heading !text-special-500 !text-xs text-center">charge x1.0</label>
                      <label className="heading !text-title-500 !text-xs text-center truncate my-2">exclusive promotions</label>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center w-1/3 relative px-8  ">
                  <Image
                    src={TaskFrame}
                    alt='hex'
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      objectFit: "contain"
                    }} />
                  <div className="absolute w-full px-12 h-full items-end flex">
                    <div className="w-full h-3/4 flex items-center justify-center flex-col pb-4">
                      <label className="heading !text-title-500 text-center my-2 !text-xl">gambler I</label>
                      <label className="font-bold text-lg uppercase text-center">3%</label>
                      <label className="heading !text-special-500 !text-lg text-center mb-2">cashback</label>
                      <label className="font-bold text-lg uppercase text-center">10,000 USDT</label>
                      <label className="heading !text-special-500 !text-lg text-center mb-2">total wager</label>
                      <label className="font-bold text-lg uppercase text-center">5 usdt</label>
                      <label className="heading !text-special-500 !text-lg text-center mb-4">rank bonus</label>
                      <label className="heading !text-special-500 !text-lg text-center">personalization</label>
                      <label className="heading !text-special-500 !text-lg text-center mb-2">daily task</label>
                      <label className="font-bold text-lg uppercase text-center">3%</label>
                      <label className="heading !text-special-500 !text-lg text-center mb-4">rakeback</label>
                      <label className="heading !text-special-500 !text-lg text-center">charge x1.0</label>
                      <label className="heading !text-title-500 !text-lg text-center truncate my-2">exclusive promotions</label>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center w-[22%] relative">
                  <Image
                    src={TaskFrame}
                    alt='hex'
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      objectFit: "contain"
                    }} />
                  <div className="absolute w-full px-16 h-full items-end flex">
                    <div className="w-full h-3/4 flex items-center justify-center flex-col pb-4">
                      <label className="heading !text-title-500 text-center my-2">gambler III</label>
                      <label className="font-bold text-lg uppercase text-center">3%</label>
                      <label className="heading !text-special-500 !text-xs text-center mb-2">cashback</label>
                      <label className="font-bold text-lg uppercase text-center">10,000 USDT</label>
                      <label className="heading !text-special-500 !text-xs text-center mb-2">total wager</label>
                      <label className="font-bold text-lg uppercase text-center">5 usdt</label>
                      <label className="heading !text-special-500 !text-xs text-center mb-4">rank bonus</label>
                      <label className="heading !text-special-500 !text-xs text-center">personalization</label>
                      <label className="heading !text-special-500 !text-xs text-center mb-2">daily task</label>
                      <label className="font-bold text-lg uppercase text-center">3%</label>
                      <label className="heading !text-special-500 !text-xs text-center mb-4">rakeback</label>
                      <label className="heading !text-special-500 !text-xs text-center">charge x1.0</label>
                      <label className="heading !text-title-500 !text-xs text-center truncate my-2">exclusive promotions</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div >
    </Transition >
  );
};

//@ts-ignore
RankSystemPage.getLayout = (children) => {
  return (
    <div className='relative flex flex-col w-screen'>
      <TopBar />
      <div className='flex flex-col items-center justify-center pt-20 overflow-y-auto scroll-smooth w-ful'>
        {children}
      </div>
      <Footer />
    </div>
  );
};


export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(_store => async (_context) => {
  return {
    props: {},
  };
});

export default RankSystemPage;