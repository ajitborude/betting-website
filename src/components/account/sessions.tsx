import React, { Fragment, useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { format, subDays } from 'date-fns';
import PrimaryButton from '../common/primary-button';

const tableHeaders = ['Date', 'ID', 'Browser', 'Status'];

const tableData = [
  {
    id: 1,
    date: new Date(),
    ip: '49.205.666.987',
    browser: 'Mozilla/5.0 (Windows NT 11.9; Win32; x32; rv:97.0)Gecko/20884739',
    status: 'active'
  },
  {
    id: 2,
    date: new Date(),
    ip: '49.205.666.245',
    browser: 'Mozilla/5.0 (Windows NT 11.9; Win32; x32; rv:97.0)Gecko/20884739',
    status: 'inactive'
  },
  {
    id: 3,
    date: new Date(),
    ip: '49.205.666.123',
    browser: 'Mozilla/5.0 (Windows NT 11.9; Win32; x32; rv:97.0)Gecko/20884739',
    status: 'active'
  }
];


const Sessions: React.FC = (): JSX.Element => {
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
            enter="transition-opacity duration-400"
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
                      enter="transition-all ease-in-out duration-200"
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
              const delay = (((index + 1) * 50))

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
                        enterFrom="origin-center opacity-0"
                        enterTo="opacity-100"
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
                        enterFrom="origin-center opacity-0"
                        enterTo="opacity-100"
                      >
                        <td className="text-center truncate  table-td">
                          {record.ip}
                        </td>
                      </Transition>
                      <Transition
                        show={isShowing}
                        as={Fragment}
                        appear={true}
                        enter={`transition-all ease-in duration-200 transition-delay-${delay + 200}`}
                        enterFrom="origin-center opacity-0"
                        enterTo="opacity-100"
                      >
                        <td className="text-center truncate table-td">
                          {record.browser}
                        </td>
                      </Transition>
                      <Transition
                        show={isShowing}
                        as={Fragment}
                        appear={true}
                        enter={`transition-all ease-in duration-200 transition-delay-${delay + 200}`}
                        enterFrom="origin-center opacity-0"
                        enterTo="opacity-100"
                      >
                        <td className="flex flex-row items-center justify-around table-td !py-1">
                          <label className='capitalize w-[30%]'>{record.status}</label>
                          <div className='w-[70%]'>
                            <PrimaryButton onClick={() => { }} size="sm">
                              <label className='w-full pb-2 text-center cursor-pointer heading'>Logout</label>
                            </PrimaryButton>
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

export default Sessions;