import TodoInput from './TodoInput';
import TodoList from './TodoList';
import '../css/TodoMain.css';
import { useState, useEffect } from 'react';
import uuid from 'react-uuid';

const TodoMain = () => {
    const [todoItem, setTodoItem] = useState('');
    const [todoList, setTodoList] = useState(() => {
        // 화면을 새로 열었을때 localStorage에 todoList가 있으면 배열로 바꿔주고, 없음 빈 배열로 만들어
        return localStorage.getItem('todoList') ? JSON.parse(localStorage.getItem('todoList')) : [];
    });

    const saveStorage = () => {
        // localstorage에 todoList변수만들고, json으로 만든 데이터를 todoList에 담아줘
        // 특정한 데이터가 변경되었을때 실행할 이벤트를 설정
        localStorage.setItem('todoList', JSON.stringify(todoList));
    };
    // todoList에 변화가 생기면, saveStorage 함수를 실행해
    useEffect(saveStorage, [todoList]);

    const todoInsert = () => {
        const newTodoList = [...todoList, { seq: uuid(), todo: todoItem, complete: false }]; //uuid로 seq 만들기
        setTodoList(newTodoList);
    };
    const todoComplete = (seq) => {
        // map : 배열 요소에 변화를 주기위한 함수
        const result = todoList.map((item) => {
            // click한 seq와 todoList에 같은 seq가 있으면
            if (item.seq === seq) {
                // item json을 펼쳐서 복사한후 그 중 complete 라는 속성이 있으면,
                // true 로 바꿔 , 앞에 ! 있으니까 반대로 바꿔
                return { ...item, complete: !item.complete };
            }
            return item;
        });
        setTodoList([...result]);
    };

    const todoDelete = (seq) => {
        // return 값이 fasle인 값을 빼버림
        // true 인 것들만 배열로 만들어준다
        const result = todoList.filter((item) => {
            return item.seq !== seq;
        });
        setTodoList([...result]);
    };

    return (
        <div className="todoMain">
            <header className="todoHeader">
                <h1>지금 할일!!</h1>
            </header>
            <TodoInput todoItem={todoItem} setTodoItem={setTodoItem} todoInsert={todoInsert} />
            <TodoList todoList={todoList} todoComplete={todoComplete} todoDelete={todoDelete} />
        </div>
    );
};

export default TodoMain;
