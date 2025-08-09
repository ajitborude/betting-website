import React, { Fragment, useState, useEffect } from 'react';
// import useModal from '@/hooks/useModal';
import { format, subDays } from 'date-fns';
import dynamic from 'next/dynamic';
import Icon from '../common/icon';
import { Transition } from '@headlessui/react';


const CustomDatePicker = dynamic(() => import('../common/date-picker'), { loading: () => <div />, ssr: false });
const Select = dynamic(() => import('../common/select'), { loading: () => <div />, ssr: false });

const tableHeaders = ['Date', 'Amount', 'Information', 'Status'];

const tableData = [
  {
    id: 1,
    date: new Date(),
    amount: '0.0012 BTC',
    information: '',
    status: 'deposited'
  },
  {
    id: 2,
    date: new Date(),
    amount: '0.0010 BTC',
    information: '',
    status: 'deposited'
  },
  {
    id: 3,
    date: new Date(),
    amount: '0.0022 BTC',
    information: '',
    status: 'withdrawn'
  },
  {
    id: 4,
    date: new Date(),
    amount: '0.0012 BTC',
    information: '',
    status: 'deposited'
  },
  {
    id: 5,
    date: new Date(),
    amount: '0.0010 BTC',
    information: '',
    status: 'deposited'
  },
  {
    id: 6,
    date: new Date(),
    amount: '0.0022 BTC',
    information: '',
    status: 'withdrawn'
  }, {
    id: 7,
    date: new Date(),
    amount: '0.0012 BTC',
    information: '',
    status: 'deposited'
  },
  {
    id: 8,
    date: new Date(),
    amount: '0.0010 BTC',
    information: '',
    status: 'deposited'
  },
  {
    id: 9,
    date: new Date(),
    amount: '0.0022 BTC',
    information: '',
    status: 'withdrawn'
  },
  {
    id: 10,
    date: new Date(),
    amount: '0.0022 BTC',
    information: '',
    status: 'withdrawn'
  }
];

const dropdownData = [
  {
    id: 1,
    name: 'deposits',
    title: 'Deposits'
  },
  {
    id: 2,
    name: 'withdrawals',
    title: 'Withdrawals'
  },
  {
    id: 3,
    name: 'all',
    title: 'All'
  }
];

const defaultOption = {
  id: 0,
  name: 'default',
  title: 'Select Type'
};

const Transactions: React.FC = (): JSX.Element => {
  const [dates, setDates] = useState([subDays(new Date(), 7), new Date()]);
  const [_campaign, setCampaign] = useState(dropdownData[0]);
  const [isShowing, setShowing] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowing(true);
    }, 600)
    return () => {
      setShowing(false);
    }
  }, []);


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
                        <td className="table-td flex items-center justify-center">
                          <div className='flex flex-row items-center '>
                            <Icon source='bitcoin' size='sm' />
                            <label className='truncate text-center'>
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
                          {record.information}
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
                        <td className="capitalize table-td text-center">
                          {record.status}
                        </td>
                      </Transition>
                    </tr>
                  </Transition>
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </div >
    );
  };

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-col w-full">
        <div className="flex flex-row items-center justify-between md:justify-start">
          <CustomDatePicker onDateChange={(dates) => setDates(dates)} />
          <Select data={dropdownData} onValueChange={(campaignValue) => setCampaign(campaignValue)} defaultOption={defaultOption} />
        </div>
        <Transition
          show={isShowing}
          as={Fragment}
          appear={true}
          enter="transition-all ease-in-out duration-400 "
          enterFrom="opacity-0 scale-x-125"
          enterTo="opacity-100 scale-x-100"
        >
          <label className=' text-center font-semibold !text-[#F0DC7A] my-2'>
            Showing Results
            <label className='font-bold text-white'>{" "}from{" "}</label>
            <label className='font-bold text-white'>{format(dates[0] as Date, 'dd/MM/yyyy')}</label>
            <label className='font-bold text-white'>{" "}to{" "}</label>
            <label className='font-bold text-white'>{format(dates[1] as Date, 'dd/MM/yyyy')}</label>
          </label>
        </Transition>
      </div>
      {renderTable()}
    </div >
  );
};

export default Transactions;