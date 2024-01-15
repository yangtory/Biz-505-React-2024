// 부모(TodoMain) 로받은 properties(props : 속성) 로 받기
const TodoInput = ({ todo, setTodo, todoList, setTodoList }) => {
  const todoOnChangeHandler = (event) => {
    const target = event.target;
    setTodo(target.value);
  };

  const addBtnClickHandler = () => {
    // ... : 스프레드 연산자
    // [] : 새로운배열을 만들고, ... : 기존에있는 todolsit 를 전부 복사하고
    // todo(input 에서 입력한 값)는 맨 끝에 추가해라
    setTodoList([...todoList, todo]);
  };
  return (
    <div className="input">
      <input placeholder="TO DO..." value={todo} onChange={todoOnChangeHandler} />
      {/* todo state 에 저장된 값이 2글자 이상일때만 버튼을 클릭할수 있도록 해*/}
      <button id="btn_add" onClick={addBtnClickHandler} disabled={todo.length < 2}>
        추가
      </button>
    </div>
  );
};
export default TodoInput;
