import { Fragment } from "react";
import StateComponent from "./component/StateComponent";
import StateComponentQ from "./component/StateComponentQ";
import ClassComponent from "./component/ClassComponent";


function App(){
  
  return(
    <Fragment>
      <StateComponent></StateComponent>
      <br></br>

      <StateComponentQ/>
      <br></br>

      <ClassComponent name="사과바나나" age="555"></ClassComponent>
    </Fragment>
  )

}

export default App;







