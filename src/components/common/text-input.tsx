import React, { Fragment, useReducer, useState } from 'react';
import Link from 'next/link';
import { Transition } from '@headlessui/react';
import Icon from './icon';

interface Props {
  isPassword?: boolean;
  icon?: {
    name: string;
    type: string;
  },
  RightIcon?: any;
  validator: any;
  defaultValue?: string;
  placeholder: string;
  label: string;
  extraLabel?: string;
  extraLink?: string;
  transition?: {
    isShowing: boolean;
    delay: string;
  };
  onChange: (value: string) => void;

}
const TextInput: React.FC<Props> = ({ isPassword, validator, defaultValue, label, placeholder, extraLink, extraLabel, onChange, transition, icon }) => {
  const [validatorInstance, validatorRules] = validator;
  const [inputType, setInputType] = useState(isPassword ? 'password' : 'text');
  const [inputValue, setInputValue] = useState(defaultValue ? defaultValue : '');
  const [_update, forceUpdate] = useReducer((x) => x + 1, 0);
  const validationError = validatorInstance.current.message(label, inputValue, validatorRules);

  const handleChange = (value: string) => {
    setInputValue(value);
    onChange(value);
  };

  return (
    <Transition
      show={transition?.isShowing}
      as={Fragment}
      appear={true}
      enter={`ease-in duration-300 delay-${transition?.delay}`}
      enterFrom="opacity-0"
      enterTo="opacity-100"
    >
      <div className='relative flex flex-row items-center w-full mt-1'>
        {icon &&
          <div className='absolute top-0 left-0 flex flex-row items-center h-full pt-2 pb-6'>
            <Icon source={icon.name} type={icon.type} />
          </div>
        }
        <div className='w-full '>
          <input
            className={`w-full border-0 rounded-none pl-20 input bg-transparent tracking-widest ${validationError ? 'input-error-bg' : 'input-bg'} `}
            placeholder={placeholder}
            type={inputType}
            onChange={(e) => handleChange(e.target.value)}
            defaultValue={inputValue}
            onBlur={() => {
              validatorInstance.current.showMessageFor(label);
              forceUpdate();
            }} />
          <div className="flex flex-row justify-between w-full">
            <div className="flex items-center justify-start truncate">
              {validationError || <div className="w-full h-5" />}
            </div>
            {/* <ValidatorMessage validator={validatorInstance} name={label} value={inputValue} rule={validatorRules} /> */}
            {extraLink &&
              <div className='z-10 flex flex-row justify-end'>
                <Link href={extraLink} className="cursor-pointer">
                  <label className='text-sm font-medium text-right underline cursor-pointer underline-offset-4'>{extraLabel}</label>
                </Link>
              </div>
            }
          </div>
        </div>
        {isPassword &&
          <div className='absolute top-0 right-0 flex flex-row items-center bg-transparent btn btn-ghost hover:bg-transparent'
            onClick={() => { setInputType(inputType === 'text' ? 'password' : 'text'); }}>
            {inputType === 'text' ?
              <Icon source={'hide-password'} type={icon ? icon.type : 'default'} />
              :
              <Icon source={'show-password'} type={icon ? icon.type : 'default'} />
            }
          </div>
        }
      </div>
    </Transition>
  );
};

export default TextInput;