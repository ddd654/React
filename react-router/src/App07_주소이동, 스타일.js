import { Route, Routes } from 'react-router-dom';
import Info from './component/Info';
import Home from './component/Home';
import User from './component/User';
import Board from './component/Board';
import BoardContent from './component/BoardContent';
import Header from './layout/Header';
import MyPage from './component/MyPage';


// index.js 에서 <React.StrictMode> 지우기

// 08-29 주소넣기 - useParam, naviLink,
// 이건 라우터다 
function App() {
  return (
    <Routes>

      <Route element={<Header />} > {/* 라우트 새로만들어서 css 적용시키기 */}
        <Route path='/' element={<Home />}></Route>
        <Route path='/info/:num' element={<Info />}></Route> {/* >> info */}
        <Route path='/user' element={<User />}></Route>
      </Route>
      {/* 중첩 라우터 - 글 상세 */}
      {/* <Route path='/board' element={<Board></Board>}></Route> */}
      {/* <Route path='/board/:num' element={<BoardContent></BoardContent>}></Route> */}

      <Route path="/board" element={<Board></Board>}>
        <Route path=":num" element={<BoardContent />}></Route>
      </Route>

      {/* MyPage - Navigate component*/}
      <Route path='/mypage' element={<MyPage/>}></Route>

    </Routes>
  );
}

export default App;
