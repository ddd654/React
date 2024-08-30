import UserContext from "../context/contextAPI2";
import { useContext } from "react";



function D() {
  const {state, action} = useContext(UserContext);

  return (
    <>
      <h3>D컴포넌트</h3>

      {state.id}
      {state.name}

    </>
  )

}

export default D;