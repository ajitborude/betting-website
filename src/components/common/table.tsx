import React, { useState } from 'react';
import BitcoinIcon from '@/public/bitcoin.svg';
import { format, subDays } from 'date-fns';
import DropdownIcon from '@/public/dropdown-down.svg';
import DropdownUpIcon from '@/public/dropdown-up.svg';

interface Props {
  data: Array<any>;
  headers: Array<string>;
}

const Table: React.FC<Props> = ({ data, headers }): JSX.Element => {

  const [activeRow, setActiveRow] = useState<number | null>(null);

  const showSubRow = (id: number | null) => {
    setActiveRow(id);
  };

  return (
    <div className="table-wrapper">
      <table className="table-custom">
        <thead className="table-head">
          <tr>
            {headers.map((header, index) => {
              return (
                <th scope="col" className={`px-6 py-3.5 ${index !== (headers.length - 1) && 'border-r border-primary-400'}`} key={header}>
                  {header}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((record, index) => {
            const isSubRowVisible = activeRow === record.id;
            return (
              <>
                <tr className={`relative overflow-x-auto ${!isSubRowVisible && 'table-row-shadow'}`}
                  key={record.id}>
                  <td className="table-td">
                    {format(subDays(record.date, index), 'dd/MM/yyyy')}
                  </td>
                  <td className="flex flex-row items-center truncate table-td">
                    <BitcoinIcon className="mr-2" />
                    {record.amount}
                  </td>
                  <td className="table-td">
                    {record.information}
                  </td>
                  <td className="capitalize table-td">
                    {record.status}
                  </td>
                  <td className='table-expand'>
                    <div className={`relative w-full h-full ${isSubRowVisible ? 'bg-[#4A4A4A]' : 'bg-transparent'}`}>
                      <div className={`table-expand-btn  ${!isSubRowVisible && 'left-shadow'}`}
                        onClick={() => {
                          if (isSubRowVisible)
                            showSubRow(null);
                          else
                            showSubRow(record.id);
                        }}>
                        {isSubRowVisible ? <DropdownUpIcon /> : <DropdownIcon />}
                      </div>
                    </div>
                  </td>
                </tr>
                {activeRow === record.id &&
                  <tr className="table-sub-tr">
                    <td className="table-sub-td" colSpan={4}>
                      <div className='table-sub-row-data '>
                        <label>{headers[0]}</label>
                        <label className='w-2/3 text-right'> {format(subDays(record.date, index), 'dd/MM/yyyy')}</label>
                      </div>
                      <div className='table-sub-row-data'>
                        <label>{headers[1]}</label>
                        <div className='flex flex-row items-center justify-end w-2/3'>
                          <BitcoinIcon className="mr-2" />
                          <label>{record.amount}</label>
                        </div>
                      </div>
                      <div className='table-sub-row-data'>
                        <label>{headers[2]}</label>
                        <label className='w-2/3 text-right truncate'>{record.information}</label>
                      </div>
                      <div className='table-sub-row-data'>
                        <label>{headers[3]}</label>
                        <label className='w-2/3 text-right capitalize'>{record.status}</label>
                      </div>
                    </td>
                  </tr>
                }
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;