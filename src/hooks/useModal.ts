import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/hooks/common';
import { modalThunkActions } from '../redux/slices/modal';
import { AppDispatch, AppState } from '../redux/store';

function useModal() {
  const dispatch: AppDispatch = useAppDispatch();

  const {
    isOpened,
    modalType,
    modalProps,
    modalResponse,
    isConfirmed,
    isDeclined,
  } = useSelector((state: AppState) => ({
    isOpened: state.modalReducer.isOpened,
    isConfirmed: state.modalReducer.isConfirmed,
    isDeclined: state.modalReducer.isDeclined,
    modalType: state.modalReducer.modalType,
    modalProps: state.modalReducer.modalProps,
    modalResponse: state.modalReducer.modalResponse,
  }));

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
