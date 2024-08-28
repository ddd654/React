import { useEffect, useState } from "react";

function HookEffect() {

  //useState hook
  const [data, setData] = useState('');
  const [age, setAge] = useState('');
  //1 
  //생명주기 관리 useEffect
  // useEffect( () => {
  //   console.log('mount 이후에 동작한다');
  //   console.log("화면을 다 랜더링 하고서 동작한다");

  // })

  //2 
  // useEffect( () =>{/* 첫번쨈 매개변수 */
  //   console.log("mount 후에 한번만 실행된다1");
  //   console.log("네트워크상에서 데이터를 가져올떄 주로 사용한다");

  // }, /* 두번째 매개변수에 배열 */[])

  //3
  // useEffect( () => {
  //   console.log('특정 값이 변경되서 랭더링 될때 동작');

  // }, [data, age, ..., ...])

  //4
  useEffect(() => { 
    console.log('effetc 실행'); 

    return () => { //리턴에 함수를 넣으면 소멸되기 전에 실행된다
      console.log('unmount 소멸되기 전에 실행된다');

    }

  }, [data]); //data 부분 변경될때마다

  //5
  //useEffect는 여러개일 수 있다
  useEffect(() => {
    console.log('두번째 effect 실행되요');

  })

  //6 무한루프 코드 - 실수 1
  // const [ex, setEx] = useState({ name: 'apple' });
  // useEffect(() => {
  //   let copy = {...ex};
  //   setEx(copy)
  //   console.log(222222222);

  // }, [ex]);








  console.log('code 실행1234');


  return (
    <>
      <input type="text" value={data} onChange={(e) => setData(e.target.value)}></input>
      <input type="text" value={age} onChange={(e) => setAge(e.target.value)}></input>
      {data},
      {age}
    </>
  )
}

export default HookEffect;


