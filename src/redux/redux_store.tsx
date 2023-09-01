import { createStore, combineReducers } from "redux";
import sidebarReduser from "./sidebar_reduser";
import dialogReduser from "./dialog_reduser";
import profileReduser from "./profile_reduser";

let reducers = combineReducers({
    profilePage: profileReduser,
    dialogPage: dialogReduser,
    sidebar: sidebarReduser
})

let store = createStore(reducers)

export default store