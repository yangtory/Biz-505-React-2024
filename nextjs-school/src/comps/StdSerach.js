// BookSearch 컴포넌트를 CSR 의 clinet Component 로 사용하겠다.
"use client";
const StdSearch = ({ search, setSearch }) => {
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

  const onDebounceHandler = debounce(onChangeHandler, 200);
  return (
    <div className="search">
      <input
        placeholder="검색어"
        defaultValue={search}
        onChange={onDebounceHandler}
      ></input>
    </div>
  );
};

export default StdSearch;
