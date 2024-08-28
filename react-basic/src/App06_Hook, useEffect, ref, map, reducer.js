import HookEffect from "./hook/HookEffect_useEffect";
import HookEffect02 from "./hook/HookEffect02_useRef";
import HookReducer from "./hook/HookEffect03_useReducer";
import HookReducer2 from "./hook/HookEffect04_useReducer";
import HookQ2 from "./hook/HookQ2";


// 08-28 Hook, useEffect, reducer, map, ...
function App() {

  return (
    <>
      <HookEffect></HookEffect>
      <hr></hr>

      {/* <HookEffect02></HookEffect02> */}
      <hr></hr>

      <HookReducer></HookReducer>
      <hr></hr>

      <HookReducer2></HookReducer2>
      <hr></hr>

      <HookQ2></HookQ2>
      <hr></hr>
    </>
  )
}

export default App;

