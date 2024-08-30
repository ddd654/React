import axios from "axios";


function App() {




  const handleClick = async() => {

    // // /https://yts.mx/api/v2/list_movies.json?sort_by=rating

    // //비동기에서 동기로하려면 코드가 어렵다
    // axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
    //   .then(response => {
    //     console.log(response.data);
    //     console.log(11);

    //     axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hello.json')
    //       .then(response => {
    //         console.log(response.data);
    //         console.log(33);

    //         axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/by.json')
    //           .then(response => {
    //             console.log("111", response.data);
    //             console.log(55);


    //           });
    //       });
    //   });
    // console.log(22);

    // console.log(44);

    // console.log(66);
    //-------------------------------------

    //async 비동기 동시에 일어나지 않는, 동기 - 동시에 일어나는

    //async, await
    // async 함수 안에서 await을 사용한다
    // function 앞에 async를 붙여 promise를 return
    // return이 promise이면 await을 사용해서 then를 없앨 수 있게 된다
    // 코드가 짧아져서 쓰고, 데이터에서 순서가 생긴다  비동기 --> 동기

    let promise = axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
    console.log("멜론", promise);
    //위에 promise 여서 await 써보기
    const data1 = await axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
    console.log("111", data1);

    const data2 = await axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
    console.log("222", data2);
    
    const data3 = await axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
    console.log("333", data3);
    
    //
    let response = await fetch('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
    console.log(response);
    const res= await response.json();
    console.log(res);
    
    let response1 = await fetch('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
    .then(response => response.json())
    console.log(response1);
    
  }

  //해보기
  //data 로드시 hi json 을 async로 가져오기, 즉시 가져오기


  const fruit = async() => {
    console.log("apple");
    const apple = await fetch('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
    console.log(apple);
  }

  ( 
    async () => {
    const apple = await fetch('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
    const data = await apple.json();
    console.log("즉시", data);
    
  }
)();



  return (
    <>
      <h4>axios 사용해서 데이터 받기</h4>

      <button onClick={handleClick}>데이터 갖고오기</button>
      <button onClick={fruit}>과일</button>

      <p>{fruit}</p>
    </>
  )
}

export default App;
