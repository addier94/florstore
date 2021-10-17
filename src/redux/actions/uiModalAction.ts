import { IModalType, MODAL } from "../types/modalType";

export const handleModal = (state: boolean): IModalType => ({
  type: MODAL,
  payload: { show: state },
});
