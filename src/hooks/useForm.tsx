import { useState } from "react";
import { InputChange } from "../utils/TypeScript";

export function useForm<T>(initState: T) {
  const [values, setValues] = useState(initState);

  const reset = (newFormState = initState) => {
    setValues(newFormState);
  };

  const handleInputChange = ({ target }: InputChange) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  return { values, handleInputChange, reset, ...values };
}
