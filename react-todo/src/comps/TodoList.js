// 부모에게 받은 todoList 전달 받기, list 를 그려주는 역할
const TodoList = ({ todoList }) => {
  //   const [todoList, setTodoList] = useState(["정보처리기사 필기", "React 학습", "JS 학습", "월요일 저녁", "이번주는 매우 추워"]);

  // todolist 에 잇는 애들을 쫙 펼쳐서 item에 담아 함수를 실행, map도 비슷
  // 다른점은 return문이 있다. 가공된 배열로 만든다.
  //   todoList.forEach((item) => {});
  // 선언적 코드, 내가 표시할 위치에 이 값을 넣을거야 라고 선언하면 만들어쥼
  const todoItemView = todoList.map((item) => {
    return <div>{item}</div>;
  });

  return <div className="list">{todoItemView}</div>;
};
export default TodoList;
