import MemoItem from "./MemoItem";
const MemoList = ({ memoList }) => {
  const viewList = memoList.map((memo) => {
    return (
      <li>
        <MemoItem memo={memo} />
      </li>
    );
  });
  return <ul>{viewList}</ul>;
};
export default MemoList;
