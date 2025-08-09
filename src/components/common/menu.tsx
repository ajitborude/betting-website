import { Menu, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import DropdownIcon from '@/public/dropdown-down.svg';

export type menuRecordType = { id: number, title: string, name: string; };

interface Props {
  data: Array<menuRecordType>;
  onValueChange: (record: menuRecordType) => void;
}

const Dropdown: React.FC<Props> = ({ data, onValueChange }) => {
  const [value, onChange] = useState(data[0]);

  const handleChange = (record: menuRecordType) => {
    onValueChange(record);
    onChange(record);
  };

  return (
    <div className="ml-4 border rounded-lg bg-primary-500">
      <Menu as="div" className="relative inline-block h-full text-left">
        <Menu.Button className="flex items-center justify-center w-full h-full px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-500">
          <label>{value?.title}</label>
          <DropdownIcon className='ml-2' />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-50 w-56 mt-2 origin-top-right border border-white rounded-md bg-primary-500">
            <div className="px-1 py-1 ">
              {data.map((record, _index) => {
                return (
                  //@ts-ignore
                  <Menu.Item key={record.id} onClick={() => handleChange(record)}>
                    {({ active }) => (
                      <div
                        className={`${active && 'bg-primary-400'} 'text-white group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        {record.title}
                      </div>
                    )}
                  </Menu.Item>
                );
              })}
            </div>
          </Menu.Items >
        </Transition >
      </Menu >
    </div >
  );
};

export default Dropdown;
