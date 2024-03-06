// BookSearch 컴포넌트를 CSR 의 clinet Component 로 사용하겠다.
"use client";
const BookSearch = ({ search, setSearch }) => {
  // delay가 전달이 안되면 200 써
  const debounce = (callback, delay = 200) => {
    let debounceTimer;
    return (...args) => {
      // debounce 함수가 호출되면 무조건 timer 를 reset 하라
      clearTimeout(debounceTimer); //debounceTimer 클리어
      //setTimeout()delay 만큼 기다렷다가 callback.apply 실행
      debounceTimer = setTimeout(
        //apply : args 를 callback 한테 전달 this는 callback자신을 말함
        //나한테 args 를 주입해줘
        () => callback.apply(this, args),
        delay
      );
    };
  };

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  // debounce 객체를 사용하여 onChangeHandler 제어하기
  // 키보드에서 문자를 입력한 후 100ms 동안 기다리면
  // 그 때 onChangeHandler 를 실행하라
  // debounce 객체의 callback 이 onChangeHandler 가 된다.
  const onDebounceHandler = debounce(onChangeHandler, 200);
  return (
    <div className="book search">
      <input
        placeholder="검색어"
        defaultValue={search}
        onChange={onDebounceHandler}
        // onChange={(e)=>onDebounceHandler(e)}
      ></input>
    </div>
  );
};

export default BookSearch;
