import React, { useState, Fragment, useEffect } from "react";
import { GetServerSideProps, NextPage } from "next";
import { wrapper } from '@/redux/store';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { Transition } from '@headlessui/react';


const TopBar = dynamic(() => import('@/components/topbar'), { loading: () => <div /> });
const Footer = dynamic(() => import('@/components/common/footer'), { loading: () => <div /> });
const AccountTabs = dynamic(() => import('@/components/account/account-tabs'), { loading: () => <div /> });


interface PageProps {

}

const AccountPage: NextPage<PageProps> = (_props) => {
  const [isShowing, setShowing] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowing(true);
    }, 400);
  }, []);
  const router = useRouter();
  const { tab } = router.query;
  return (
    <Transition
      show={isShowing}
      as={Fragment}
      appear={true}
      enter="transition-all ease-in duration-200"
      enterFrom="origin-center opacity-0 scale-100 translate-y-[-10%]"
      enterTo="opacity-100 scale-100 translate-y-[0]"
    >
      <div className='w-[85%] md:w-[95%] lg:w-[90%] xl:w-[85%] frame pb-20 mb-10 min-h-[80vh]' >
        <div className={`flex flex-col w-full  items-center relative justify-start px-3 sm:px-10 z-10`}>
          <div className='flex self-end mt-4 -mr-10'>
            <label className='my-account-label'>
              My Account
            </label>
          </div>
          <AccountTabs defaultTab={parseInt(tab as string, 10)} />
        </div>
      </div>
    </Transition >
  );
};

//@ts-ignore
AccountPage.getLayout = (children) => {
  return (
    <div className='relative flex flex-col w-screen'>
      <TopBar />
      <div className='pt-20 overflow-y-auto scroll-smooth flex flex-col items-center justify-center w-ful'>
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

export default AccountPage;