import A from "./component2/A";
import B from "./component2/B";
import { UserProvider } from "./context/contextAPI2";

//


function App() {
//  root
// /   \
// A    B
//     / \   
//    C   D
//
  //1. 값을 공통으로 전달받는 상위 컴포넌트에 Provider를 감싼다.
  //2. 값을 사용하는 컴포넌트에서는 userContext()훅으로 Context받습니다.

  return (
    <>
      <h4>root 컴포넌트</h4>
      앱 빌드~~
      <UserProvider>

      <A></A>
      <B></B>
      </UserProvider>

    </>
  )
}

export default App;