import ava from '../assets/img/ava.jpg';
import user  from '../assets/img/user.jpg';

import { userAPI } from '../API/API'

const ADDPOST = 'ADD-POST'

const SET_USER_PROFILE = 'SET_USER_PROFILE'

const SET_STATUS = 'SET_STATUS'

const SET_UPLOAD_FILES = 'SET_UPLOAD_FILES'

let initialState = {

    posts: [
        
    ],

    profile: null, 

    status: '',

    aboutMe: '',
    
    clear: ''
    
}

const profileReducer = (state = initialState, action) => {
     
    switch (action.type) {

        case ADDPOST: {

            let newPost = action.postText
            
            return {...state, posts: [...state.posts, {avatar: `${ava}`, massage: newPost}]}

        }   

        case SET_USER_PROFILE: {
            return {

                ...state, profile: action.profile
            }
        }

        case SET_STATUS: {
            return {

                ...state, status: action.status
            }
        }

        case SET_UPLOAD_FILES: {
                return {

                ...state, profile: {...state.profile, photos: action.photos}
            }
        }

        default:
            return state
    } 
}

export const addPost = (postText) => ({
  
    type: ADDPOST, postText
})


const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE, profile
})

 export const setStatus = (status) => ({
    type: SET_STATUS, status
})

export const setUploadFiles = (photos) => ({
    type: SET_UPLOAD_FILES, photos
})

export const putProfileFiles = (file) => {

    return async (dispatch) => {

      let data = await userAPI.putFiles(file)

      if (data.resultCode === 0) {
        dispatch(setUploadFiles(data.data.photos))
      } 
    }
}


 export const getUserProfile = (u) => {

    return async (dispatch) => {

      let response = await userAPI.getProfile(u)

        dispatch(setUserProfile(response.data))
    }
}

export const getStatus = (userId) => {
   
    return async (dispatch) => {
       
        let response = await userAPI.getStatus(userId)
        
        dispatch(setStatus(response.data))
        
    }
}

export const updateStatus = (status) => {
   
    return async (dispatch) => {

      let response = await userAPI.updateStatus(status)

        if(response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
        
    }
}

export const saveProfile = (profile) => {
   
    return async (dispatch, getState) => {

       const id = getState().auth.userId 
        
      let response = await userAPI.saveProfile(profile)

        if(response.data.resultCode === 0) {
            dispatch(getUserProfile(id))
        }
    }
}
   
export default profileReducer
