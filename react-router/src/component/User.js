import { useLocation, useSearchParams } from "react-router-dom";


function User() {
  //1. useParam 훅을 사용
  const location = useLocation();
  console.log(location);

  const { search, pathname } = location;
  console.log(search);
  console.log(pathname);


  //2. useSearchParam() hook , 둘중 하나 사용한다
  const searchParam = useSearchParams();
  console.log("두번쨰", searchParam);
  //구조분해
  const [obj, setObj] = useSearchParams();
  console.log("값을 얻을 수 있음", obj);
  console.log(setObj);

  let name = obj.get("key");
  let age = obj.get("age");
  console.log("파라미터 확인~~", name, age);


  const handleClick = () =>{
    setObj({ name: "복숭아", age: 44});
  }

  return (
    <div>
      <h3>유저페이지 입니다</h3>
      <button onClick={handleClick}>URL 값바꾸기</button>
    </div>
  )
}

export default User;