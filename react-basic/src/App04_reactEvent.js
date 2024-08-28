import { Fragment } from "react";
import EventComponent from "./component/EventComponent";
import EventComponent02 from "./component/EventComponent02";
import EventComponent02_Q from "./component/EventComponent_Q";

// 08-27 
function App(){

  return(
    
    <Fragment>
      <EventComponent/>

      <hr/>
      <EventComponent02></EventComponent02>

      <hr></hr>
      <EventComponent02_Q></EventComponent02_Q>

    </Fragment>
    
  )
}

export default App;




