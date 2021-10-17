import { IModal } from "../../utils/TypeScript";

export const MODAL = "MODAL";

export interface IModalType {
  type: typeof MODAL;
  payload: IModal;
}
