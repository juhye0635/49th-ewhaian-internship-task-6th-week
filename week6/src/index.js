import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

// import문은 원하는 실습 실행할 때 주석 풀기
/*import Library from './Chapter03/Library';
import Clock from './Chapter04/Clock';
import CommentList from './Chapter05/CommentList';
import NotificationList from './Chapter06/NotificationList';
import Accommodate from './Chapter07/Accommodate';
import ConfirmButton from './Chapter08/ConfirmButton';
import LandingPage from './Chapter09/LandingPage';
import AttendanceBook from './Chapter10/AttendanceBook';
import SignUp from './Chapter11/SignUp';
import Calculator from './Chapter12/Calculator';
import ProfileCard from './Chapter13/ProfileCard'; */
import DarkOrLight from './Chapter14/DarkOrLight';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkOrLight />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
