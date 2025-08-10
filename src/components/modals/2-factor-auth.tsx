import useModal from "@/hooks/useModal";
import { IReducerAction } from "@/types/common";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, Reducer, useReducer } from "react";
import OtpInput from "react-otp-input";
import CloseButton from "../common/close-button";
import PrimaryButton from "../common/primary-button";

interface IState {
  otp: string;
}

const TwoFactorAuthModal: React.FC<any> = ({ isOpened }): JSX.Element => {
  const { confirm, decline } = useModal();

  const initialState: IState = {
    otp: "",
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

  const [state, dispatch] = useReducer<Reducer<IState, IReducerAction>, IState>(
    reducer,
    initialState,
    () => initialState
  );

  const { otp } = state;

  const handleChange = (value: any) => {
    dispatch({ type: "otp", value });
  };

  const handleDecline = (e?: any) => {
    if (e) e.preventDefault();
    dispatch({ type: "reset" });
    decline();
    // router.reload();
  };

  const handleConfirm = async (e?: any) => {
    if (e) e.preventDefault();
    dispatch({ type: "reset" });
    confirm({});
  };

  return (
    <Transition appear show={isOpened} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-20"
        onClose={() => {}}
        open={isOpened}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-[#4e4e4e] bg-opacity-50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-full p-4 text-center ">
            <div
              className="fixed inset-0 backdrop-blur-md bg-[#402C69] bg-opacity-40"
              aria-hidden="true"
            />
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-0 origin-top-right"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative flex justify-center w-full max-w-md  two-factor-bg">
                <div className="flex flex-col items-start justify-start w-full pt-8 pb-10 pl-8 pr-10">
                  <div className="flex self-end">
                    <label className="pr-2 text-2xl text-right heading typing-change-password">
                      2-F Authentication
                    </label>
                  </div>
                  <Transition
                    appear
                    show={isOpened}
                    as={Fragment}
                    enter="ease-out duration-300 delay-[300ms]"
                    enterFrom="opacity-0 scale-x-[125%]"
                    enterTo="opacity-100 scale-x-[100%]"
                  >
                    <div className="w-full py-2 mt-8 two-factor-strip">
                      <label>
                        Enter the 6 - digit code sent to your registered email
                        address.
                      </label>
                    </div>
                  </Transition>

                  <Transition
                    appear
                    show={isOpened}
                    as={Fragment}
                    enter="ease-out duration-300 delay-[300ms]"
                    enterFrom="opacity-0 "
                    enterTo="opacity-100 "
                  >
                    <div className="w-full mt-4 ">
                      <label className="w-full text-center heading !text-special-500">
                        {" "}
                        Authentication Code
                      </label>
                      <div className="w-full mt-4">
                        <OtpInput
                          value={otp}
                          onChange={handleChange}
                          numInputs={6}
                          containerStyle="bg-transparent w-full flex justify-between"
                          inputStyle="py-3 !w-[85%] text-lg text-white rounded-sm two-factor-digit bg-transparent otp-digit-animation outline-none"
                          renderInput={(props) => <input {...props} />}
                        />
                      </div>
                    </div>
                  </Transition>
                  <div className="flex items-center justify-center w-full mt-3">
                    <Transition
                      appear
                      show={isOpened}
                      as={Fragment}
                      enter="ease-in duration-300 delay-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                    >
                      <div className="w-[70%] items-center flex justify-center cursor-pointer">
                        <PrimaryButton onClick={handleConfirm} size="md">
                          <label className="pb-2 cursor-pointer typing-save-changes heading">
                            Verify
                          </label>
                        </PrimaryButton>
                      </div>
                    </Transition>
                  </div>
                </div>
                <Transition
                  appear
                  show={isOpened}
                  as={Fragment}
                  enter="ease-in duration-300 delay-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                >
                  <div
                    className="absolute bottom-0 right-0 z-20 w-20 h-20 rounded-full cursor-pointer -rotate-3"
                    onClick={handleDecline}
                  >
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

export default TwoFactorAuthModal;
