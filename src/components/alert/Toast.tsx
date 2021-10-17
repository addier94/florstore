import Swal from "sweetalert2";

import { useDispatch } from "react-redux";
import { ALERT } from "../../redux/types/alertType";

interface IProps {
  typeIcon: string;
  body: string | string[];
}

const Toast = ({ typeIcon, body }: IProps) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch({ type: ALERT, payload: {} });
  };

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
    didClose: () => {
      handleClose();
    },
  });
  if (typeIcon === "success") {
    Toast.fire({
      icon: typeIcon,
      title: body,
    });
  } else if (typeIcon === "error") {
    Toast.fire({
      icon: typeIcon,
      title: body,
    });
  }

  return <></>;
};

export default Toast;
