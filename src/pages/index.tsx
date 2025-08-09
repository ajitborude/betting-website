import React, { useState, Fragment, useEffect } from "react";
import { GetServerSideProps, NextPage } from "next";
import { wrapper } from '@/redux/store';
// import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { Transition } from '@headlessui/react';
import Image from 'next/image';
import LobbyCoins from "@/public/common/lobby.png";

const TopBar = dynamic(() => import('@/components/topbar'), { loading: () => <div /> });
const Footer = dynamic(() => import('@/components/common/footer'), { loading: () => <div /> });
const LobbyTabs = dynamic(() => import('@/components/lobby/lobby-tabs'), { loading: () => <div /> });
const DummyTabs = dynamic(() => import('@/components/lobby/dummy-tabs'), { loading: () => <div /> });

interface PageProps {

}

const LandingPage: NextPage<PageProps> = (_props) => {
  const [isShowing, setShowing] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowing(true);
    }, 400);
  }, []);

  return (
    <Transition
      show={isShowing}
      as={Fragment}
      appear={true}
      enter="transition-all ease-in duration-200"
      enterFrom="origin-center opacity-0 scale-100 translate-y-[-10%]"
      enterTo="opacity-100 scale-100 translate-y-[0]"
    >
      <div className='w-[85%] md:w-[95%] lg:w-[90%] xl:w-[75%] frame pb-20 mb-10 min-h-screen' >
        <div className={`flex flex-col w-full  items-center relative justify-start px-3 sm:px-10 z-10`}>

          <div className="mt-10 flex flex-row items-center justify-center w-full">
            <Image src={LobbyCoins} alt='hex' objectFit='contain' />
          </div>

          <div className="mt-10 flex flex-row items-center justify-center w-full">
            <LobbyTabs />
          </div >

          <div className=" flex flex-row items-center justify-center w-full">
            <DummyTabs />
          </div >

        </div >
      </div >
    </Transition >
  );
};

//@ts-ignore
LandingPage.getLayout = (children) => {
  return (
    <div className='relative flex flex-col w-screen'>
      <TopBar />
      <div className='flex flex-col items-center justify-center pt-20 overflow-y-auto scroll-smooth w-full'>
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

export default LandingPage;

