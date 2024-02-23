const MemoInput = ({ memoItem, setMemoItem, memoInsert }) => {
  const onInsertHandler = () => {
    memoInsert();
    setMemoItem("");
  };
  const onChangeHandler = (e) => {
    const subject = e.target.value;
    setMemoItem(subject);
  };
  return (
    <>
      <input type="text" placeholder="메모제목" value={memoItem} onChange={onChangeHandler} />
      <input type="text" placeholder="메모를 입력하세요" />
      <input type="file" />
      <input type="button" value="저장" onClick={onInsertHandler} />
      <input type="hidden" value="메모추가" />
    </>
  );
};
export default MemoInput;
