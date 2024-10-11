import { useState } from "react";

function StateComponentQ(){

  let [data, setData] = useState(0);
  let result = useState("123");
  console.log(result);
  
  let plus = () => {
    //data = 123 //직접 바꾸기
    //setData(data + 1); //반응하는 곳 < 여기로 바꿔
    //setData((prev) =>{ return prev +1;});
    setData(prev => prev +1); // prev 는 state의 이전값을 받는다
  } 
  
  let minus = () => {
    //data = -123
    setData(data -1);
  }

  let zero = () => {
    data = 0;
    setData(data);
  }

  return(
    <div>
      <h3>카운트 : {data}</h3>

      <button onClick={plus}> 증가</button>
      <button onClick={ () => minus(data -1)}> 감소</button>
      <button onClick={ () => zero(0)}> 초기화</button>
    </div>
  )

}



export default StateComponentQ;