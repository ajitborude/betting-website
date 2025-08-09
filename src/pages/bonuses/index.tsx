import React, { useState, Fragment, useEffect } from "react";
import { GetServerSideProps, NextPage } from "next";
import { wrapper } from '@/redux/store';
// import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { Transition } from '@headlessui/react';

import { addDays, format, subDays } from 'date-fns';

const TopBar = dynamic(() => import('@/components/topbar'), { loading: () => <div /> });
const Footer = dynamic(() => import('@/components/common/footer'), { loading: () => <div /> });


const tableHeaders = ['date', 'deposit amount', 'bonus code', 'bonus amount', 'wager', 'expiry date'];

const tableData = [
  {
    id: 1,
    date: new Date(),
    deposit: '100 AVAX',
    bonus_code: 'extrabonus',
    bonus_amount: '100 AVAX',
    wager: '100 AVAX',
    expiry: new Date(),
  },
  {
    id: 2,
    date: new Date(),
    deposit: '100 AVAX',
    bonus_code: 'extrabonus',
    bonus_amount: '100 AVAX',
    wager: '100 AVAX',
    expiry: new Date(),
  },
  {
    id: 3,
    date: new Date(),
    deposit: '100 AVAX',
    bonus_code: 'extrabonus',
    bonus_amount: '100 AVAX',
    wager: '100 AVAX',
    expiry: new Date(),
  },
  {
    id: 4,
    date: new Date(),
    deposit: '100 AVAX',
    bonus_code: 'extrabonus',
    bonus_amount: '100 AVAX',
    wager: '100 AVAX',
    expiry: new Date(),
  },
  {
    id: 5,
    date: new Date(),
    deposit: '100 AVAX',
    bonus_code: 'extrabonus',
    bonus_amount: '100 AVAX',
    wager: '100 AVAX',
    expiry: new Date(),
  },
];

interface PageProps {

}

const BonusPage: NextPage<PageProps> = (_props) => {
  const [isShowing, setShowing] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowing(true);
    }, 400);
  }, []);
  // const router = useRouter();
  // const { tab } = router.query;

  const renderTable = () => {
    return (
      <div className="table-wrapper">
        <table className="table-custom">
          <Transition
            show={isShowing}
            as={Fragment}
            appear={true}
            enter="transition-opacity duration-400 transition-delay-200"
            enterFrom="origin-center opacity-0"
            enterTo="opacity-100"
          >
            <thead className="table-head">
              <tr>
                {tableHeaders.map((header, _index) => {
                  return (
                    <Transition
                      key={header}
                      show={isShowing}
                      as={Fragment}
                      appear={true}
                      enter="transition-all ease-in-out duration-200 transition-delay-400"
                      enterFrom="opacity-0 scale-x-75"
                      enterTo="opacity-100 scale-x-100"
                    >
                      <th scope="col" className='px-6 py-3.5 truncate heading !text-special-500 text-center' key={header}>
                        {header}
                      </th>
                    </Transition>
                  );
                })}
              </tr>
            </thead>
          </Transition>
          <tbody>
            {tableData.map((record, index) => {
              const delay = (((index + 1) * 50) + 200)
              return (
                <Fragment key={record.id}>
                  <Transition
                    show={isShowing}
                    as={Fragment}
                    appear={true}
                    enter={`transition-all ease-in duration-200 transition-delay-${delay}`}
                    enterFrom="origin-center opacity-0"
                    enterTo="opacity-100"
                  >
                    <tr className='table-tr'>
                      <Transition
                        show={isShowing}
                        as={Fragment}
                        appear={true}
                        enter={`transition-all ease-in duration-200 transition-delay-${delay + 200}`}
                        enterFrom="opacity-0 scale-x-75"
                        enterTo="opacity-100 scale-x-100"
                      >
                        <td className="text-center truncate table-td font-bold">
                          <label className="font-bold">{format(subDays(record.date, index), 'dd/MM/yyyy')}</label>
                        </td>
                      </Transition>
                      <Transition
                        show={isShowing}
                        as={Fragment}
                        appear={true}
                        enter={`transition-all ease-in duration-200 transition-delay-${delay + 200}`}
                        enterFrom="opacity-0 scale-x-75"
                        enterTo="opacity-100 scale-x-100"
                      >
                        <td className="text-center truncate table-td">
                          {record.deposit}
                        </td>
                      </Transition>
                      <Transition
                        show={isShowing}
                        as={Fragment}
                        appear={true}
                        enter={`transition-all ease-in duration-200 transition-delay-${delay + 200}`}
                        enterFrom="opacity-0 scale-x-75"
                        enterTo="opacity-100 scale-x-100"
                      >
                        <td className="text-center truncate table-td ">
                          <label className="font-bold !text-title-500 heading !text-sm">
                            {record.bonus_code}
                          </label>
                        </td>
                      </Transition>
                      <Transition
                        show={isShowing}
                        as={Fragment}
                        appear={true}
                        enter={`transition-all ease-in duration-200 transition-delay-${delay + 200}`}
                        enterFrom="opacity-0 scale-x-75"
                        enterTo="opacity-100 scale-x-100"
                      >
                        <td className="text-center truncate table-td">
                          {record.bonus_amount}
                        </td>
                      </Transition>
                      <Transition
                        show={isShowing}
                        as={Fragment}
                        appear={true}
                        enter={`transition-all ease-in duration-200 transition-delay-${delay + 200}`}
                        enterFrom="opacity-0 scale-x-75"
                        enterTo="opacity-100 scale-x-100"
                      >
                        <td className="text-center truncate table-td">
                          {record.wager}
                        </td>
                      </Transition>
                      <Transition
                        show={isShowing}
                        as={Fragment}
                        appear={true}
                        enter={`transition-all ease-in duration-200 transition-delay-${delay + 200}`}
                        enterFrom="opacity-0 scale-x-75"
                        enterTo="opacity-100 scale-x-100"
                      >
                        <td className="text-center truncate table-td ">
                          <label className="font-bold">{format(addDays(record.expiry, index + 7), 'dd/MM/yyyy')}</label>
                        </td>
                      </Transition>
                    </tr>
                  </Transition>
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };


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
              bonuses
            </label>
          </div>
          <div className="flex flex-col items-start justify-start w-[90%] mt-12">
            <label className="text-4xl font-bold w-1/4">About Bonuses</label>
            <label className="w-full mt-4">
              maximus felis. Nullam tempus nisi libero, ac commodo ante elementum eget. Ut justo elit, congue eu aliquam nec, blandit laoreet erat. Pellentesque congue nisi ex, rhoncus commodo eros aliquet ac. Maecenas egestas aliquam felis nec laoreet. Morbi vel efficitur leo. Maecenas vehicula, orci in consequat bibendum, quam odio efficitur dui, id mollis mi mi et enim. Aenean eleifend aliquet hendrerit. Aliquam aliquet mauris in iaculis suscipit.
            </label>

            <div className="mt-8 w-full">
              {renderTable()}
            </div>
            <div className="mt-8 flex flex-col items-center justify-between w-full">
              <label className="text-lg font-bold w-full !text-special-500">Sign-up Bonus Rules</label>
              <ul className="w-full pl-8" style={{ listStyleType: 'disc' }}>
                <li>Sign-up bonus to be given in WBET tokens only.</li>
                <li>The winnings from the bonus balance goes into the cash bucket.</li>
                <li>Sign-up bonus will have the same wagering requirement as other bonus code.</li>
                <li>Winnings from the sign-up bonus cannot be withdrawn until the wagering requirement is met.</li>
                <li>Winnings from sign-up can also not be withdrawn until the user makes the first deposit.</li>
                <li>Bonus to be made provisional in the balance for the house, that means bonus can also be expired.</li>
              </ul>
            </div>
          </div>

        </div>
      </div >
    </Transition >
  );
};

//@ts-ignore
BonusPage.getLayout = (children) => {
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

export default BonusPage;