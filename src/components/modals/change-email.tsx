import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useReducer, useRef, Reducer } from 'react';
import useModal from '@/hooks/useModal';
import SimpleReactValidator from "simple-react-validator";
import { IReducerAction } from '@/types/common';
import TextInput from '../common/text-input';
import PrimaryButton from '../common/primary-button';
import CloseButton from '../common/close-button';
interface IState {
  newEmail: string;
  email: string;
  password: string;
}

const ChangeEmailModal: React.FC<any> = ({ isOpened }): JSX.Element => {
  const { confirm, decline } = useModal();

  const validator = useRef(
    new SimpleReactValidator({
      className: "text-xs text-red-200 ml-2 italic mt-1",
    })
  );

  const initialState: IState = {
    newEmail: '',
    email: '',
    password: '',
  };

  const reducer = (state: IState, action: IReducerAction) => {
    if (action.type === "reset") {
      return initialState;
    }
    const result: IState = { ...state };
    //@ts-ignore
    result[action.type] = action.value;
    return result;
  };

  const [state, dispatch] = useReducer<Reducer<IState, IReducerAction>, IState>(reducer, initialState, () => initialState);

  const { newEmail, email, password } = state;

  const handleChange = (type: string, value: any) => {
    dispatch({ type, value });
  };

  const handleDecline = (e?: any) => {
    if (e)
      e.preventDefault();
    dispatch({ type: "reset" });
    decline();
  };

  const handleConfirm = async (e?: any) => {
    if (e)
      e.preventDefault();
    dispatch({ type: "reset" });
    confirm({});
  };

  return (
    <Transition appear show={isOpened} as={Fragment} >
      <Dialog as="div" className="relative z-20" onClose={() => { }} open={isOpened}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-[#402C69] bg-opacity-50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-full p-4 text-center ">
            <div className="fixed inset-0 backdrop-blur-md bg-[#402C69] bg-opacity-40" aria-hidden="true" />
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-0 origin-top-right"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative flex justify-center w-full max-w-md rounded-lg change-password-frame">
                <div className='flex flex-col items-start justify-start w-full pt-8 pb-10 pl-6 pr-8'>
                  <div className='flex self-end'>
                    <label className='pr-2 text-2xl text-right heading typing-change-password'>Change Email</label>
                  </div>
                  <Transition
                    appear show={isOpened} as={Fragment}
                    enter="ease-out duration-300 delay-[300ms]"
                    enterFrom="opacity-0 translate-x-[-10%]"
                    enterTo="opacity-100 translate-x-[0%]"
                  >
                    <div className='w-full px-4 mt-5'>
                      <TextInput
                        isPassword={false}
                        validator={[validator, 'required|email']}
                        defaultValue={email}
                        placeholder='Enter Current Email Address'
                        label='email'
                        onChange={(value) => handleChange('email', value)}
                      />
                    </div>
                  </Transition>

                  <Transition
                    appear show={isOpened} as={Fragment}
                    enter="ease-out duration-300 delay-[400ms]"
                    enterFrom="opacity-0 translate-x-[-10%]"
                    enterTo="opacity-100 translate-x-[0%]"
                  >
                    <div className='w-full px-4 mt-3'>
                      <TextInput
                        isPassword={false}
                        validator={[validator, 'required|email']}
                        defaultValue={newEmail}
                        placeholder='Enter New Email Address'
                        label='newEmail'
                        onChange={(value) => handleChange('newEmail', value)}
                      />
                    </div>
                  </Transition>

                  <Transition
                    appear show={isOpened} as={Fragment}
                    enter="ease-out duration-300 delay-[500ms]"
                    enterFrom="opacity-0 translate-x-[-10%]"
                    enterTo="opacity-100 translate-x-[0%]"
                  >
                    <div className='w-full px-4 mt-3'>
                      <TextInput
                        isPassword={true}
                        validator={[validator, 'required']}
                        defaultValue={password}
                        placeholder='Enter Password'
                        label='password'
                        onChange={(value) => handleChange('password', value)}
                      />
                    </div>
                  </Transition>

                  <div className='flex items-center justify-center w-full mt-3'>
                    <Transition
                      appear show={isOpened} as={Fragment}
                      enter="ease-in duration-300 delay-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                    >
                      <div className='w-[70%] items-center flex justify-center cursor-pointer'>
                        <PrimaryButton onClick={handleConfirm} size='md'>
                          <label className='pb-2 cursor-pointer typing-save-changes heading'>
                            Save Changes
                          </label>
                        </PrimaryButton>
                      </div>
                    </Transition>
                  </div>
                </div>
                <Transition
                  appear show={isOpened} as={Fragment}
                  enter="ease-in duration-300 delay-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                >
                  <div className='absolute z-20 w-20 h-20 rounded-full cursor-pointer -bottom-1 -right-3 -rotate-6' onClick={handleDecline}>
                    <CloseButton />
                  </div>
                </Transition>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ChangeEmailModal;
