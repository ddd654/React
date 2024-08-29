import { Link, NavLink, Outlet } from "react-router-dom";

function Board() {

  const mtStyle = { color: "green", background: "purple" }
  
  return (
    <>
      <h4>글 목록</h4>

      <ul>
        <li><Link to='/board/1'>1번글</Link></li>
        <li><Link to='/board/2'>2번글</Link></li>
        <li><Link to='/board/3'>3번글</Link></li>
        <li><Link to='/board/4'>apple</Link></li>

        <hr></hr>
        {/* NavLink */}
        <li><NavLink to='/board/1' style={(a) => {
          console.log("123",  a);
        }}>11번글!!!!!!</NavLink></li> {/* 실행할 함수의 첫 매개변수 */}
        
        <li><NavLink to='/board/2' style={({ isActive }) => {
          return isActive ? mtStyle : undefined;
        }}>2번글</NavLink></li>

        <li><NavLink to='/board/3' style={({ isActive }) => isActive ? mtStyle : undefined}>3번글</NavLink></li>
        <li><NavLink to='/board/4'>apple</NavLink></li>

      </ul>

      {/* 중첩라우터에서 하위 컴포 표시 */}
      <p>App.js에서 Route안의 Route를 표시한다</p>
      <Outlet></Outlet>



    </>
  )

}

export default Board;