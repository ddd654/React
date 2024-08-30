import { useContext, useRef } from "react";
import UserContext from "../context/contextAPI2";



function A() {
  const 객체=useContext(UserContext);
  console.log(객체);

  const {state, action} = useContext(UserContext);
  
  const idRef = useRef();
  const nameRef = useRef();

  const handleClick = () => {
    console.log(action);
    action.setUser( {id: idRef.current.value, name: nameRef.current.value}) //바꿀꺼
  }

  return (
    <>
      <h3>A컴포넌트</h3>

      <input type="text" name="id" ref={idRef}></input>
      <input type="text" name="name" ref={nameRef}></input>
      <button type="button" onClick={handleClick}>값 변경~</button>

      {state.id}
      {state.name}
    </>
  )

}

export default A;