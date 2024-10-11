import './Test123.css';
import {useState} from "react";

function Test123(){
  // let btn = document.querySelector("btn123");
  const [data123, setData] = useState(false);

  const change = () => {
    // data123 = "사과"
    setData(prevState => !prevState);
  };



  return (
    <div>
      <header>
        <div className='center' onClick={change}>
          <h2>토글형태</h2>
          <button id='btn123' className='dark active'>토글</button>
        </div>
      </header>

      <div>
        {/* data123의 값에 따라 출력 */}
        {data123 ? <p>현재 상태: 셋데이터</p> : <p>현재 상태: 초기값</p>}
      </div>

    </div>
  )
}

export default Test123;