import React from 'react';
import store, { RootStateType, StoreType } from './redux/state';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


export let _callSubscriber = (store: StoreType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                _state={store.getState()}
                dispath={store.dispath.bind(store)}
                newPostText={store._state.profilePage.newPostText}
            />,

        </BrowserRouter>, document.getElementById('root')
    )
};
_callSubscriber(store)

store.subscribe(_callSubscriber)

// updateNewPostText={store.updateNewPostText.bind(store)}