import React, { useState, Fragment } from "react";
import { RadioGroup, Transition } from '@headlessui/react';
import Icon from '../common/icon';

interface Props {
  options: any;
  isShowing: boolean;
}

const RadioButtons: React.FC<Props> = ({ options, isShowing }): JSX.Element => {

  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="w-full overflow-x-auto max-h-72 scroll-smooth">
      <RadioGroup value={selected} onChange={setSelected}>
        {/* <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label> */}
        <div className="space-y-2">
          {options.map((option: any, index: number) => {
            const delay = (((index + 1) * 100) + 300)
            return (
              <RadioGroup.Option
                key={option.id}
                value={option}
                className={`relative flex cursor-pointer my-2 py-1`}
              >
                {({ checked }) => (
                  <>
                    <Transition
                      show={isShowing}
                      as={Fragment}
                      appear={true}
                      enter={`transition-all ease-in duration-200 transition-delay-${delay}`}
                      enterFrom="origin-center opacity-0"
                      enterTo="opacity-100"
                    >
                      <div className="flex items-center justify-between w-full balance-conformation-bar ">
                        <Transition
                          show={isShowing}
                          as={Fragment}
                          appear={true}
                          enter={`transition-all ease-in duration-200 transition-delay-${delay + 200}`}
                          enterFrom="origin-center opacity-0 scale-0"
                          enterTo="opacity-100 scale-100"
                        >
                          <div className="flex items-center w-[20%] justify-center">
                            {checked ? <Icon source='radio-on' size='lg' /> : <Icon source='radio-off' size='lg' />}
                          </div>
                        </Transition>
                        <Transition
                          show={isShowing}
                          as={Fragment}
                          appear={true}
                          enter={`transition-all ease-in duration-200 transition-delay-${delay + 200}`}
                          enterFrom="origin-left opacity-0 scale-x-0"
                          enterTo="opacity-100 scale-x-100"
                        >
                          <div className="flex items-center w-[80%] justify-end">
                            <RadioGroup.Label as="p" className='flex flex-col items-end pr-3'>
                              <label className='text-xl font-bold'> {option.balance}</label>
                              <label className='heading !text-special-500'>Available Bal</label>
                            </RadioGroup.Label>
                          </div>
                        </Transition>
                      </div>
                    </Transition>
                  </>

                )}
              </RadioGroup.Option>
            )
          })}
        </div>
      </RadioGroup>
    </div>
  );
};

export default RadioButtons;
