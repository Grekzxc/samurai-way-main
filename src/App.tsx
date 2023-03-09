import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './Components/Dialogs/Dialogs';
import Header from './Components/Header/Header'
import Music from './Components/Music/Music';
import NavBar from './Components/Navbar/NavBar';
import News from './Components/News/News';
import Profile from './Components/Profile/Profile';
import Settings from './Components/Settings/Settings';

let App = () => {
  return (
    <BrowserRouter>
      <div className='app_Wrapper'>
        <Header />
        <NavBar />
        <div className='app_Wrapper_content'>
          <Route path={'/Dialogs'} component={Dialogs} />
          <Route path={'/Profile'} component={Profile} />
          <Route path={'/News'} component={News} />
          <Route path={'/Music'} component={Music} />
          <Route path={'/Settings'} component={Settings} />
        </div>
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
