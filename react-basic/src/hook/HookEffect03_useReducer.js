//useReducer 는 컴포넌트 외부에서 값을 받고 state로 체인지

import { useReducer } from "react";

//import { cocoReducer } from "../util/reducer"; 

// 유틸 가져오는거 다시

//1.
const cocoReducer = (state, action) => {
  console.log(state);
  console.log(action);

  //4. action에 값이 들어온다
  if(action === "increase"){
    state = {value : state.value +1};
  } 
  //5. 감소의 경우
  else if(action === "decrease"){
    state = {value: state.value -1};
  }
  //6. 초기화 만들기
  else if(action ==="reset"){
    state = {value: 0}
  }

  return state;
}

//컴포넌트 외부에서 상태변화를 시킨다
function HookReducer() {

  //2 reducer 함수 쓰기 , reducer hook
  // 반환 [state값, 리듀서 합수의 상태를 바꾸는 action함수]
  const [state, actionFunc] = useReducer(cocoReducer, { value: 0 });
  // console.log(result);

  //3.
  const handleIncrease= ()=>{
    actionFunc("increase");
  }

  return (
    <>
      useReducer
      <h4>리듀서로 관리되는 state 값은 :  {state.value}</h4>

      <button type="button" onClick={handleIncrease}>증가</button>
      <button type="button" onClick={() => actionFunc("decrease")}>감소</button>
      <button type="button" onClick={() => actionFunc("reset")}>초기화</button>
    
    
    </>
  )
}


export default HookReducer;

