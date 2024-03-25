"use client";
import css from "@/css/insert.module.css";
import { customerSearch } from "@/app/api/customer";
import { selectAll } from "@/app/api/order";
import { useEffect, useState } from "react";
import ProductSearch from "./comps/ProductSearch";
import CustomerSearch from "./comps/CustomerSearch";

const OrderInsert = () => {
  const [search, setSearch] = useState("");
  const [customList, setCustomList] = useState([]);
  const [oneList, setOneList] = useState([]);
  const [newNum, setNewNum] = useState("");
  const [productList, setProductList] = useState([]);

  // 새코드 만들기
  useEffect(() => {
    const getNewNum = async () => {
      const result = await selectAll();
      const lastNum = Number(result.length - 1);
      const currentNum = result[lastNum].o_num;
      const subNum = currentNum.substring(1, 6);
      const strNum = String(Number(subNum) + 1);
      const padNum = "O" + strNum.padStart(5, "0");
      console.log(padNum);
      setNewNum(padNum);
    };
    getNewNum();
  });

  const viewList = customList.map((list) => (
    <li
      key={list.c_code}
      onClick={() => codeClickHandler(list.c_code)}
    >
      {list.c_code}
    </li>
  ));

  // 검색 리스트 클릭 시 1명의 디테일 출력
  const codeClickHandler = async (code) => {
    const result = await customerSearch(code);
    setOneList([...result]);
    setSearch(result[0].c_code);
    console.log(result);
  };

  const oneViewList = oneList.map((one) => (
    <ul>
      <li key={one.c_code}>{one.c_code}</li>
      <li>{one.c_name}</li>
      <li>{one.c_tel}</li>
    </ul>
  ));

  //

  return (
    <>
      <section className={css.main}>
        <h1>주문서 입력</h1>
        <h2>{newNum}</h2>
        <form className={css.form}>
          <div>
            <CustomerSearch
              search={search}
              setSearch={setSearch}
              setCustomList={setCustomList}
            />
          </div>
          {oneViewList}
          <div>
            <ProductSearch
              productList={productList}
              setProductList={setProductList}
            />
          </div>
          <div>
            <input placeholder="주문수량" />
            <button>추가</button>
          </div>
        </form>
        <div>
          {/* <table className={css.list}>
                        <tr>
                            <th>상품코드</th>
                            <th>상품명</th>
                            <th>주문수량</th>
                        </tr>
                        <tr>
                            <td>P0010</td>
                            <td>칸쵸</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>P0010</td>
                            <td>칸쵸</td>
                            <td>100</td>
                        </tr>
                    </table> */}
        </div>
      </section>
      <section>
        <h1>리스트</h1>
        <ul>{viewList}</ul>
      </section>
    </>
  );
};
export default OrderInsert;
