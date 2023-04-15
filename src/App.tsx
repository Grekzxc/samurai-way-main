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
import store, { ActionTypes, AddPostActionType, ChangeNewTextActionType, RootStateType, StoreType } from './redux/state';

type PropsType = {
  _state: RootStateType
  // addPost: (postText: string) => void
  newPostText: string
  // updateNewPostText: (NewText: string) => void
  dispath: (action: ActionTypes) => void
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
              dialogs={store._state.dialogPage.dialogs}
              messages={store._state.dialogPage.messages}
            />} />
          <Route path={'/Profile'} render={() =>
            <Profile
              posts={props._state.profilePage.posts}
              dispath={store.dispath.bind(store)}
              newPostText={props._state.profilePage.newPostText}
            // updateNewPostText={props.updateNewPostText}
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
