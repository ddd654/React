import { Route, Routes } from 'react-router-dom';
import Info from './component/Info';
import Home from './component/Home';
import User from './component/User';

// index.js 에서 <React.StrictMode> 지우기

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/info' element={<Info />}></Route>
      <Route path='/user' element={<User />}></Route>
    </Routes>
  );
}

export default App;
