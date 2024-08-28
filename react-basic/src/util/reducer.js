
export const cocoReducer = (state, action) => {
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
