import MemoItem from "./MemoItem";

const MemoList = ({ memoList }) => {
  const viewList = memoList.map((item) => <MemoItem memo={item.memo} key={item.seq} />);
  return <>{viewList}</>;
};
export default MemoList;
