import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header  from './Header';
import Technologies from './Technologies';




let App = () => {
  return (
    <BrowserRouter>
    <div>
      <Header />
      <Technologies/>
      app hello
      {/* <Route path={'/hello'} render = { ()=> <HelloMessage message={'hello friends'} /> } />    // 1 урок по типизауции
      <Route path={'/bye'} render = { () => <ByeMessage message= {'bye friends'} /> }/> */}
    </div>
    </BrowserRouter>
  );
}


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
