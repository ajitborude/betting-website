import React, { useState, Fragment, useEffect } from "react";
import { Tab, Transition } from '@headlessui/react';
import CommonTab from './dummy-common-tab';
import LobbyTabButton from './lobby-tab-button';

interface Props {
}

const DummyTabs: React.FC<Props> = ({ }): JSX.Element => {
  const [isShowing, setShowing] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowing(true);
    }, 200);
  }, []);
  const tabs = [
    {
      id: 1,
      title: '',
      component: <CommonTab />
    },
    {
      id: 2,
      title: '',
      component: <CommonTab />
    },
    {
      id: 3,
      title: '',
      component: <CommonTab />
    },
    {
      id: 4,
      title: '',
      component: <CommonTab />
    },
    {
      id: 5,
      title: '',
      component: <CommonTab />
    },
    {
      id: 6,
      title: '',
      component: <CommonTab />
    }
  ];

  return (
    <div className="w-full pt-16">
      <Tab.Group >
        <Tab.List className="relative flex flex-col items-center justify-between w-full p-1 sm:flex-row rounded-xl">
          <Tab as={Fragment} >
            {({ }) => (
              <Transition
                show={isShowing}
                as={Fragment}
                appear={true}
                enter="transition-all ease-in duration-200"
                enterFrom="origin-center translate-y-[50%] opacity-0"
                enterTo="translate-y-[0] opacity-100 scale-100"
              >
                <div className={`left-[0] w-[19%] flex items-center justify-center rounded-none absolute cursor-pointer`}>
                  <LobbyTabButton text={tabs[0]?.title} type='start' selected={false} />
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
                <div className={`left-[16%] w-[19%] flex items-center justify-center rounded-none absolute cursor-pointer`}>
                  <LobbyTabButton text={tabs[1]?.title} type='even' selected={selected} />
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
                <div className={`left-[32%] w-[19%] flex items-center justify-center rounded-none absolute cursor-pointer`}>
                  <LobbyTabButton text={tabs[2]?.title} type='odd' selected={selected} />
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
                <div className={`left-[48%] w-[19%] flex items-center justify-center rounded-none absolute cursor-pointer`}>
                  <LobbyTabButton text={tabs[3]?.title} type='even' selected={selected} />
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
                <div className={`left-[64%] w-[19%] flex items-center justify-center rounded-none absolute cursor-pointer`}>
                  <LobbyTabButton text={tabs[4]?.title} type='odd' selected={selected} />
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
                <div className={`left-[80%] w-[19%] flex items-center justify-center rounded-none absolute cursor-pointer`}>
                  <LobbyTabButton text={tabs[5]?.title} type='end-even' selected={selected} />
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

export default DummyTabs;
