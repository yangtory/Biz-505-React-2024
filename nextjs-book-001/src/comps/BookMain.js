"use client";
import BookSearch from "./BookSearch";
import BookList from "./BookList";
import BookDetail from "./BookDetail";
// useEffect : 감시하고잇다가 변화생기면 이벤트 발생
import { useState, useEffect } from "react";
import "./BookMain.css";

const BookMain = () => {
  const [search, setSearch] = useState("");
  const [bookList, setBookList] = useState([]);
  const fetchBooks = async () => {
    try {
      const response = await fetch(`/api/get?search=${search}`);
      const books = await response.json();
      setBookList([...books]);
    } catch (error) {
      console.log(error);
    }
  };
  /**
   * useEffect() 는 CSR(Client Side Rendering) 컴포넌트에서
   * 특정한 state 변수를 감시하고 있다가
   * state 변수의 변화가 생기면 event 를 일으키고 내부의 코드를 실행
   *
   * useEffect() 에 state([]) 를 공백으로 두면
   * 현재 컴포넌트가 화면에 mount 되었을때 한 번 event 가 발생하고
   * 내부의 코드를 실행한다.
   */
  useEffect(() => {
    fetchBooks();
  }, [search]); // 이 화면이 렌더링될때(mount가 끝나면) 자동으로 실행됨
  return (
    <section>
      <BookSearch search={search} setSearch={setSearch} />
      <article className="body">
        <BookList bookList={bookList} />
        <BookDetail />
      </article>
    </section>
  );
};

export default BookMain;
