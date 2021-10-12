import { MdSwitchAccount } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { startRegisterWithEmailPasswordName } from "../redux/actions/authAction";
import { FormSubmit } from "../utils/TypeScript";

const Register = () => {
  const dispatch = useDispatch();

  const { values, handleInputChange, name, email, password, cf_password } =
    useForm({
      name: "Alfredo",
      email: "alfredo@gmail.com",
      password: "testtest",
      cf_password: "testtest",
    });

  const handleRegister = (e: FormSubmit) => {
    e.preventDefault();
    dispatch(startRegisterWithEmailPasswordName(values));
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div
        className="w-80 p-8 my-6 rounded-s-sm bg-s-body shadow-s-main"
        style={{ height: "570px" }}
      >
        <div className="flex justify-center mb-6">
          <MdSwitchAccount className="w-12 h-12 shadow-s-btn-icon rounded-full" />
        </div>
        <div className="text-center text-2xl tracking-wider font-bold">
          Crear cuenta
        </div>

        <form onSubmit={handleRegister} className="mt-8">
          <div className="py-2">
            <input
              type="text"
              className="w-full border-none outline-none bg-transparent text-s-gray py-3 px-6 shadow-s-input2 focus:shadow-s-input-hover rounded-2xl"
              placeholder="Nombre"
              name="name"
              value={name}
              onChange={handleInputChange}
            />
          </div>
          <div className="py-2">
            <input
              type="email"
              className="w-full border-none outline-none bg-transparent text-s-gray py-3 px-6 shadow-s-input2 focus:shadow-s-input-hover rounded-2xl"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleInputChange}
            />
          </div>
          <div className="pt-3">
            <input
              type="password"
              className="w-full border-none outline-none bg-transparent text-s-gray py-3 px-6 shadow-s-input2 focus:shadow-s-input-hover rounded-2xl"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleInputChange}
            />
          </div>
          <div className="pt-3">
            <input
              type="password"
              className="w-full border-none outline-none bg-transparent text-s-gray py-3 px-6 shadow-s-input2 focus:shadow-s-input-hover rounded-2xl"
              placeholder="Confirm password"
              name="cf_password"
              value={cf_password}
              onChange={handleInputChange}
            />
          </div>
          <button
            type="submit"
            className="hover:opacity-70 bg-s-primary font-semibold shadow-s-btn mt-8 w-full py-3 text-white rounded-3xl"
          >
            Registro
          </button>
        </form>
        <p className="mt-4 text-s-gray2 text-center">
          Ya tengo una
          <Link
            to="/login"
            className="text-s-gray ml-1 font-semibold hover:opacity-70"
          >
            Cuenta
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
