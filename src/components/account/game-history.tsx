import React, { Fragment, useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';

import { menuRecordType } from '../common/menu';
import { format, subDays } from 'date-fns';

import dynamic from 'next/dynamic';
import Icon from '../common/icon';
import SocialButton from '../common/social-button';

const CustomDatePicker = dynamic(() => import('../common/date-picker'), { loading: () => <div />, ssr: false });
const Select = dynamic(() => import('../common/select'), { loading: () => <div />, ssr: false });


const tableHeaders = ['Date', 'Amount Bets', 'Multiplier', 'Share'];

const tableData = [
  {
    id: 1,
    date: new Date(),
    amount: '0.0012 BTC',
    multiplier: ''
  },
  {
    id: 2,
    date: new Date(),
    amount: '0.0010 BTC',
    multiplier: ''
  },
  {
    id: 3,
    date: new Date(),
    amount: '0.0022 BTC',
    multiplier: ''
  }
];

const dropdownData = [
  {
    id: 1,
    name: 'in-house',
    title: 'In-house'
  }, {
    id: 2,
    name: 'house-2',
    title: 'House Two'
  },
  {
    id: 3,
    name: 'house-3',
    title: 'House Three'
  }
];

const defaultOption = {
  id: 0,
  name: 'default',
  title: 'Select Game'
};

const GameHistory: React.FC = (): JSX.Element => {
  const [isShowing, setShowing] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowing(true);
    }, 600)
    return () => {
      setShowing(false);
    }
  }, []);
  const [dates, setDates] = useState([new Date(), new Date()]);
  const [_house, setHouse] = useState({} as menuRecordType);
  // const [activeRow, setActiveRow] = useState<number | null>(null);

  // const showSubRow = (id: number | null) => {
  //   setActiveRow(id);
  // };

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
                {tableHeaders.map((header) => {
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
                      <th scope="col" className='px-6 py-3.5 truncate heading text-center !text-special-500' >
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
                        <td className="table-td text-center">
                          {format(subDays(record.date, index), 'dd/MM/yyyy')}
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
                        <td className=" table-td">
                          <div className='flex flex-row text-center w-full items-center justify-center'>
                            <Icon source='bitcoin' size='sm' />
                            <label className='truncate'>
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
                        <td className="table-td text-center">
                          {record.multiplier}
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
                        <td className="flex flex-row items-center justify-center !py-1 capitalize table-td">
                          <SocialButton type='telegram' size='sm' />
                          <SocialButton type='twitter' size='sm' />
                          <SocialButton type='reddit' size='sm' />
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
      <div className="flex flex-row items-center justify-between sm:justify-start">
        <CustomDatePicker onDateChange={(dates => setDates(dates))} />
        <Select data={dropdownData} onValueChange={(campaignValue) => setHouse(campaignValue)} defaultOption={defaultOption} />
      </div>
      <Transition
        show={isShowing}
        as={Fragment}
        appear={true}
        enter="transition-all ease-in-out duration-400 "
        enterFrom="opacity-0 scale-x-125"
        enterTo="opacity-100 scale-x-100"
      >
        <label className=' text-center font-semibold !text-title-500 my-2'>
          Showing Results
          <label className='font-bold text-white'>{" "}from{" "}</label>
          <label className='font-bold text-white'>{format(dates[0] as Date, 'dd/MM/yyyy')}</label>
          <label className='font-bold text-white'>{" "}to{" "}</label>
          <label className='font-bold text-white'>{format(dates[1] as Date, 'dd/MM/yyyy')}</label>
        </label>
      </Transition>
      {renderTable()}
    </div >
  );
};

export default GameHistory;