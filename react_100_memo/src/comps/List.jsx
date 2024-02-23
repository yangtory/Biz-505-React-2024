import "../css/List.css";
import moment from "moment";

const toDate = moment().format("YYYY-MM-DD");
const toTime = moment().format("HH:mm:ss");

const List = ({ memoItem, setMemoItem, memoList, memoInsert }) => {
  const saveClickHandler = () => {
    memoInsert();
  };
  const onChangeHandler = (e) => {
    const text = e.target.value;
    setMemoItem(text);
  };
  return (
    <section className="main">
      <div className="aside">
        <form className="date">
          <input className="todate" type="text" value={toDate} />
          <input className="totime" type="text" value={toTime} />
          <input className="btn_new" type="button" value="새로작성" />
        </form>
        <ul className="memo">
          <li className="memo list">
            <img className="memo item" src="../logo192.png" alt="" width="30px" height="30px" />
            설산에서 고행을
          </li>
          <li className="memo list">
            <img className="memo item" src="../logo192.png" alt="" width="30px" height="30px" />
            없는 사막이다 보이는
          </li>
          <li className="memo list">
            <img className="memo item" src="../logo192.png" alt="" width="30px" height="30px" />
            하는 온갖 과실이
          </li>
        </ul>
      </div>
      <div className="aside">
        <form className="input">
          <input className="tosubject" type="text" placeholder="제목을 입력하세요" value={memoItem} onChange={onChangeHandler} />
          <input className="tomemo" type="text" placeholder="메모를 입력하세요" onClick={saveClickHandler} />
          <input type="file" />
          <input className="btn_save" type="button" value="추가" />
        </form>
      </div>
    </section>
  );
};

export default List;
