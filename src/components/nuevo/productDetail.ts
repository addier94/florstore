type PDValidate = {
  valid: boolean;
  bad: string;
};
export const sanitize = (
  box: string,
  qty: string,
  itemPrice: string
): PDValidate => {
  const rege = /^\d*\.?\d*$/;
  let result = { valid: false, bad: "" };
  // true when is match (rege.test(box))
  if (!rege.test(box.trim()) || box === ".") {
    result["bad"] = box.strike();
    result["valid"] = false;
    return result;
  } else if (!rege.test(qty.trim()) || qty === ".") {
    result["bad"] = qty.strike();
    result["valid"] = false;
    return result;
  } else if (!rege.test(itemPrice.trim()) || itemPrice === ".") {
    result["bad"] = itemPrice.strike();
    result["valid"] = false;
    return result;
  } else {
    result["valid"] = true;
    return result;
  }
};

export const calcTotal = (box: string, qty: string, itemPrice: string) => {
  const subTotal = (parseFloat(qty) * parseFloat(itemPrice)).toString();
  const total = (parseFloat(subTotal) - parseFloat(box)).toString();
  return total;
};
