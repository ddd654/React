import { useParams } from "react-router-dom";

function BoardContent(){

  const {num} = useParams(); //Route의 num이 된다~~

  return(
    <>
    <h5>글 상세보기~</h5>
    {num} 번 번호 표시

    </>
  )
}
export default BoardContent;