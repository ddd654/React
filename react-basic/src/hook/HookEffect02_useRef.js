import { useRef } from "react";



function HookEffect02() {

  //화면에서 접근하여 사용할 태그는 useRef를 사용하자
  //버튼 클릭 > 접근
  let input = useRef(null);
  let handleClick = () =>{
    console.log(input);
    console.log(input.current); //ref로 연결된 바로 접근
    console.log(input.current.value); //입력값
    console.log(input.current.type); // 태그 type
    
    alert(input.current.value);
    input.current.focus();
  }
  // 위에로 value 값을 직접 변경할 수 있으나
  // state로 값이 변하는게 좋다






  return (
    <>
    <h3>useRef 사용하기</h3>
      <input type="text" ref={input}></input>
      <button type="button" onClick={handleClick}>등록</button>
    </>

  )
}

export default HookEffect02;







