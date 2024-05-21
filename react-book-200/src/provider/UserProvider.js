import { createContext, useState } from "react";

/*
ContextProvider
React 의 Driling Props 를 회피하기 위한 Global State 를 관리하는 도구
*/
// 새로운 Context 생성하기
const UserContext = createContext();

// Provider 생성하기
const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState();

  return (
    // user,setUser 를 json 으로바꿔 value 에 추가
    // UserContext 에서 Provider 추출
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContextProvider };
