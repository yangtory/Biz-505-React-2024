import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const BookContext = createContext();
const useBookContext = () => {
  return useContext(BookContext);
};

const BookContextProvider = ({ children }) => {
  const [bookList, setBookList] = useState([]);
  useEffect(() => {
    const bookFetch = async () => {
      const res = await fetch("/naver/books/java");
      const json = await res.json();
      setBookList([...json]);
    };
    bookFetch();
    // [] : 안에 아무것도 없으면 최초 한번만 실행됨
  }, []);
  return (
    <BookContext.Provider value={{ bookList }}>
      {children}
    </BookContext.Provider>
  );
};

export { BookContextProvider, useBookContext };
