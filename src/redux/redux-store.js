import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import newsReducer from './news-reducer'
import musicReducer from './music-reducer'
import settingsReducer from './settings-reducer'
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer"

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    newsPage: newsReducer,
    musicPage: musicReducer,
    settingsPage: settingsReducer,
    usersPage: usersReducer,
    auth: authReducer
});

let store = createStore(reducers);


export default store;