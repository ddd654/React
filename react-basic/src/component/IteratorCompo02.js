import { useState } from 'react';


function IteratorCompo02() {

  //1. 서버에서 받는 데이터 예시 ,지금은 직접
  const data = [
    { id: 1, topic: 'hello world' },
    { id: 2, topic: 'nice' }

  ];
  let [list, setList] = useState(data);

  //3. input태그 stata 로 관리
  let [topic, setTopic] = useState('');

  // // //2. 리스트를 이용해서 반복처리
  // const newList = list.map(value =>
  //   <li key={value.id} onDoubleClick={handleRemove}>
  //     {value.topic}
  //   </li>
  //   ) // value 안에 {}, {} 위에 하나씩 들어간


  //4. 버튼 클릭시에 input state 값을 배열에다가 추가
  let handleClick = () => {
    console.log("click123");
    let obj = { id: list[list.length - 1].id + 1, topic: topic }; //id가 리스트 마지막값

    console.log(list[list.length - 1].id + 1);

    console.log(obj);
    let newList = list.concat(obj); //배열.concat(배열), 배열.concat(오브젝트)

    //state업데이트 = 랜더링
    setList(newList);
    setTopic('');
  }

  //5. 삭제기능 만들기
  let handleReomove = (id) => { //클릭한 대상의 id 값
    console.log(111);

    //filter
    let newList =list.filter((value) => {
      console.log(value);
      return value.id != id; // 리턴에 실린 값이 true인 데이터만 필터링
    })

    //필터링 시킨 데이터를 state로 변경 > 랜더링
    setList(newList);

  }

  //2. 리스트를 이용해서 반복처리 > 이벤트 부분보다 아래쪽으로
  const newList = list.map(value =>
    <li key={value.id} /* () => {함수} */
      onDoubleClick={() => handleReomove(value.id)}> {/* 6. 이벤트에 함수 매개변수를 주고 싶으면 ()={실행할 함수(매개값)} */}
      {value.topic}
    </li>
  ) // value 안에 {}, {} 위에 하나씩 들어간


  return (
    <>
      <h3>할일 만들기</h3>
      <ul >
        {newList}
      </ul>

      <input type="text" value={topic} onChange={(e) => setTopic(e.target.value)}></input>
      <button type="button" onClick={handleClick}>추가하기</button>



    </>

  )
}

export default IteratorCompo02;


