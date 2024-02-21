import Box from "./Box";
// html 의 link 명령과 같다
import "./App.css";
import View from "./View";
import Item from "./Item";

// 함수의 이름은 파일 이름과 같이한다.
// 함수 방식으로 App 이라는 컴포넌트 시작(생성)
const App = () => {
  // React(JSX) 에서는 tag(컴포넌트) 에 클래스를 지정할때
  // className 키워드를 사용한다. return문 안에서는 주석xx
  return (
    <div className="AppMain">
      <h1>반갑습니다</h1>
      <h1>우리나라만세</h1>
      <Box>대한민국</Box>
      <Box>우리나라</Box>
      <Box>
        <h1>광주광역시</h1>
      </Box>
      <View name="홍길동" age="33" />
      <View name="이몽룡" age="20" />
      <Item name="성춘향" age="16" />
    </div>
  );
};
// tag 가 여러개있을때 괄호로 묶고, 부모 tag 가 있어야 한다.
export default App;
