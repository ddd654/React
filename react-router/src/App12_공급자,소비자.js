import { useState } from "react";
import ColorComponent from "./component2/ColorComponent";
import ColorContext from "./context/contextAPI";


function App() {
//ex
//select 값이 변경되면, state를 변경해서, provider로 전달되는 색상 바꾸기
const [color, setColor] = useState('red');

const change= (e) => {
  console.log("바나나");
  console.log(e.target.value);
  
  setColor("blue")
  
}
  //5. contextAPI의 변화 - provider는 value props를 필슈로 전달


  return (
    <>
      <h4>context API</h4>
      <ColorContext.Provider value={{color: "red"}}> {/* 값을 전달 */}
        <ColorComponent></ColorComponent>
      </ColorContext.Provider>

      <select onChange={ e => setColor(e.target.value)}> 
        <option>red</option>
        <option>blue</option>
        <option>green</option>
      </select>

    </>

  )
}

export default App;
