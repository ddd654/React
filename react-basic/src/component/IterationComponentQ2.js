import { useState } from "react";

const IterationComponentQ2 = () => {
    //1 - select는 컴포넌트반복으로 option태그를 생성합니다.
    const select = ['HTML', 'Javascript', 'CSS', 'Java', 'Oracle', 'Mysql'];



    //2 - 아래 데이터는 state로 관리하고 화면에 li태그로 반복해주세요 .
    const data = [
        { id: 1, type: 'Java', teacher: '이순신' },
        { id: 2, type: 'Java', teacher: '홍길자' },
        { id: 3, type: 'Javascript', teacher: '홍길동' },
        { id: 4, type: 'Oracle', teacher: '이순신' },
        { id: 5, type: 'Mysql', teacher: '이순신' },
        { id: 6, type: 'CSS', teacher: '박찬호' },
        { id: 7, type: 'HTML', teacher: 'coding404' },
    ];

    const [list, setList] = useState(data);

    //3
    let handleChange = (e) => {// e 객체 매개변수
        console.log(e);

        //data에서 랜더링, 필터
        let newList = data.filter(item => item.type === e.target.value);
        setList(newList);
    }

    //

    const [input, setInput] = useState('');

    // 상수 const
    //5 
    const handleClick = () => {
        
        let newList=
        data.filter(item => {
            let str = item.type.concat(item.teacher).toLowerCase();
            return str.includes(input); // 포함시 true
        })
        
        setList(newList);
    }



    return (
        <div>
            <hr />
            <h3>실습</h3>
            Search: <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={handleClick}>검색</button>

            <br />

            과목찾기:
            <select onChange={handleChange}>
                {select.map((item, index) => <option key={index}>{item}</option>)}
            </select>
            <ul>
                {list.map((item, index) => <li key={item.id}>{item.type}-{item.teacher}</li>)}
            </ul>





        </div>
    )
}

export default IterationComponentQ2;







