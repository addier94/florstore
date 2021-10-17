import { IModal } from "../../utils/TypeScript";
import { IModalType, MODAL } from "../types/modalType";

const modalReducer = (
  state: IModal = { show: false },
  action: IModalType
): IModal => {
  switch (action.type) {
    case MODAL:
      return action.payload;
    default:
      return state;
  }
};

export default modalReducer;
