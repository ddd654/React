
// react에 CSS 적용하기
import './App.css';
import styled from './App.module.css'; //파일이름 그냥 써야함

function App() {

  //1. css는 컴포넌트와 동일한 이름으로 만들기
  //예) app.js = app.css

  return (
    <>
      <div className="app-title">
        css파일로 디자인
      </div>
      <div style={{
        color: 'blue',
        border: '5px solid black'
      }}>
        직접 건드리기
      </div>

      {/* import에 styled 쓰면 */}
      <div className={styled.app_wrap}>
        <p className={styled.title}>2module</p>
        <p className="content">global</p>
      </div>
    </>
  )
}

export default App;













