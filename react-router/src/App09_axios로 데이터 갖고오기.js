
import axios from "axios";

// axios 사용하기

function App() {

  const handleClick = () => {

    //promise 반환해줘서 then을 쓸 수 있고 ...
    axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
    .then(response =>{
      console.log(response.data);
      
    })

    //이제 state로 저장하고 08 처럼 하면된다

  }
  return (
    <>
      <h4>axios 사용해서 데이터 받기</h4>

      <button onClick={handleClick}>데이터 갖고오기</button>

    </>
  )
}
export default App;
