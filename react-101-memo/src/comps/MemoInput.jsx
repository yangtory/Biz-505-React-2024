const MemoInput = ({ memo, setMemo, memoInsert }) => {
  const onChangeHandler = (e) => {
    const target = e.target;
    const text = target.value;
    const name = target.name;
    // 기존의 memo 객체를 복제하고
    // name 속성에 저장된 문자열을 Key 로 하여 input tag에 입력된 값을 새로운 객체에 포함해
    setMemo({ ...memo, [name]: text }); // name 문자열을 변수로 만들어
    // 위 코드와 같다
    // if (name === "m_subject") {
    //   setMemo({ ...memo, m_subject: text });
    // } else if (name === "m_memo") {
    //   setMemo({ ...memo, m_memo: text });
    // }
  };
  // 버튼 클릭하면 할아버지 출력좀
  const onClickInsert = () => {
    memoInsert();
  };
  return (
    <>
      <input type="text" placeholder="메모제목" value={memo.m_subject} onChange={onChangeHandler} name="m_subject" />
      <input type="text" placeholder="메모를 입력하세요" value={memo.m_memo} onChange={onChangeHandler} name="m_memo" />
      <input type="file" />
      <input type="button" value="추가" onClick={onClickInsert} />
      <input type="hidden" value="삭제" />
      <p>{memo.m_subject}</p>
    </>
  );
};
export default MemoInput;
