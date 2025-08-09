import React, { useState, Fragment, useEffect } from "react";
import { Tab, Transition } from '@headlessui/react';
import AboutCashback from './about-cashback';
import MyCashback from './my-cashback';
import { useRouter } from 'next/router';
import CashbackTabButton from './cashback-tab-button';

interface Props {
  defaultTab: number;
}

const CashbackTabs: React.FC<Props> = ({ defaultTab = 1 }): JSX.Element => {
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
      title: 'About Cashback',
      component: <AboutCashback />
    },
    {
      id: 2,
      title: 'My Cashback',
      component: <MyCashback />
    },
  ];

  return (
    <div className="w-full pt-16">
      <Tab.Group selectedIndex={defaultTab} onChange={(index) => router.push(`/cashback?tab=${index}`)}>
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
                <div className={`left-[0] w-[52.5%] flex items-center justify-center rounded-none absolute cursor-pointer`}>
                  <CashbackTabButton text={tabs[0]?.title} type='start' selected={selected} />
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
                <div className={`left-[47%] w-[52.5%] flex items-center justify-center rounded-none absolute cursor-pointer`}>
                  <CashbackTabButton text={tabs[1]?.title} type='end-even' selected={selected} />
                </div>
              </Transition >
            )}
          </Tab>
        </Tab.List>
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

export default CashbackTabs;
