import { useState } from "react";

//import img1 from '../img/img1.png';

/*
이미지를 가져오는 방법
1. 외부 서버에서 경로 참조 받기 (가장 일반적인 방법)

2. src밑으로 넣는경우 (img1 으로 하나의 이미지 참조가능)
import img1 from '../img/1.jpg'; 

3. public밑으로 넣는경우는 바로 참조할 수 있습니다.
*/
const IterationComponentQ = () => {

    //데이터 - public폴더밑에 예시로 사용하기 위해 넣습니다.
    const arr = [
        { src: '/img/img1.png', title: '아이폰10', price: 1000 },
        { src: '/img/img2.png', title: '아이폰11', price: 2000 },
        { src: '/img/img3.png', title: '아이폰12', price: 3000 },
        { src: '/img/img4.png', title: '아이폰13', price: 4000 },
    ]

    //1. state로 관리, 대표 이미지값을
    let [data, setData] = useState(arr);
    const [img, setImg] = useState('/img/img1.png');

    const newData = 
    data.map((item, index) =>
            
                <div key={index}> {/* 없으면 index */}
                    <img src={item.src} width="100"></img>
                    <p>{item.title}</p>
                    <p>{item.price}</p>
                    
                </div>
            
        )

    let click = (e) => {
        if(e.target.tagName != "IMG") return;
        let img = e.target.src;
        setImg(img);
    }




    // const newArr123 = arr.map((value, index) => (
    //     <div key={index}>
    //         <img src={value.src} alt={value.title}></img>
    //         <p>제목 {value.title}</p>
    //         <p>가격~~ {value.price}</p>
    //     </div>
    // ))


    return (
        <>
            <hr />
            <h3>이미지 데이터 반복해보기</h3>
            {/* <img src="https://raw.githubusercontent.com/yopy0817/data_example/master/img/img1.png" alt="봄" width="100" /> */}
            {/* <img src={img1}/> */}
            {/* <img src="/img/img1.png" /> */}


            {/* <div>
                <div>
                    <img src="/img/img1.png" width="100" />
                    <p>
                        제목
                    </p>
                    <p>
                        가격
                    </p>
                </div> 
            </div> */}

            {/* 3번 */}
            <div>
                <img src={img} alt="제목"/>
            </div>

            <div style={{display: "flex", justifyContent : "space-around"}} 
                 onClick={click}
                 >
                {newData}
            </div>

        </>
    )

}

export default IterationComponentQ;








// 지
// const IterationComponentQ2 = () => {
//     //1 - select는 컴포넌트반복으로 option태그를 생성합니다.
//     const select = ['HTML', 'Javascript', 'CSS', 'Java', 'Oracle', 'Mysql'];

//     //2 - 아래 데이터는 state로 관리하고 화면에 li태그로 반복해주세요 .
//     const data = [
//         {id: 1, type: 'Java', teacher: '이순신'},
//         {id: 2, type: 'Java', teacher: '홍길자'},
//         {id: 3, type: 'Javascript', teacher: '홍길동'},
//         {id: 4, type: 'Oracle', teacher: '이순신'},
//         {id: 5, type: 'Mysql', teacher: '이순신'},
//         {id: 6, type: 'CSS', teacher: '박찬호'},
//         {id: 7, type: 'HTML', teacher: 'coding404'},
//     ];

//     const newSelect = select.map((item, index) => 
//         <option key={index}>{item}</option>
//     )
//     const [list, setList] = useState(data)
//     const newList = list.map( (item) => <li key={item.id}>{item.type}-<span>{item.teacher}</span></li>)


//     //3 - 셀렉트박스가 체인지되면 이벤트객체를 활용해서 선택된 값만 필터링해주세요.
//     const handleChange = (e) => {
//         //console.log(e.target.value)
//         let newList = data.filter( obj => obj.type === e.target.value )
//         setList(newList);
//     }
	
	
// 	//4- input값은 state로 관리합니다.
//     const [search, setSearch] = useState('');
//     const searchChange = (e) => {
//         setSearch(e.target.value);
//     }
// 	//5 - 검색기능 - 원본 data에서 필터링으로 검색값을 찾아 state를 업데이트 합니다.

// 	const searchClick = () => {
// 		//search //사용자의 검색값
// 		//data객체에서 조회
// 		let newList = data.filter( obj => obj.type.toLowerCase().includes(search) ||
// 										  obj.teacher.includes(search) )
// 		setList(newList);
//     }

//     return (
//         <div>
// 			<hr/>
//             <h3>실습</h3>
//             Search: <input type="text" onChange={searchChange} value={search}/>
//             <button onClick={searchClick}>검색</button>

//             <br/>
            
// 			과목찾기:
//             <select onChange={handleChange}>
//                 {newSelect}
//             </select>
//             <ul>
//                 {newList}
//             </ul>
//         </div>
//     )
// }

