import { useNavigate } from 'react-router-dom';
import style from './Header.module.css';



function Header() {

  //useNavigate hook - history 객체 비슷
  //1. 모바일에선 필요할 수 있다
  let nav = useNavigate();

  //3. goBack 기능
  let goBack = () => {
    nav(-1); // 주소나 숫자

  }

  //5. Home 가기
  let goHome = ()=>{
    nav('/'); // 이건 주소
  }
  return (

    <>
      <header className={style.wrap}>
        <h4>헤더123</h4>
        <ul className={style.wrap_list}>
          <li>목록1</li>
          <li>목록2</li>
          <li>목록3</li>
          <li>목록4</li>
        </ul>
        <div>
          <button onClick={goHome}>홈으로</button> {/* 4. 홈가기 */}
          <button onClick={goBack}>뒤로가기</button>{/* 2. onClick 걸기 */}
        </div>
      </header>
    </>
  )
}

export default Header;