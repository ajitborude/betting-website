import React, { useState, Fragment, useEffect } from "react";
import { GetServerSideProps, NextPage } from "next";
import { wrapper } from '@/redux/store';
// import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { Transition } from '@headlessui/react';
import Image from "next/image";
import HexFrame from "@/public/daily-tasks/hex-frame.png";
import HexProgress from "@/public/daily-tasks/hex-progress.png";
import TaskRectangle from "@/public/daily-tasks/task-rectangle.png";
import TaskFrame from "@/public/daily-tasks/task-frame.png";

import PrimaryButton from "@/components/common/primary-button";

const TopBar = dynamic(() => import('@/components/topbar'), { loading: () => <div /> });
const Footer = dynamic(() => import('@/components/common/footer'), { loading: () => <div /> });


interface PageProps {

}

const DailyTasksPage: NextPage<PageProps> = (_props) => {
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
              daily tasks
            </label>
          </div>
          <div className="flex flex-col items-start justify-start w-[90%] mt-12">
            <label className="text-4xl font-bold w-1/4">Lorem ipsum dolor sit amet, consectetur.</label>
            <label className="w-full mt-4">maximus felis. Nullam tempus nisi libero, ac commodo ante elementum eget. Ut justo elit, congue eu aliquam nec, blandit laoreet erat. Pellentesque congue nisi ex, rhoncus commodo eros aliquet ac. Maecenas egestas aliquam felis nec laoreet. Morbi vel efficitur leo. Maecenas vehicula, orci in consequat bibendum, quam odio efficitur dui, id mollis mi mi et enim. Aenean eleifend aliquet hendrerit. Aliquam aliquet mauris in iaculis suscipit.</label>
            <div className="mt-8 flex flex-row items-center justify-start w-full">
              <div className="flex flex-row items-center justify-center relative w-1/4">
                <div className="scale-125">
                  <Image
                    src={HexFrame}
                    alt='hex'
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      objectFit: "contain"
                    }} />
                </div>
                <div className="absolute scale-[95%]">
                  <Image
                    src={HexProgress}
                    alt='hex'
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      objectFit: "contain"
                    }} />
                </div>
                <div className="absolute w-full p-20 flex flex-col items-center justify-center">
                  <label className="heading text-3xl mb-2">
                    <label className="text-6xl">2
                    </label>/12
                  </label>
                  <label className="heading !text-title-500 text-xl text-center mb-4">completed daily tasks</label>
                </div>

              </div>
              <div className=" flex flex-row items-center justify-start absolute left-[24%] w-[70%]">
                <Image
                  src={TaskRectangle}
                  alt='hex'
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    objectFit: "fill"
                  }} />
                <div className="flex flex-row items-center justify-end absolute w-5/6 left-[7%] px-10 py-4">
                  <div className="flex flex-col items-center justify-center w-2/4">
                    <label className="heading !text-special-500 mb-6"> Daily Task countdown</label>
                    <div className="flex flex-row items-center justify-center mb-4 w-full">
                      <label className="heading text-5xl w-1/5 text-center">12</label>
                      <label className="heading text-5xl w-1/5 text-center">12</label>
                      <label className="heading text-5xl w-1/5 text-center">12</label>
                    </div>
                    <div className="flex flex-row items-center justify-center  w-full">
                      <label className="heading w-1/5 text-center !text-title-500 text-sm">hrs</label>
                      <label className="heading w-1/5 text-center !text-title-500 text-sm">mins</label>
                      <label className="heading w-1/5 text-center !text-title-500 text-sm">secs</label>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center w-1/4">
                    <label className="heading !text-special-500">withdrawls</label>
                    <label className="text-sm my-4 mx-4">
                      maximus felis. Nullam tempus nisi libero, ac commodo ante elementum eget. Ut justo elit, congue eu aliquam nec.
                    </label>
                    <PrimaryButton onClick={() => { }} size="sm">
                      <label className="truncate heading text-sm">Draw 1.00 AVAX</label>
                    </PrimaryButton>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-row items-center justify-between w-full px-12">
              <div className="flex flex-row items-center justify-center  w-1/4 px-12 relative">
                <Image
                  src={TaskFrame}
                  alt='hex'
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    objectFit: "contain"
                  }} />
                <div className="absolute  w-full px-16 h-full">
                  <div className=" w-full h-[50%] flex items-center justify-center">
                    <label className="heading !text-special-500">Task 1</label>
                  </div>
                  <div className=" w-full h-[25%]">
                    <label className="text-sm">
                      maximus felis. Nullam tempus nisi libero, ac commodo ante elementum eget. Ut justo elit, congue eu aliquam nec.
                    </label>
                  </div>
                  <div className=" w-full h-[25%] flex items-center justify-center">
                    <PrimaryButton onClick={() => { }} size="sm">
                      <label className="truncate heading text-xs">Draw 1.00 AVAX</label>
                    </PrimaryButton>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-center  w-1/4 px-12 relative">
                <Image
                  src={TaskFrame}
                  alt='hex'
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    objectFit: "contain"
                  }} />
                <div className="absolute  w-full px-16 h-full">
                  <div className=" w-full h-[50%] flex items-center justify-center">
                    <label className="heading !text-special-500">Task 2</label>
                  </div>
                  <div className=" w-full h-[25%]">
                    <label className="text-sm">
                      maximus felis. Nullam tempus nisi libero, ac commodo ante elementum eget. Ut justo elit, congue eu aliquam nec.
                    </label>
                  </div>
                  <div className=" w-full h-[25%] flex items-center justify-center">
                    <PrimaryButton onClick={() => { }} size="sm">
                      <label className="truncate heading text-xs">Draw 1.00 AVAX</label>
                    </PrimaryButton>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-center  w-1/4 px-12 relative">
                <Image
                  src={TaskFrame}
                  alt='hex'
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    objectFit: "contain"
                  }} />
                <div className="absolute  w-full px-16 h-full">
                  <div className=" w-full h-[50%] flex items-center justify-center">
                    <label className="heading !text-special-500">Task 3</label>
                  </div>
                  <div className=" w-full h-[25%]">
                    <label className="text-sm">
                      maximus felis. Nullam tempus nisi libero, ac commodo ante elementum eget. Ut justo elit, congue eu aliquam nec.
                    </label>
                  </div>
                  <div className=" w-full h-[25%] flex items-center justify-center">
                    <PrimaryButton onClick={() => { }} size="sm">
                      <label className="truncate heading text-xs">Draw 1.00 AVAX</label>
                    </PrimaryButton>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-center  w-1/4 px-12 relative">
                <Image
                  src={TaskFrame}
                  alt='hex'
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    objectFit: "contain"
                  }} />
                <div className="absolute  w-full px-16 h-full">
                  <div className=" w-full h-[50%] flex items-center justify-center">
                    <label className="heading !text-special-500">Task 4</label>
                  </div>
                  <div className=" w-full h-[25%]">
                    <label className="text-sm">
                      maximus felis. Nullam tempus nisi libero, ac commodo ante elementum eget. Ut justo elit, congue eu aliquam nec.
                    </label>
                  </div>
                  <div className=" w-full h-[25%] flex items-center justify-center">
                    <PrimaryButton onClick={() => { }} size="sm">
                      <label className="truncate heading text-xs">Draw 1.00 AVAX</label>
                    </PrimaryButton>
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
DailyTasksPage.getLayout = (children) => {
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

export default DailyTasksPage;