import List from "../comps/List";
import Footer from "../comps/Footer";
import "../css/Main.css";
import { useState } from "react";

const Main = () => {
  const [memoItem, setMemoItem] = useState("");
  const [memoList, setMemoList] = useState([]);

  const memoInsert = () => {
    const newMemoList = [...memoList, { memo: memoItem }];
    setMemoList(newMemoList);
  };
  return (
    <div>
      <header>
        <h1>오늘은 내 생의 가장 젊은날</h1>
      </header>
      <List memoItem={memoItem} setMemoItem={setMemoItem} memoList={memoList} memoInsert={memoInsert} />
      <Footer />
    </div>
  );
};

export default Main;
