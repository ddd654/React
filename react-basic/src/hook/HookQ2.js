import { useRef, useState } from "react";


const HookQ2 = () => {
    /*
    실습(할일목록 만들기 )
    1. state는 {todo: '', list: []} 로 관리합니다.
    2. 할일 목록을 작성하고 클릭시, list에 인풋이 입력한 값을 추가하고 map을 이용해서 반복처리해주세요
    3. 등록 이후에는 ref를 활용해서 input태그에 포커싱해주세요.

    */

    //1. 상수 세팅
    //const [data, setData] = useState({name: '', list: []});
    const [data, setData] = useState({ todo: '', list: [] });
    const input = useRef(null); //6. 제어하고픈 태그에 추가

    //2 map 반복 상수화
    const listItems = data.list.map((item, index) =>
        <li key={index}>
            {item}
        </li>
    );



    //3. handleTodo 세팅
    const handleTodo = (e) => {
        setData({ ...data, ["todo"]: e.target.value });
    }

    //5. 클릭 이벤트 세팅
    const handleClick = () => {
        let newList = data.list;
        newList.push(data.todo);

        setData({ todo: '', list: newList });

        // setData(prevData => ({
        //     todo: '',
        //     list: [...prevData.list, prevData.todo]
        // }));
    }

    console.log(data);

    return (
        <div>
            <h4>apple</h4>   {/* 2. value, onChange와 handleTodo 추가 */}
            <input type="text" placeholder="할일 목록을 작성하세요" value={data.todo} onChange={handleTodo} ref={input} ></input>
            <button type="button" onClick={handleClick}>등록</button>  {/* 4. handleClick 추가 */}
            <ul>
                '반복으로 목록처리'<br></br>
                {
                    data.list.map((item, index) =>
                        <li key={index}>{item}</li>
                    )
                }
            </ul>

        </div>
    )
}

export default HookQ2;