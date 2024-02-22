// import { useState } from "react";
// seq 와 todo 구성요소를 갖는 JSON 객체 데이터 3개를 포함하는 배열
// JSON : Javascript Object Notation
//        { 변수, 값 }, { 변수1: 값, 변수2: 값 }
const todoListSample = [
    { seq: 1, todo: 'React 시작' },
    { seq: 2, todo: 'UI 구현' },
    { seq: 3, todo: 'Spring 서버' },
    { seq: 4, todo: '점심에 뭐 먹을까' },
    { seq: 5, todo: '오늘도 비가 온다' },
    { seq: 6, todo: '내일은 더 많이 비온다' },
];

const TodoList = ({ todoList }) => {
    // todoListSample 데이터가 채워진 todoList 상태 변수 배열 시작하기
    // const [todoList, setTodoList] = useState(todoListSample);

    // **시나리오가 변경되어 todoList 상태배열을 TodoMain 으로 부터
    // props 로 전달받아 사용

    // forEach() : todoList 배열의 개수만큼 반복하는 함수
    // todoList.forEach((todo) => console.log(todo));
    // todoList.filter();
    // exec/array.js 참조

    // const viewLis = todoList.map((item) => {
    //   return <h3>{item.todo}</h3>;
    // }); //밑의 코드와 같다

    const viewList = todoList.map((item) => <div className="todoItem">{item.todo}</div>); //return 이 생략된거
    return <>{viewList}</>;
};
export default TodoList;
