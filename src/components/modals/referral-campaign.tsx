import useModal from "@/hooks/useModal";
import { IReducerAction } from "@/types/common";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, Reducer, useEffect, useReducer, useRef } from "react";
import SimpleReactValidator from "simple-react-validator";
import CloseButton from "../common/close-button";
import PrimaryButton from "../common/primary-button";
import TextInput from "../common/text-input";

interface IState {
  campaignName: "";
}

const ReferralCampaign: React.FC<any> = ({ isOpened }): JSX.Element => {
  const { confirm, decline, modalProps } = useModal();
  //@ts-ignore
  const isEdit = !!modalProps.campaign;

  const validator = useRef(
    new SimpleReactValidator({
      className: "text-xs text-red-200 ml-2 italic mt-1",
    })
  );

  const initialState: IState = {
    //@ts-ignore
    campaignName: isEdit ? modalProps.campaign.campaign_name : "",
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

  useEffect(() => {
    validator.current.hideMessages();
    dispatch({ type: "reset" });
  }, [isOpened]);

  const [state, dispatch] = useReducer<Reducer<IState, IReducerAction>, IState>(
    reducer,
    initialState,
    () => initialState
  );

  const { campaignName } = state;

  const handleChange = (type: string, value: any) => {
    dispatch({ type, value });
  };

  const handleDecline = (e?: any) => {
    if (e) e.preventDefault();
    decline();
  };

  const handleConfirm = async (e?: any) => {
    if (e) e.preventDefault();
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
          <div className="fixed inset-0 bg-[#402C69] bg-opacity-50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="z-10 flex items-center justify-center min-h-full p-4 text-center">
            <div
              className="fixed inset-0 backdrop-blur-sm "
              aria-hidden="true"
            />
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative flex flex-col justify-center w-full max-w-md pt-8 pb-10 pl-6 pr-8 edit-username-frame">
                <div className="flex self-end">
                  <label className="pr-2 text-2xl text-right heading typing-change-password">
                    {isEdit ? "Edit" : "Create"} Campaign
                  </label>
                </div>
                <Transition
                  appear
                  show={isOpened}
                  as={Fragment}
                  enter="ease-out duration-300 delay-[300ms]"
                  enterFrom="opacity-0 translate-x-[-10%]"
                  enterTo="opacity-100 translate-x-[0%]"
                >
                  <div className="w-full px-4 mt-5">
                    <TextInput
                      isPassword={false}
                      validator={[validator, "required|alpha_num"]}
                      defaultValue={campaignName}
                      placeholder="Campaign Name"
                      label="Campaign Name"
                      onChange={(value) => handleChange("campaignName", value)}
                    />
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
                          Save Changes
                        </label>
                      </PrimaryButton>
                    </div>
                  </Transition>
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
                    className="absolute -bottom-2.5 -right-0 w-20 h-20 cursor-pointer rotate-2 rounded-full z-20"
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

export default ReferralCampaign;
