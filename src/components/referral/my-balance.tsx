import React, { useState, Fragment, useEffect } from "react";
// import useModal from '@/hooks/useModal';
import Icon from '../common/icon';
import { Transition } from '@headlessui/react';


const tableHeaders = ['Available Balance', 'Total Earned'];

const tableData = [
  {
    id: 1,
    balance: '0.0012 BTC',
    earned: '0.0012 BTC',
  },
  {
    id: 2,
    balance: '0.0012 BTC',
    earned: '0.0012 BTC',
  },
  {
    id: 3,
    balance: '0.0012 BTC',
    earned: '0.0012 BTC',
  },
  {
    id: 4,
    balance: '0.0012 BTC',
    earned: '0.0012 BTC',
  },
  {
    id: 5,
    balance: '0.0012 BTC',
    earned: '0.0012 BTC',
  },
  {
    id: 6,
    balance: '0.0012 BTC',
    earned: '0.0012 BTC',
  }
];

const Transactions: React.FC = (): JSX.Element => {
  const [isShowing, setShowing] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowing(true);
    }, 200);
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
                            <Icon source='bitcoin' size='sm' />
                            <label className='truncate text-center'>
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
                            <label className='truncate text-center'>
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
      </div>
    );
  };

  return (
    <div className="flex flex-col w-full h-full">
      {renderTable()}
    </div >
  );
};

export default Transactions;