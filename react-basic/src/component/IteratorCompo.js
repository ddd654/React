

function IteratorCompo() {

  const arr = [1, 2, 3, 4, 5];

  //map은 키=값을 이용하는 자료형

  const newArr = arr.map((value, index) => {
    return value * 10;
  })
  const newArr2 = arr.map((value, index) =>  value *10); // 위를 이렇게 가능
  console.log(newArr);

  //JSX
  const newArr3 = arr.map( (value, index) => {
    return <li key={index}> 
           값 : {value} 
           </li> // << 반복문이 된다
  }) 
  //고유한 key props 키값을 넣어줘야 한다
  console.log(newArr3);
  

  ///////////////////
  return (
    <div>
      컴포넌트 반복
      <ul>
        {newArr3}
      </ul>

    </div>

  )
}

export default IteratorCompo;


