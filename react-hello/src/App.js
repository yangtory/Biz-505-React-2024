import logo from "./logo.svg";
import "./css/App.css";
import Hello from "./comps/Hello";

const App = () => {
  return (
    // react dom 태그들
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <Hello />
    </div>
  );
};

// 내보내기, 이게 있어야 import 할수 있다
// App 이라는 함수를 다른 곳에서 import 할 수 있도록 하는 선언문
export default App;
