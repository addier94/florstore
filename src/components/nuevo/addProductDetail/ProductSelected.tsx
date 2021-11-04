import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Select from "react-select";
import { RootStore } from "../../../utils/TypeScript";

interface IVariation {
  setVariation: React.Dispatch<
    React.SetStateAction<{
      total: string;
      productID: string;
    }>
  >;
  variation: {
    total: string;
    productID: string;
  };
}

const initState = [{ value: "null", label: "Seleccionar" }];

const ProductSelected: FC<IVariation> = ({ variation, setVariation }) => {
  const products = useSelector((state: RootStore) =>
    state.productsUser.productList.map((item) => {
      return { value: item.uid || "", label: item.name };
    })
  );

  const [selectedOption, setSelectedOption] = useState(initState);

  useEffect(() => {
    if (!variation.productID) {
      setSelectedOption(initState);
    }
  }, [variation.productID]);

  const handleChange = (selecedOption: any) => {
    setSelectedOption(selecedOption);
    setVariation({ ...variation, productID: selecedOption.value });
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
export default React.memo(ProductSelected);
