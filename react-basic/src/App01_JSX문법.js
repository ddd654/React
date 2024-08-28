import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';

//App.js << 항상 이 이름을 쓴다~~~~~~~~

// 필요한 파일들을 불러올때 webpack loader를 사용한다
// 직접 설치, 보일러플레이트로 만들경우는 자동 설정된다
// webpack 안에  babel이 ES5로 다운그레이드 해준다

//변수

function App() {

  let name = "사과";
  let age = 20;

  return (// 그리고 싶은 화면 코드들
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
          
    //       Edit <code>src/App.js</code> and save to reload. 사과
          
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <Fragment>
    <h3>JSX 사용하기</h3>
    <ul>
      {/* 주석 123 */}
      <li>1. JS 파일은 JSX라고 부른다. 주석은 alt shift A 로도 가능하다 </li>
      <li>2. JSX는 반드시 하나의 태그를 return 해야한다</li>
      <li>3. div로 묶거나, Fragment or {/* <></> */} &lt;&gt; 꺾쇠로 묶으면 된다 </li>
      <li>4. 변수값을 사용할 때는 {name}, {age} 으로 참조한다</li>
      <li>5. if문 보다 삼항연산식을 사용한다</li>
      <li>6. 화면에 보여주고 싶은 것이 없으면 null을 리턴하자</li>
      <li>7. undefined 사용은 자제</li>

      <li>8. DOM요소에 css를 직접 넣을때는 객체형으로 묶고, 속성은 카멜표기법 사용</li>
      <li>9. class 속성은 className으로 바뀐다</li>
      <li>10 홀로 쓰는 태그는 / 슬래시로 닫는 태그를 만들어준다</li>

    </ul>

    <div className='apple123'>
      apple
      <br/>
      <input name="name" ></input>
    </div>

    <div style={/* 중괄호 두개 let a = 1; */{color:"red", backgroundColor: "yellow"
      ,fontSize : 33
    }}>
      {name ==='사과' ? '참' : '거짓'}
      {age == 22 ?
        <h5>20이니 참</h5> 
        : 
        null}

      {age == 20 ?
        <h5>20이니 참</h5> 
        : 
        undefined} {/* 7. undefined 사용은 자제 */}
    </div>

    </Fragment>

  )
}

export default App;
