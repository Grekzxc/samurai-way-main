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
import store, { ActionTypes, RootStateType, StoreType } from './redux/store';
import { StoreType1 } from '.';

type PropsType = {
  store: StoreType1
  dispatch: (action: ActionTypes) => void
}

let App = (props: PropsType) => {
  const state = props.store.getState()
  return (
    <BrowserRouter>
      <div className='app_Wrapper'>
        <Header />
        <NavBar />
        <div className='app_Wrapper_content'>
          <Route path={'/Dialogs'} render={() =>
            <Dialogs
              newMessageBody={state.dialogPage.newMessageBody}
              dispatch={props.dispatch}
              dialogs={state.dialogPage.dialogs}
              messages={state.dialogPage.messages}

            />} />
          <Route path={'/Profile'} render={() =>
            <Profile
              posts={state.profilePage.posts}
              dispatch={props.dispatch}
              newPostText={state.profilePage.newPostText}
            />} />


          <Route path={'/News'} component={News} />
          <Route path={'/Music'} component={Music} />
          <Route path={'/Settings'} component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
