import { useState } from "react";

function StateComponent() {

  //useState는 함수형 컴포넌트에서만 쓰는 hook이다
  //반한이 배열이고 [0] 번째에 현 데이터, [1] 값을 변경하는 setter함수를  반환
 
  // let result = useState(/* 초기값 */"사과");
  // console.log(result); //배열이니

  let [data, setData] = useState('초기값');
  let [msg, setMsg] = useState('black');
  //윗 줄처럼
  // let data = result[0];
  // let setData = result[1];

  let enter = () => {
    data = " 이렇게 하면 " // 값을 직접 바꾸는 것을 허용하지 않음
    setData("이렇게 값을 바꾼다") // 값을 변경하는 setter > 비동기적으로 데이터
    
  }

  

  //화면을 지웠다가 다시 만드는 중
  return (
    <div>
      현재 데이터{data} {/* 변경된 부분을 다시 그려준다 */}
      <br />
      값 변경하기<button onClick={enter}> 입장  </button>
      <br />
      값 변경2 <button onClick={() => setData("퇴장했습니다")}> 퇴장 </button>
      <br></br>

    <h4 style={{color:msg, margin:'20px'}}>{msg}</h4>


    <button onClick={() => setMsg('red')}>붉은색</button>
    <button onClick={() => setMsg('blue')}>파란색</button>
    <button onClick={() => setMsg('yellow')}> 노란색 </button>

    </div>
  )
}

export default StateComponent;








