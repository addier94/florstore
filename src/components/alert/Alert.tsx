import { useSelector } from "react-redux";
import { RootStore } from "../../utils/TypeScript";

import Loading from "./Loading";
import Toast from "./Toast";

export const Alert = () => {
  const { alert } = useSelector((state: RootStore) => state);

  return (
    <div>
      {alert.loading && <Loading />}

      {alert.errors && <Toast typeIcon="error" body={alert.errors} />}

      {alert.success && <Toast typeIcon="success" body={alert.success} />}
    </div>
  );
};

export const showErrMsg = (msg: string) => {
  return <div className="errMsg">{msg}</div>;
};

export const showSuccessMsg = (msg: string) => {
  return <div className="successMsg">{msg}</div>;
};
