import { useParams } from "react-router-dom";

function Info(){
  
  //useParams hook - URL 파라미터
  let param = useParams();
  console.log("파람", param);
  console.log("파람속 숫자", param.num); // 찾아서 사용가능하다
  
  //ex
  const data ={
    "1" : {id:1, name:"사과"},
    "2" : {id:2, name:"바나나"},
    "3" : {id:3, name:"수박"}
}
   //const newList = data.filter( (item) => item.id ===param.num)

  const {id, name} = data[param.num];


  return(
    <>
      <h4>Info 페이지에요</h4>
      {/* <div>{newList}</div> */}

      <p>{id}와 {name}</p>
  
    </>
  );
}


export default Info;