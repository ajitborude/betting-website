import React, { useState, Fragment, useEffect } from "react";
import { Transition } from '@headlessui/react';
import { format, subDays } from 'date-fns';
import dynamic from 'next/dynamic';
import Icon from '../common/icon';

const CustomDatePicker = dynamic(() => import('../common/date-picker'), { loading: () => <div />, ssr: false });
const Select = dynamic(() => import('../common/select'), { loading: () => <div />, ssr: false });

const tableHeaders = ['Date', 'Campaign Name', 'Username', 'Deposit', 'Wager', 'Referral Profit', ''];

const tableData = [
  {
    id: 1,
    date: new Date(),
    campaign_name: 'Default Campaign',
    username: 'Username',
    deposit: '0.0012 BTC',
    wager: '0.0012 BTC',
    referral_profit: '0.0012 BTC',
    subRows: [
      {
        deposit: '0.0012 BTC',
        wager: '0.0012 BTC',
        referral_profit: '0.0012 BTC'
      },
      {
        deposit: '0.0012 BTC',
        wager: '0.0012 BTC',
        referral_profit: '0.0012 BTC'
      }
    ]
  },
  {
    id: 2,
    date: new Date(),
    campaign_name: 'Default Campaign',
    username: 'Username',
    deposit: '0.0012 BTC',
    wager: '0.0012 BTC',
    referral_profit: '0.0012 BTC',
    subRows: [
      {
        deposit: '0.0012 BTC',
        wager: '0.0012 BTC',
        referral_profit: '0.0012 BTC'
      },
      {
        deposit: '0.0012 BTC',
        wager: '0.0012 BTC',
        referral_profit: '0.0012 BTC'
      }
    ]
  },
  {
    id: 3,
    date: new Date(),
    campaign_name: 'Default Campaign',
    username: 'Username',
    deposit: '0.0012 BTC',
    wager: '0.0012 BTC',
    referral_profit: '0.0012 BTC',
    subRows: [
      {
        deposit: '0.0012 BTC',
        wager: '0.0012 BTC',
        referral_profit: '0.0012 BTC'
      },
      {
        deposit: '0.0012 BTC',
        wager: '0.0012 BTC',
        referral_profit: '0.0012 BTC'
      }
    ]
  },
  {
    id: 4,
    date: new Date(),
    campaign_name: 'Default Campaign',
    username: 'Username',
    deposit: '0.0012 BTC',
    wager: '0.0012 BTC',
    referral_profit: '0.0012 BTC',
    subRows: [
      {
        deposit: '0.0012 BTC',
        wager: '0.0012 BTC',
        referral_profit: '0.0012 BTC'
      },
      {
        deposit: '0.0012 BTC',
        wager: '0.0012 BTC',
        referral_profit: '0.0012 BTC'
      }
    ]
  },
  {
    id: 5,
    date: new Date(),
    campaign_name: 'Default Campaign',
    username: 'Username',
    deposit: '0.0012 BTC',
    wager: '0.0012 BTC',
    referral_profit: '0.0012 BTC',
    subRows: [
      {
        deposit: '0.0012 BTC',
        wager: '0.0012 BTC',
        referral_profit: '0.0012 BTC'
      },
      {
        deposit: '0.0012 BTC',
        wager: '0.0012 BTC',
        referral_profit: '0.0012 BTC'
      }
    ]
  }
];

const dropdownData = [
  {
    id: 1,
    name: 'campaign-1',
    title: 'Campaign One'
  }, {
    id: 2,
    name: 'campaign-2',
    title: 'Campaign Two'
  },
  {
    id: 3,
    name: 'campaign-3',
    title: 'Campaign Three'
  }, {
    id: 4,
    name: 'campaign-4',
    title: 'Campaign Four'
  }
];

const filterData = [
  {
    id: 1,
    title: 'Upcoming',
    name: 'upcoming'
  },
  {
    id: 2,
    title: 'Active',
    name: 'active'
  }, {
    id: 3,
    title: 'Past',
    name: 'past'
  }
];

const campaignDefaultOption = {
  id: 0,
  name: 'default',
  title: 'Select Campaign'
};

const filterDefaultOption = {
  id: 0,
  name: 'default',
  title: 'View All'
};


const Sessions: React.FC = (): JSX.Element => {
  const [isShowing, setShowing] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowing(true);
    }, 200)
    return () => {
      setShowing(false);
    }
  }, []);
  const [dates, setDates] = useState([subDays(new Date(), 7), new Date()]);
  const [_campaign, setCampaign] = useState(dropdownData[0]);
  const [_filter, setFilter] = useState(filterData[0]);
  const [activeSubRow, setActiveSubRow] = useState({});


  const renderTable = () => {
    return (
      <div className="table-wrapper">
        <table className="table-custom">
          <Transition
            show={isShowing}
            as={Fragment}
            appear={true}
            enter="transition-opacity duration-400 transition-delay-400"
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
                      <th scope="col" className='px-6 py-3.5 truncate heading text-center !text-special-500'>
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
              const delay = (((index + 1) * 50) + 400)
              // @ts-ignore
              const isSelected = activeSubRow.id === record.id;
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
                        <td className="text-center table-td">
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
                        <td className="flex flex-row items-center justify-center text-center truncate table-td">
                          {record.campaign_name}
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
                        <td className="text-center table-td">
                          <div className='flex flex-row items-center justify-center'>
                            <Icon source='user' size='sm' />
                            <label className='truncate'>
                              {record.username}
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
                        <td className="text-center table-td">
                          <div className='flex flex-row items-center justify-center'>
                            <Icon source='bitcoin' size='sm' />
                            <label className='truncate'>
                              {record.deposit}
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
                        <td className="text-center table-td">
                          <div className='flex flex-row items-center justify-center'>
                            <Icon source='bitcoin' size='sm' />
                            <label className='truncate'>
                              {record.wager}
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
                        <td className="text-center table-td">
                          <div className='flex flex-row items-center justify-center'>
                            <Icon source='bitcoin' size='sm' />
                            <label className='truncate'>
                              {record.referral_profit}
                            </label>
                          </div>
                        </td>
                      </Transition>
                      <td className="text-center table-td !py-1 !pr-5 w-[5%]">
                        <div className={`btn btn-sm btn-ghost relative w-14`}
                          onClick={() => { isSelected ? setActiveSubRow({}) : setActiveSubRow(record); }}>
                          <div className={`w-[30] h-[20] flex items-center justify-center absolute transition-all linear duration-250 ${isSelected ? 'opacity-100 -rotate-180' : 'opacity-100'}`} >
                            <Icon source='dropdown' size='sm' type='down' />
                          </div>
                        </div>
                      </td>
                    </tr>
                  </Transition>
                  <>
                    {
                      record.subRows && record.subRows.map((subRow: any, index: number) => {
                        const delay = (((index + 1) * 50) + 50)
                        const returnDelay = (((record.subRows.length - index) * 50) + 50)
                        return (
                          <Transition
                            show={isSelected}
                            as={Fragment}
                            appear={true}
                            enter={`transition-all ease-in duration-200 transition-delay-${delay}`}
                            enterFrom="origin-center opacity-0"
                            enterTo="opacity-100"
                            leave={`transition-all ease-in duration-200 transition-delay-${returnDelay}`}
                            leaveFrom="origin-center opacity-100"
                            leaveTo="opacity-0"
                            key={subRow}
                          >
                            <tr className="table-tr w-full" >
                              <td className="table-td" colSpan={3} />
                              <td className="text-center table-td">
                                <div className='flex flex-row items-center justify-center'>
                                  <Icon source='bitcoin' size='sm' />
                                  <label className='truncate'>
                                    {subRow.deposit}
                                  </label>
                                </div>
                              </td>
                              <td className="text-center table-td">
                                <div className='flex flex-row items-center justify-center'>
                                  <Icon source='bitcoin' size='sm' />
                                  <label className='truncate'>
                                    {subRow.wager}
                                  </label>
                                </div>
                              </td>
                              <td className="text-center table-td">
                                <div className='flex flex-row items-center justify-center'>
                                  <Icon source='bitcoin' size='sm' />
                                  <label className='truncate'>
                                    {subRow.referral_profit}
                                  </label>
                                </div>
                              </td>
                              <td className="table-td" />
                            </tr>
                          </Transition>
                        )
                      })
                    }
                  </>
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
      <div className="flex flex-row items-center justify-between md:justify-start">
        <div className="flex flex-row items-center justify-start w-1/2" >
          <CustomDatePicker onDateChange={(dates) => setDates(dates)} />
          <Select data={dropdownData} onValueChange={(campaignValue) => setCampaign(campaignValue)} defaultOption={campaignDefaultOption} />
        </div>
        <div className="flex flex-row items-center justify-end w-1/2">
          <Select data={filterData} onValueChange={(filterValue) => setFilter(filterValue)} defaultOption={filterDefaultOption} />
        </div>
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

export default Sessions;