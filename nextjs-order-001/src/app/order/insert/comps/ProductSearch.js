import { selectAll } from "@/app/api/product";
import { useState } from "react";

const ProductSearch = ({ productList, setProductList }) => {
  const [search, setSearch] = useState("");

  const inputChangeHandler = (e) => {
    const value = e.target.value;
    setSearch(value);
  };

  const searchClickHandler = (code) => {
    setList(code);
  };

  const setList = async (code) => {
    setProductList([]);
    const result = await selectAll(code);
    setProductList([...result]);
    console.log(result);
  };

  return (
    <>
      <input
        placeholder="상품코드"
        value={search}
        onChange={inputChangeHandler}
      />
      <button type="button" onClick={searchClickHandler}>
        검색
      </button>
    </>
  );
};

export default ProductSearch;
