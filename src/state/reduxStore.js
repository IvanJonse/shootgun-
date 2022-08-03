
import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
import authReducer from './auth-reducer';
import dialogReducer from './dialogs-reducer';
import findUsersReducer from './findUsers-reducer';
import profileReducer from './profile-reducer';
import thunkMiddleware  from 'redux-thunk'
import { reducer as formRedux } from 'redux-form'
import appReducer from './app-reducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    findUsersPage: findUsersReducer,
    auth: authReducer,
    app: appReducer,
    form: formRedux
})


let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store


export default store;