import css from "@/css/insert.module.css";

const OrderInsert = () => {
  return (
    <section className={css.main}>
      <h1>주문서 입력</h1>
      <h2>주문번호 : O01001</h2>
      <form className={css.form}>
        <div>
          <input placeholder="고객코드" value="C0020" />
          <button>검색</button>
        </div>
        <ul className={css.clist}>
          <li>고객코드 : C0020</li>
          <li>고객명 : 홍길동</li>
          <li>연락처 : 010-1111-1111</li>
        </ul>
        <div>
          <input placeholder="상품코드" />
          <button>검색</button>
        </div>
        <div>
          <input placeholder="주문수량" />
          <button>추가</button>
        </div>
      </form>
      <div>
        <table className={css.list}>
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
        </table>
      </div>
    </section>
  );
};
export default OrderInsert;
