import { Fragment } from "react";
import IteratorCompo from "./component/IteratorCompo";
import IteratorCompo02 from "./component/IteratorCompo02";
import IterationComponentQ from "./component/IterationComponentQ";
import IterationComponentQ2 from "./component/IterationComponentQ2";


// 08-27
function App(){
  return(
    <Fragment>
      <IteratorCompo></IteratorCompo>
      
      <hr/>filter
      <IteratorCompo02/>

      <hr></hr>
      <IterationComponentQ></IterationComponentQ>
      
      <hr></hr>
      <IterationComponentQ2></IterationComponentQ2>

      <hr></hr>
      
    </Fragment>
  )
}


export default App;


