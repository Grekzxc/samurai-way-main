import React from 'react';
import store from './redux/redux_store';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { RootStateType, StoreType } from './redux/store';

export let _callSubscriber = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                store={store}
                dispatch={store.dispatch.bind(store)}

            />,

        </BrowserRouter>, document.getElementById('root')
    )
};
_callSubscriber(store.getState())

store.subscribe(() => {
    let state = store.getState()
    _callSubscriber(state)
})

export type StoreType1 = typeof store

// updateNewPostText={store.updateNewPostText.bind(store)}