import { IProductsUser } from "../redux/types/productsUserType";
import { IUserRegister } from "./TypeScript";

export const validRegister = (userRegister: IUserRegister) => {
  const { name, email, password, cf_password } = userRegister;
  const errors: string[] = [];

  if (!name) {
    errors.push("Por favor añade un nombre.");
  } else if (name.length > 20) {
    errors.push("Tu nombre no debe ser mayor a 20 caracteres.");
  }

  if (!email) {
    errors.push("Por favor añade un Email.");
  } else if (!validateEmail(email)) {
    errors.push("Formato de email incorrecto.");
  }

  const msg = checkPassword(password, cf_password);
  if (msg) errors.push(msg);

  return {
    errMsg: errors,
    errLength: errors.length,
  };
};

export const checkPassword = (password: string, cf_password: string) => {
  if (password.length < 4) {
    return "La contraseña debe tener al menos 4 caracteres.";
  } else if (password !== cf_password) {
    return "Las contraseñas no coinciden.";
  }
};

export function validateEmail(email: string) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Validate product
export const validProduct = (userID: string, name: string) => {
  const errors: string[] = [];

  if (!name) {
    errors.push("Añade un nombre para el producto");
  } else if (name.length <= 3) {
    errors.push(`${name.strike()} debe ser mayor a 3 caracteres`);
  } else if (name.length >= 30) {
    errors.push(`${name.strike()} no debe ser mayor a 30 caracteres`);
  }
  if (!userID) {
    errors.push("Error interno (no se pudo obtener userID)");
  }
  return { errMsg: errors, errLength: errors.length };
};
