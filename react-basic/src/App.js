import MyComponent from "./component/MyComponent";

//
function App() {

  return (
    <div>
      <>
        apple <br></br>
        컴포넌트의 재사용
        <MyComponent name={"coconut"} age={20} addr={"seoul"}>값 넣기</MyComponent>
        ----------
        <MyComponent name="kiwi" age={44} addr="부산">새로운 값이 들어온다</MyComponent>123
      </>
    </div>
  )
}

export default App;

