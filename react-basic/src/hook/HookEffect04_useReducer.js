import { useReducer } from "react";

const coReducer = (state, action) =>{
  console.log(state);
  console.log(action);

  //state는 유지하면서 전달되는 name에 따라서 key를 바꾼다
  state = {...state, [action.name] : action.value};
  
  return state; // 값이 아래에서 변경
}


function HookReducer2() {

//컴포넌트 외부에서 상태변화를 시킨다
  //name과 age를 동시에 처리하는 nameReducer 함수를 만든다
  //초기값은 {name: '', age:0}
  //리듀서 함수 안에서 객체값을 state ={...state, [key]:value}

  
  const [state, action] = useReducer(coReducer, {name: '', age : 0})

  console.log(state.name);
  
  return (
    <>
      <input type="text" name="name" value={state.name} onChange={(e)=>{
        action(e.target)
      }}></input>
      <input type="number" name="age" value={state.age} onChange={(e) =>{
        action(e.target)
      }}></input>
      <br></br>
      reducer로 변경된 값 : {state.name}, {state.age}
    </>
  )
}
 

export default HookReducer2;

