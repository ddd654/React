import { useState } from "react";



function EventComponent02_Q() {

  let [form, setForm] = useState({ data: '', result: '' });
  let handleChange = (e) => {
    setForm({ data: e.target.value, result: form.result })
  }

  let handleClick = () => {
    setForm({ data: '', result: form.data });
  }
  return (
    <div>
      input 데이터 핸들링
      <br></br>
      클릭시 데이터는 공백으로 하고,
      결과는 인풋이 입력한 값으로 한다
      <input type="text" value={form.data} onChange={handleChange}></input>
      <br></br>

      <hr></hr>
      <button type="button" onClick={handleClick}>추가 click 이벤트</button>
      <h4>결과 - {form.result} </h4>
    </div>
  )
}



export default EventComponent02_Q;