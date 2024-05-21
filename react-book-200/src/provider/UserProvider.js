import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

/*
ContextProvider
React 의 Driling Props 를 회피하기 위한 Global State 를 관리하는 도구
*/
// 새로운 Context 생성하기
const UserContext = createContext();

/*
react 의 useContext() Hook 함수를 커스텀하여
UserContext 에 저장된 state 를 사용할수 있도록 도와주는 함수
함수 이름이 반드시 use**() 으로 시작해야 한다
*/
const useUserContext = () => {
  return useContext(UserContext);
};

// Provider 생성하기
const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState();

  const onFetchUser = useCallback(() => {
    const fetchUser = async () => {
      const res = await fetch("/api/user");
      const json = await res.json();
      setUser(json.username);
    };
    fetchUser();
  }, []);

  // onFetchUser 함수가 생성되면 호출해라
  useEffect(onFetchUser, [onFetchUser]);

  return (
    // user,setUser 를 json 으로바꿔 value 에 추가
    // UserContext 에서 Provider 추출
    <UserContext.Provider value={{ user, setUser, onFetchUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContextProvider, useUserContext };
