import { Fragment, useState, useEffect } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import Icon from './icon';
import SecondaryButton from './secondary-button';
export type selectRecordType = { id: number, title: string, name: string; };

interface Props {
  data: Array<selectRecordType>;
  onValueChange: (record: selectRecordType) => void;
  defaultOption?: selectRecordType;
}

const Select: React.FC<Props> = ({ data, onValueChange, defaultOption }) => {
  const [isShowing, setShowing] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowing(true);
    }, 200)
    return () => {
      setShowing(false);
    }
  }, []);
  const [selected, setSelected] = useState<selectRecordType>();
  const [buttonState, setButtonState] = useState('normal');
  const onMouseEnter = () => setButtonState('hover');
  const onMouseLeave = () => setButtonState('normal');
  const onMouseDown = () => setButtonState('active');
  const onMouseUp = () => setButtonState('normal');

  let btnClass = 'select-bg';

  if (buttonState === 'hover') {
    btnClass = 'select-bg-hover';
  } else if (buttonState === 'active') {
    btnClass = 'select-bg-active';
  } else if (buttonState === 'inactive') {
    btnClass = 'select-bg-inactive';
  }

  const handleChange = (record: selectRecordType) => {
    onValueChange(record);
    setSelected(record);
  };

  return (
    <Transition
      show={isShowing}
      as={Fragment}
      appear={true}
      enter="transition-opacity ease-in-out duration-400"
      enterFrom="opacity-0"
      enterTo="opacity-100"
    >
      <div className="pl-4">
        <Listbox value={selected} onChange={handleChange}>
          {({ open }) => (
            <div className="relative h-full w-60">
              <Listbox.Button className={btnClass}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}>
                <>
                  <div className='w-[80%] flex items-center justify-center  h-full'>
                    <label className="select-label">{selected ? selected.title : defaultOption?.title}</label>
                  </div>
                  <div className='w-[20%]'>
                    <label className={`flex items-center cursor-pointer justify-center w-[30] h-[20] absolute transition-all linear duration-250 ${open ? 'opacity-100 -rotate-180' : 'opacity-100'}`}>
                      <Icon source='dropdown' size='sm' type='down' />
                    </label>
                  </div>
                </>
              </Listbox.Button>
              <Transition
                as={Fragment}
                enter="transition ease-in duration-200"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute w-full px-2 py-3 mt-1 overflow-auto max-h-64 popup-bg">
                  {data.map((record, personIdx) => (
                    <Listbox.Option
                      key={personIdx}
                      className={() => `relative select-none w-full cursor-pointer`}
                      value={record}
                    >
                      <>
                        <SecondaryButton onClick={() => { }} size='sm'>
                          <label className='pb-2 cursor-pointer heading truncate !text-sm'>{record.title}</label>
                        </SecondaryButton>

                      </>
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          )}
        </Listbox>
      </div>
    </Transition>
  );
};

export default Select;
