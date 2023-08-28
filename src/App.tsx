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
import store, { ActionTypes, RootStateType, StoreType } from './redux/state';

type PropsType = {
  newPostText: string
  state: RootStateType
  dispath: (action: ActionTypes) => void
  //store: StoreType
}

let App = (props: PropsType) => {
  return (
    <BrowserRouter>
      <div className='app_Wrapper'>
        <Header />
        <NavBar />
        <div className='app_Wrapper_content'>
          <Route path={'/Dialogs'} render={() =>
            <Dialogs
              dispatch={props.dispath}
              dialogs={props.state.dialogPage.dialogs}
              messages={props.state.dialogPage.messages}
              state={props.state}

            />} />
          <Route path={'/Profile'} render={() =>
            <Profile
              posts={props.state.profilePage.posts}
              dispath={store.dispath.bind(store)}
              newPostText={props.state.profilePage.newPostText}
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
