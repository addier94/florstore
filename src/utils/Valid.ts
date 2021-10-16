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

// Valid Blog
// export const validCreateBlog = ({
//   title,
//   content,
//   description,
//   thumbnail,
//   category,
// }: IBlog) => {
//   const err: string[] = [];

//   if (title.trim().length < 10) {
//     err.push("Title has at least 10 characters.");
//   } else if (title.trim().length > 50) {
//     err.push("Title is up to 50 characters long.");
//   }

//   if (content.trim().length < 2000) {
//     err.push("Content has at least 2000 characters.");
//   }

//   if (description.trim().length < 50) {
//     err.push("Description has at least 50 characters.");
//   } else if (description.trim().length > 200) {
//     err.push("Description is up to 200 characters long.");
//   }

//   if (!thumbnail) {
//     err.push("Thumbnail cannot be left blank.");
//   }

//   if (!category) {
//     err.push("Category cannot be left blank.");
//   }

//   return {
//     errMsg: err,
//     errLength: err.length,
//   };
// };
