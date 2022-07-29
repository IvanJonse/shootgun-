import { stopSubmit } from 'redux-form'
import { userAPI } from '../API/API'

const SET_USER_DATA = 'FOLLOW'

const SEND_DATA = 'SEND_DATA'

let initialState = {

    messages: [],

    userId: null,

    email: null,

    login: null,

    isAuth: false
}

const authReducer  = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_DATA:
            
            return  {
                ...state, 
                ...action.data
                
            }


        case SEND_DATA:

            return {
                ...state, 
                ...action.data
            }

        default: return state
    }
}

export const setAuthUserData = (login, userId, email, isAuth ) => ({
   type: SET_USER_DATA, data: {login, userId, email, isAuth}
})


export const getAuthUser = () => {
   return async (dispatch) => {
    // return
             let data = await userAPI.authUsers()
                if (data.resultCode === 0) {
                    let {login, id, email} = data.data
                    dispatch(setAuthUserData(login, id, email, true))
                }
    }
}


export const logIn = (email, password, rememberMe) => {
    return async (dispatch) => {

       let data = await userAPI.logIn(email, password, rememberMe)

                if (data.resultCode === 0) {
                    dispatch(getAuthUser())
                } else {

                let message = data.messages.length > 0 ? data.messages[0] : 'Some error'
                dispatch(stopSubmit('login', {_error: message}))
                }
    }
}


export const logOut = () => {
    return async (dispatch) => {
        let data = await userAPI.logOut()
                if (data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false))
                }
    }
}


export default authReducer;
