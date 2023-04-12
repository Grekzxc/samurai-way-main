import React from 'react';
import state from './redux/state';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost, RootStateType, updateNewPostText } from './redux/state';
import { BrowserRouter } from 'react-router-dom';


export let rerenderEntireTree = (state: RootStateType) => {

    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                addPost={addPost}
                newPostText={state.profilePage.newPostText}
                updateNewPostText={updateNewPostText} />,

        </BrowserRouter>, document.getElementById('root')
    )
};




rerenderEntireTree(state)