import { useEffect, useState } from "react";


// 데이터 가져오기, 로딩이후 가져오기
function App() {

  //ajax -
  //https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json

  const [data, setData] = useState();
  //ES^로 
  const getData = () => {
    fetch('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
      .then(response => response.json()) //json형식이면 json, text면 데이터 텍으로 파싱
      .then(data => {
        console.log(data);

        //가져온 데이터는 state로 관리한다 위에다 useState 만들기
        setData(data); // 위로 들어가고 아래로 랜더링 이떄까지처럼
      })
  }

  //2)
  const [raw, setRaw] = useState();

  //1)화면 로딩 후 데이터

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
      .then(response => response.json())
      .then(data => {
        console.log("사과", data);
        //setRaw(data) //<< 이것만 하면 계속 나온다 랜더링 반복
        setRaw(data); //3) setRaw 추가

      })
  }, []) // 4) 한번만 실행한다는 []


  if ('wef') {
    console.log(true); // true 찍힘
  }




  return (
    <>
      <h4> ajax로 데이터 처리하기</h4>
      <button onClick={getData}>클릭할때 네트워크</button>

      {/* setData 찍기, 지금 undefined 데이터가 와야 나온다  */}
      {/* {data.userId}<br></br>
    {data.userPw}<br></br>
    {data.userName}<br></br> */}

      {
        data != undefined ?
          <div>
            {data.userId}<br></br>
            {data.userPw}<br></br>
            {data.userName}<br></br>
          </div>
          :
          null
      }

      {/* 5) 화면에 찎끼*/}

      {/* {raw ? :} */}
      {raw && <div>
        {raw.userId}<br />
        {raw.userPw}<br />
        {raw.userName}<br />
      </div>}
    </>
  )
}

export default App;