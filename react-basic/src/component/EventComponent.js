import { useState } from "react";

function EventComponent(){

  //let a= document.querySelector("input[name=name]");
  //1. input이 관리할 값은 state로 선언한다
  //2. input 태그 value에 state를 연결한다
  //3. 이벤트로 값제어하기 input 제어

  let[name, setName] = useState('');
  let[topic, setTopic] =useState('');
  let[food, setFood] = useState('피자');
  
  let handleName =(e) =>{
    //console.log("체인지123");
    console.log(e.target); //인풋태그에서 사용자가 입력한 값
    
    setName(e.target.value); //입력할때마다 뷰가 바뀌어

  }

  let handleTopic = (e) =>{
    setTopic(e.target.value);
  }

  let handleClick = () =>{
    console.log("click");
    alert(`${name} 님의 입력값은 ${topic} 이에요`);
    setName(''); // 알림을 출력하고 input 칸이 빈칸이 된다
    setTopic('');

    //둘 중 하나라도 빈칸일때는?
  }

  let handleKeyUp = (e) =>{
    console.log(e); // key 값이 "Enter" 로 나온다

    if(e.key === 'Enter'){ // 엔터를 치면 e
      handleClick(); //<< 이걸 호출한다
    }
  }

  let handleOption = (e) =>{ // 이거 e 넣어줘야함
    console.log("option123");
    console.log(e);
    console.log(e.target.value);
    
    setFood(e.target.value);
  }

  return(
    <div>
      input 이벤트 핸들링
      <br></br>
      {/* 2.  아래 value, event 넣기 */}
      <input type="text" name="name" value={name} onChange={handleName}></input>
      <br></br>
      결과 state값 = {name}

      <hr></hr>
      <input type="text" name="topic" value={topic} onChange={handleTopic}
      onKeyUp={handleKeyUp}></input>
      {/* 그칸에서 엔터쳤을때 */}
      <br/>
      확인용 결과 {topic}

      <hr></hr>
      <button type="button" onClick={handleClick}>click 이벤트</button>

      <hr/>
            <h3>셀렉트 태그 핸들링(실습)</h3>
            <pre>셀렉트 태그가 체인지 될 때 선택한 결과를 아래에 출력</pre>            

            <select onChange={handleOption}>
                
                <option>피자</option>
                <option>햄버거</option>
                <option>치킨</option>
            </select>

            <h3>선택한 결과</h3>
            <p>{food}</p>

    </div>

  )
}

export default EventComponent;


