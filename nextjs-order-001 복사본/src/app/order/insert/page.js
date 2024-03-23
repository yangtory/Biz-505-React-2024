'use client';
import { customerSearch } from '@/app/api/customer';
import css from '@/css/insert.module.css';
import { useEffect, useState } from 'react';

const OrderInsert = () => {
    const [search, setSearch] = useState('');
    const [customList, setCustomList] = useState([]);
    const [oneList, setOneList] = useState([]);

    const onChangeHandler = (e) => {
        const value = e.target.value;
        setSearch(value);
    };

    const onClickHandler = () => {
        customSearch(search);
    };

    const customSearch = async (value) => {
        setCustomList([]);
        const result = await customerSearch(value);
        setCustomList([...result]);
        console.log(result);
    };

    const codeClickHandler = async (code) => {
        const result = await customerSearch(code);
        setOneList([...result]);
        console.log(result);
    };

    const viewList = customList.map((list) => (
        <li key={list.c_code} onClick={() => codeClickHandler(list.c_code)}>
            {list.c_code}
        </li>
    ));

    const oneViewList = oneList.map((one) => (
        <ul>
            <li key={one.c_code}>{one.c_code}</li>
            <li>{one.c_name}</li>
            <li>{one.c_tel}</li>
        </ul>
    ));

    return (
        <>
            <section className={css.main}>
                <h1>주문서 입력</h1>
                <h2>주문번호 : O01001</h2>
                <form className={css.form}>
                    <div>
                        <input placeholder="고객코드" value={search} onChange={onChangeHandler} />
                        <button type="button" onClick={onClickHandler}>
                            검색
                        </button>
                    </div>
                    {oneViewList}
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
