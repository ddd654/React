import { createContext } from 'react';

//context는 컴포 외부에서 관리되는 객체
//createContext로 초기값을 지정한다

// 1) API 쓰기 > 컬러 컴포
const ColorContext =createContext({color:'greenyellow'}); //초기값 쳐넣기
//context는 전역적인



export default ColorContext;


