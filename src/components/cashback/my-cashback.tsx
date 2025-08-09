import React, { useState, Fragment, useEffect } from "react";
import { Transition } from '@headlessui/react';
import Icon from '../common/icon';
import { format, subDays } from 'date-fns';

const tableHeaders = ['Date', 'Amount', 'Status'];


const cashbackData = [
  {
    id: 1,
    date: new Date(),
    amount: '0.0012 BTC',
    status: 'accrued',

  },
  {
    id: 2,
    date: new Date(),
    amount: '0.0012 BTC',
    status: 'expired',

  },
  {
    id: 3,
    date: new Date(),
    amount: '0.0012 BTC',
    status: 'withdrawn',

  },
  {
    id: 4,
    date: new Date(),
    amount: '0.0012 BTC',
    status: 'accrued',

  },
  {
    id: 5,
    date: new Date(),
    amount: '0.0012 BTC',
    status: 'expired',

  },
];





const MyCashback: React.FC = (): JSX.Element => {
  const [isShowing, setShowing] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowing(true);
    }, 600);
  }, []);

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
            {cashbackData.map((record, index) => {
              const delay = (((index + 1) * 50) + 200);
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
                        <td className='flex flex-row items-center justify-center table-td'>
                          <label className='text-center truncate'>
                            {format(subDays(record.date, index), 'dd/MM/yyyy')}
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
                        <td className='table-td '>
                          <div className='flex flex-row items-center justify-center'>
                            <Icon source='bitcoin' size='sm' />
                            <label className='text-center truncate'>
                              {record.amount}
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
                        <td className='flex flex-row items-center justify-center table-td'>
                          <label className='font-bold uppercase truncate'>
                            {record.status}
                          </label>
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
    <div className="flex flex-col w-full h-full">
      <Transition
        show={isShowing}
        as={Fragment}
        appear={true}
        enter="transition-all ease-in duration-400"
        enterFrom="origin-center opacity-0"
        enterTo="opacity-100"
      >
        <div className='flex flex-col w-full px-2 pt-2 pb-6 cashback-frame'>
          <label className='w-full mb-4 pr-2 text-right heading !text-title-500 text-xl '>Cashback Details</label>
          <div className='flex flex-row items-center justify-around'>
            <div className='flex flex-col items-center justify-center my-4'>
              <label className='my-2 text-2xl font-bold'>1</label>
              <label className='heading !text-special-500 text-xl'>My Rank</label>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <label className='my-2 text-2xl font-bold'>1%</label>
              <label className='heading !text-special-500 text-xl'>My Cashback</label>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <label className='my-2 text-2xl font-bold'>3D 15:23:12</label>
              <label className='heading !text-special-500 text-xl'>Accrual In</label>
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
        <div className='flex flex-col w-full'>
          <label className='w-full mt-8 mb-4 pr-4 text-right heading !text-title-500 text-xl '>Transaction History</label>
          {renderTable()}
        </div>
      </Transition>
    </div >
  );
};

export default MyCashback;;