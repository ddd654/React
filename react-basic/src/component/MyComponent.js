
import PropTypes from 'prop-types';
function MyComponent({ name = "이름123", age = 0, addr = "주소123" }) {

  //console.log(props);

  return (
    <div>

      이름 : {name} <br></br>
      나이 : {age} <br />
      주소 : {addr} <br />
    </div>
  )


  // return(
  //   <div>
  //     banana <br></br>
  //     이름 : {porps.name} <br></br>
  //     나이 : {porps.age} <br/>
  //     주소 : {porps.addr} <br/>
  //     두번씩 나오면 index.js 에서 React.StrictMode 주석하기
  //   </div>
  // )

}

// // props 기본값 지정하기
// MyComponent.defaultProps = {
//   name : "수박",
//   age : 11,
//   addr: "하와이"

// }

//props 타입 검증 - 에러는 아니나, 타입에 대한 힌트가 된다
MyComponent.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  addr: PropTypes.string

}











export default MyComponent;