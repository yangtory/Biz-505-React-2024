import { useState } from "react";
import TodoInput from "./TodoInput";
import "../css/Todo.css";
import TodoList from "./TodoList";

const TodoMain = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState(["정보처리기사 필기", "React 학습", "JS 학습", "월요일 저녁", "이번주는 매우 추워"]);

  // 리액트는 같은 형제끼리 전달받을수 없어서 부모에게 보낸후에 받는식으로 해야됨
  // 자식한테 보내기
  return (
    <div className="todo">
      <TodoInput todo={todo} setTodo={setTodo} todoList={todoList} setTodoList={setTodoList} />
      <TodoList todoList={todoList} />
    </div>
  );
};

export default TodoMain;
