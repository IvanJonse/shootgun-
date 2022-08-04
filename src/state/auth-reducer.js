import { stopSubmit } from 'redux-form'
import { userAPI } from '../API/API'

const SET_USER_DATA = 'FOLLOW'

const GET_CAPTCHA_URL_SUSCESS = 'GET_CAPTCHA_URL_SUSCESS'

let initialState = {

    messages: [],

    userId: null,

    email: null,

    login: null,

    isAuth: false,

    captchaUrl: null,

    clear: ''
}



const authReducer  = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUSCESS:

            return {
                ...state, 
                ...action.payload
            }

        default: return state
    }
}

export const setAuthUserData = (login, userId, email, isAuth ) => ({
   type: SET_USER_DATA, payload: {login, userId, email, isAuth}
})

export const getCaptchaUrl = (captchaUrl) => ({
   type: GET_CAPTCHA_URL_SUSCESS, payload: {captchaUrl}
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
 
export const logIn = (email, password, rememberMe, captcha) => {
    return async (dispatch) => {

       let data = await userAPI.logIn(email, password, rememberMe, captcha)

                if (data.resultCode === 0) {
                    dispatch(getAuthUser())
                } else {

                if(data.resultCode === 10)  {
                    dispatch(getCaptcha())
                } 

                let message = data.messages.length > 0 ? data.messages[0] : 'Some error'
                dispatch(stopSubmit('login', {_error: message} ))
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
export const getCaptcha = () => {
    return async (dispatch) => {
        const response = await userAPI.getCaptcha()
        const captchaUrl = response.data.url
        
        dispatch(getCaptchaUrl(captchaUrl))
    }
}





export default authReducer;
