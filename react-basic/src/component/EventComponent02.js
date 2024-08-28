import { useState } from "react";



function EventComponent02() {

  let [form, setForm] = useState({ name: '', topic: '' }); // 빈칸 상태

  let handleForm = (e) => {
    //어떤 태그가, 어떤 값
    console.log( e.target.name); //name value 값
    console.log(e.target.value);
    console.log(e.target);

    //let copy = {...form, ["name"] : 'xxx'} 
    let copy = { ...form, [e.target.name]: e.target.value } // 기존 값을 변경하고
    console.log(copy);
    setForm(copy);
  }

  let handleClick = () => {
    alert(`${form.name} 님의 할일 ${form.topic}`); // 띄우기
    setForm({ name: '', topic: '' }); //클릭 후 빈칸 만들기
  }
  return (
    <div>
      input 태그 객체로 핸들링하기
      <br></br>
      <input type="text" name="name" value={form.name} onChange={handleForm}></input>
      <br></br>
      결과 state값 = { }

      <hr></hr>
      <input type="text" name="topic" value={form.topic} onChange={handleForm}></input>
      <br />
      확인용 결과 { }

      <hr></hr>
      <button type="button" onClick={handleClick}>click 이벤트</button>

    </div>
  )
}



export default EventComponent02;