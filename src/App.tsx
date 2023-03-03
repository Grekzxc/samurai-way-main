import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header'
import NavBar from './Components/Navbar/NavBar';
import Profile from './Components/Profile/Profile';




let App = () => {
  return (
    <BrowserRouter>
      <div className='app_Wrapper'>
       <Header/>
      <NavBar/>
       <Profile/>
      </div>
    </BrowserRouter>
  );
}


{/* <Route path={'/hello'} render = { ()=> <HelloMessage message={'hello friends'} /> } />    // 1 урок по типизауции
      <Route path={'/bye'} render = { () => <ByeMessage message= {'bye friends'} /> }/> */}

// type MessageType = {
//   message: string
// }

// function HelloMessage(props: MessageType){
//   return <h1>{props.message}</h1>
// }

// const ByeMessage: React.FC<MessageType> = (props) => {
//   return <h1>{props.message}</h1>
// }


export default App;
