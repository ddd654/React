import { Navigate, useNavigate } from "react-router-dom";


function MyPage() {

  //시작하기 전에 권한 검사하기
  let nav =useNavigate(); //앞 뒤 이동인데

  let loginYN = false; // 로그인처리

  if(!loginYN) {
    nav('/');
    return <Navigate to='/' replace={true}></Navigate>; 
    
    //history를 남기지 않음 = 기록이 없으니 갈 수 없다?
  }




  return (
    <>
      <h3>권한이 있는 유저만 </h3>
    </>
  )
}
export default MyPage;