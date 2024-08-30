import axios from "axios";
import { useEffect, useRef, useState } from "react";
import SockJS from "sockjs-client";

// 08-30 채팅

function App() {

  //http로 서버 통신
  // useEffect(() => {

  //   (async () => {
  //     const res = await axios.post("http://localhost:8181/getEntity", { name: "사과" })// ,{보낼데이터}
  //     console.log(res);

  //   })();


  // }, [])

  // useEffect(() => {
  //   // 13.클라는 socket 라이브러리가 필요하다
  //   // npm install sockjs-client << 터미널로 설치

  //   const socket = new SockJS("http://localhost:8181/api/chat");

  //   // 14. 메서드 3개

  //   socket.onopen = () => {
  //     console.log("연결됨");

  //   }
  //   socket.onclose = () => {
  //     console.log("연결해제됨");

  //   }
  //   socket.onmessage = (e) => {
  //     console.log("데이터 수신받음~~ : " + e);

  //   }

  //   //15. 연결이 해제되면 socket.close(); 로 닫아줘야한다

  // }, [])


  //17 . state
  const [sock, setSock] = useState(null);
  //22. userId 넣기
  const inputRef = useRef(null);
  const [msg, setMsg] = useState('');
  const [message, setMessage] = useState([]);  //31. 수신 메시지 관리하기

  // 16. 중간에 찾다가 끊김
  const enter = () => {


    //24. userId의 value 값 쓰기 = 이름을 적고 들어가게
    const userId = inputRef.current.value;
    if (userId === '') {
      alert("이름이 비어있음");
      return;
    }

    if (sock == null) {
      const socket = new SockJS(`http://172.30.1.73:8181/api/chat?userId=${userId}&room=1`);
      //25. 백틱으로 주소 수정

      socket.onopen = () => {
        console.log("연결됨");

      }
      socket.onclose = () => {
        console.log("연결해제됨");

      }
      socket.onmessage = (e) => {
        console.log("데이터 수신받음~~ : " + e);

        //30. > 31 State 추가
        const newMessage = e.data;

        //setMessage( () => {} ); // setter메서드에 함수넣으면 기존값이 나온다
        setMessage((prev) => {
          if(prev.length >=30){ //배열 관리
            prev.shift(); //앞에 하나 제거
          }
          return [...prev, newMessage]; // 배열 합치기

        });
      }

      setSock(socket); //state에 socket 객체 저장
      // 18. 누를때마다 접속 신청됨 > if 조건문 추가
    }
  }
  const exit = () => {
    if (sock !== null) {//19. 있으면
      sock.close();
      setSock(null);
      alert("서버와 연결이 종료되었습니다");
    }
  }
  //27. 메시지 전송하기
  const sendMsg = (e) => {
    //엔터 칠때, 값이 비어있지 않을때, sock이 비어있지 않을떄 << 3가지 충족해야
    if (sock && msg && e.key === "Enter") {
      sock.send(msg); //sock 안의 send 객체 (무엇을)

      setMsg(''); //state로 초기화


    }
  }


  return (
    <>
      <h4>react로 채팅만들기</h4>
      <p>http 요청과 응답의 반복 = 쪽지같은</p>
      <p>websocket 요청을 하면 서버가 대기하다가 handshake로 지속적인 연결 = 실시간 채팅</p>

      <hr></hr>
      아이디: <input type="text" ref={inputRef}></input> {/* 23. ref 추가하기 */}
      <button type="button" onClick={enter}>입장</button>
      <button type="button" onClick={exit}>퇴장</button>

      <br></br>                                         {/* state 관리 */}
      메시지: <input type="text" value={msg} onChange={e => setMsg(e.target.value)} onKeyUp={sendMsg} />
      <div style={{ border: "1px solid black", width: '100%', height: '200px', overflow: 'auto' }}>
        (메시지 영역)
        <br></br>
        {
          message.map((item,index) => <div key={index}>{item}</div> )
        }
      </div>

    </>
  )
}

export default App;