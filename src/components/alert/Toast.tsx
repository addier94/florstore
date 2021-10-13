import Swal from "sweetalert2";

import { useDispatch } from "react-redux";
import { ALERT } from "../../redux/types/alertType";

interface IProps {
  title: string;
  body: string | string[];
  bgColor: string;
}

const Toast = ({ title, body, bgColor }: IProps) => {
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
  });

  Toast.fire({
    icon: "error",
    title: "Signed in successfully",
  });

  return (
    <>
      <div>
        {/* {Swal.fire("Error", title, "error")} */}
        <p>{title}</p>
        <p>{body}</p>
        <p>{bgColor}</p>
      </div>
    </>
  );
};

export default Toast;
