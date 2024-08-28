import { Component } from "react";

//함수형과 클래스형
class ClassComponent extends Component {
  
  constructor(props){ //프롭스 전달
    super(props); //생성자 연결
    this.state = {
      a: 1,
      b : this.props.name
    }
  }

  //화면 렌더링 함수
  render(){
    console.log(this.props);
    let {name, age} =this.props;
    let {a, b} = this.state;

    return( // 표현할 화면~~~~~
      <div>
        클래스 컴포
        props1 : {name}, props2 : {age}
        <hr></hr>
        state1 : {a}, {b}
      </div>
    )
  }
}

export default ClassComponent;



