import React, { useState } from "react";
import { useSelector } from "react-redux";
import Select from "react-select";
import { RootStore } from "../../utils/TypeScript";

const ProductSelected = () => {
  const products = useSelector((state: RootStore) =>
    state.productsUser.productList.map((item) => {
      return { value: item.uid || "", label: item.name };
    })
  );

  const [selectedOption, setSelectedOption] = useState([
    { value: "null", label: "Select" },
  ]);

  const handleChange = (selecedOption: any) => {
    setSelectedOption(selecedOption);
  };

  return (
    <div className="productSelected">
      <Select
        className="w-44 shadow-s-btn"
        value={selectedOption}
        onChange={handleChange}
        options={products}
      />
    </div>
  );
};
export default ProductSelected;
