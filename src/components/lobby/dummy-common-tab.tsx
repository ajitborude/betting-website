import React, { useState, Fragment, useEffect } from "react";
// import useModal from '@/hooks/useModal';
import Icon from '../common/icon';
import { Transition } from '@headlessui/react';
import SocialButton from "../common/social-button";


const tableHeaders = ['Ranking', 'Player', 'Profit', 'Price'];

const tableData = [
  {
    id: 1,
    player: 'User453678',
    balance: '0.0012 BTC',
    earned: '0.0012 BTC',
  },
  {
    id: 2,
    player: 'User453678',
    balance: '0.0012 BTC',
    earned: '0.0012 BTC',
  },
  {
    id: 3,
    player: 'User453678',
    balance: '0.0012 BTC',
    earned: '0.0012 BTC',
  },
  {
    id: 4,
    player: 'User453678',
    balance: '0.0012 BTC',
    earned: '0.0012 BTC',
  },
  {
    id: 5,
    player: 'User453678',
    balance: '0.0012 BTC',
    earned: '0.0012 BTC',
  },
  {
    id: 6,
    player: 'User453678',
    balance: '0.0012 BTC',
    earned: '0.0012 BTC',
  },
  {
    id: 7,
    player: 'User453678',
    balance: '0.0012 BTC',
    earned: '0.0012 BTC',
  },
  {
    id: 8,
    player: 'User453678',
    balance: '0.0012 BTC',
    earned: '0.0012 BTC',
  },
  {
    id: 9,
    player: 'User453678',
    balance: '0.0012 BTC',
    earned: '0.0012 BTC',
  },
  {
    id: 10,
    player: 'User453678',
    balance: '0.0012 BTC',
    earned: '0.0012 BTC',
  },
];

const DummyCommonTab: React.FC = (): JSX.Element => {
  const [isShowing, setShowing] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowing(true);
    }, 200);
  }, []);

  const renderTable = () => {
    return (
      <div className="table-wrapper flex-col">
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
                        <td className='table-td'>
                          <div className='flex flex-row items-center justify-center'>
                            <SocialButton text={record.id.toString()} size='sm' />
                          </div>
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
                        <td className='table-td'>
                          <div className='flex flex-row items-center justify-center'>
                            <Icon source='user' size='sm' />
                            <label className='truncate text-center text-lg'>
                              {record.player}
                            </label>
                          </div>
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
                        <td className='table-td'>
                          <div className='flex flex-row items-center justify-center'>
                            <Icon source='bitcoin' size='sm' />
                            <label className='truncate text-center text-lg'>
                              {record.balance}
                            </label>
                          </div>
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
                        <td className='table-td'>
                          <div className='flex flex-row items-center justify-center'>
                            <Icon source='bitcoin' size='sm' />
                            <label className='truncate text-center text-lg'>
                              {record.earned}
                            </label>
                          </div>
                        </td>
                      </Transition>

                    </tr>
                  </Transition>
                </Fragment>
              );
            })}
          </tbody>
        </table>
        <div className="flex flex-row w-full items-center justify-center mt-8 mb-52">
          <SocialButton type="previous" size="sm" />
          <label className="mx-4 text-xl heading">1</label>
          <label className="mx-4 text-xl heading !text-special-500">2</label>
          <label className="mx-4 text-xl heading">3</label>
          <label className="mx-4 text-xl heading">4</label>
          <SocialButton type="next" size="sm" />
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col w-full h-full">
      {renderTable()}
    </div >
  );
};

export default DummyCommonTab;