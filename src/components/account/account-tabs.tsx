import React, { useState, Fragment, useEffect } from "react";
import { Tab, Transition } from '@headlessui/react';
import HistoryIcon from '@/public/history.svg';
import SettingsIcon from '@/public/settings.svg';
import TransactionsIcon from '@/public/transactions.svg';
import SessionIcon from '@/public/session.svg';
import AccountSettings from './account-settings';
import Transactions from './transactions';
import GameHistory from './game-history';
import Sessions from './sessions';
import { useRouter } from 'next/router';
import TabButton from '../common/tab-button';
interface Props {
  defaultTab: number;
}

const AccountTabs: React.FC<Props> = ({ defaultTab = 1 }): JSX.Element => {
  const [isShowing, setShowing] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowing(true);
    }, 200);
  }, []);
  const router = useRouter();
  const tabs = [
    {
      id: 1,
      title: 'Account Settings',
      icon: <SettingsIcon />,
      component: <AccountSettings />
    },
    {
      id: 2,
      title: 'Transactions',
      icon: <TransactionsIcon />,
      component: <Transactions />
    },
    {
      id: 3,
      title: 'Game History',
      icon: <HistoryIcon />,
      component: <GameHistory />
    },
    {
      id: 4,
      title: 'Sessions',
      icon: <SessionIcon />,
      component: <Sessions />
    }
  ];

  return (
    <div className="w-full pt-16">
      <Tab.Group selectedIndex={defaultTab} onChange={(index) => router.push(`/account?tab=${index}`)}>
        <Tab.List className="relative flex flex-col items-center justify-between w-full p-1 sm:flex-row rounded-xl">
          <Tab as={Fragment} >
            {({ selected }) => (
              <Transition
                show={isShowing}
                as={Fragment}
                appear={true}
                enter="transition-all ease-in duration-200"
                enterFrom="origin-center translate-y-[50%] opacity-0"
                enterTo="translate-y-[0] opacity-100 scale-100"
              >
                <div className={`left-[0] w-[29%] flex items-center justify-center rounded-none absolute cursor-pointer`}>
                  <TabButton text={tabs[0]?.title} type='start' selected={selected} />
                </div>
              </Transition >
            )}
          </Tab>
          <Tab as={Fragment} >
            {({ selected }) => (
              <Transition
                show={isShowing}
                as={Fragment}
                appear={true}
                enter="transition-all ease-in duration-200"
                enterFrom="origin-center translate-y-[-50%] opacity-0"
                enterTo="translate-y-[0] opacity-100 scale-100"
              >
                <div className={`left-[24%] w-[29%] flex items-center justify-center rounded-none absolute cursor-pointer`}>
                  <TabButton text={tabs[1]?.title} type='even' selected={selected} />
                </div>
              </Transition >
            )}
          </Tab>
          <Tab as={Fragment} >
            {({ selected }) => (
              <Transition
                show={isShowing}
                as={Fragment}
                appear={true}
                enter="transition-all ease-in duration-200"
                enterFrom="origin-center translate-y-[50%] opacity-0"
                enterTo="translate-y-[0] opacity-100 scale-100"
              >
                <div className={`left-[48%] w-[29%] flex items-center justify-center rounded-none absolute cursor-pointer`}>
                  <TabButton text={tabs[2]?.title} type='odd' selected={selected} />
                </div>
              </Transition >
            )}
          </Tab>
          <Tab as={Fragment} >
            {({ selected }) => (
              <Transition
                show={isShowing}
                as={Fragment}
                appear={true}
                enter="transition-all ease-in duration-200"
                enterFrom="origin-center translate-y-[-50%] opacity-0"
                enterTo="translate-y-[0] opacity-100 scale-100"
              >
                <div className={`left-[72%] w-[29%] flex items-center justify-center rounded-none absolute cursor-pointer`}>
                  <TabButton text={tabs[3]?.title} type='end-even' selected={selected} />
                </div>
              </Transition >
            )}
          </Tab>
        </Tab.List>
        {/* <span className='hidden sm:flex divider'></span> */}
        <Tab.Panels className='hidden w-full mt-10 sm:flex'>
          {tabs.map((tab, idx) => (
            <Tab.Panel key={idx} className={'rounded-xl h-full w-full'}>
              {tab.component}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div >
  );
};

export default AccountTabs;
