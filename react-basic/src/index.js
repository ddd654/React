import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App02_component from './App02_component';// app js 파일을 받아서 App 이름으로 가져온다
import reportWebVitals from './reportWebVitals';

//컴포넌트에서 사용하는 전역 설정
// App JS를 id="root" 인 태그에 넣어주고 있다
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 컴포넌트 */}
    <App02_component />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();










