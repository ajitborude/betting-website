import { useAppDispatch } from "@/hooks/common";
import { memoize } from "proxy-memoize";
import { modalThunkActions } from "../redux/slices/modal";
import { AppDispatch, AppState } from "../redux/store";

function useModal() {
  const dispatch: AppDispatch = useAppDispatch();
  //@ts-ignore
  const isOpened = memoize((state: AppState) => state.modalReducer.isOpened);
  //@ts-ignore
  const modalType = memoize((state: AppState) => state.modalReducer.modalType);
  const modalProps = memoize(
    //@ts-ignore
    (state: AppState) => state.modalReducer.modalProps
  );
  const modalResponse = memoize(
    //@ts-ignore
    (state: AppState) => state.modalReducer.modalResponse
  );
  const isConfirmed = memoize(
    //@ts-ignore
    (state: AppState) => state.modalReducer.isConfirmed
  );
  const isDeclined = memoize(
    //@ts-ignore
    (state: AppState) => state.modalReducer.isDeclined
  );

  const open = async (params: { modalType: string; modalProps: any }) => {
    return dispatch(modalThunkActions.open(params));
  };

  const confirm = (params: any) => {
    return dispatch(modalThunkActions.confirm(params));
  };

  const decline = () => {
    return dispatch(modalThunkActions.decline());
  };

  return {
    isOpened,
    isConfirmed,
    isDeclined,
    modalType,
    modalProps,
    modalResponse,
    open,
    confirm,
    decline,
  };
}

export default useModal;
