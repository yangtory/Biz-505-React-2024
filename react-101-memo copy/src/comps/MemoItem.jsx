import "../css/Memo.css";
const MemoItem = ({ memo }) => {
  return (
    <div className="memoItem">
      <ul>
        <li className="item">{memo}</li>
      </ul>
    </div>
  );
};
export default MemoItem;
