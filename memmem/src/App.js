import Join from "./comps/Join";
import Login from "./comps/Login";
import Main from "./comps/Main";
import Header from "./include/Header";
import AOS from "aos";
import "aos/dist/aos.css";

import "./css/App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

const App = () => {
  AOS.init({
    duration: 1200,
  });
  return (
    <>
      <Header />
      <div className="main">
        {/* <div className="side">
          <ul>
            <li>회원권</li>
            <li>회원관리</li>
            <li>강사관리</li>
            <li>수업관리</li>
            <li>일정관리</li>
            <li>매출관리</li>
            <li>공지사항</li>
            </ul>
        </div> */}
        <section>
          <Router>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/login" element={<Login />} />
              <Route path="/join" element={<Join />} />
            </Routes>
          </Router>
        </section>
      </div>
    </>
  );
};
export default App;
