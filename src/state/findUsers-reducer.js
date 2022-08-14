import { userAPI } from '../API/API'
import { objectInArray } from '../Utils/objectHelper'

const FOLLOW = 'FOLLOW'

const UNFOLLOW = 'UNFOLLOW'

const SET_USERS = 'SET_USERS'

const SET_CURRENTPAGE = 'SET_CURRENTPAGE'

const SET_TOTAL_ITEMS_COUNT = 'SET_TOTAL_ITEMS_COUNT'

const TOGGLE_IS_FETCHING = 'LOADER'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'


let initialState = {

    users: [],

    pageSize: 10,

    totalItemsCount: 0,

    currentPage: 1,

    isFetching: true,
    
    followingInProgress: []
    
}

const findUsersReducer = (state = initialState, action) => {

    switch (action.type) {

        case FOLLOW:
            
            return  {
                ...state, 
                users: objectInArray(state.users, action.userId, 'id', {followed: true})
            }

        case UNFOLLOW:
            return  { 
                ...state, 
                users: objectInArray( state.users, action.userId, 'id',  {followed: false})
            }

        case SET_USERS: {
            return {
               ...state, users: action.users
            }
        }

        case SET_CURRENTPAGE: {
            return {
                ...state, currentPage: action.currentPage
            }
        }

        case SET_TOTAL_ITEMS_COUNT: {
            return {...state, totalItemsCount: action.count}
        }

        case TOGGLE_IS_FETCHING: {
                return {
                    ...state, isFetching: action.isFetching
                }
            }

        case TOGGLE_IS_FOLLOWING_PROGRESS: {
                return {
                    ...state, followingInProgress: action.isFetching 
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
                }
            }


        default: return state
    }
}

export const followSuccess = (userId) => ({
   type: FOLLOW, userId
})

export const unfollowSuccess = (userId) => ({
    type: UNFOLLOW, userId
 })

 export const setUsers = (users) => ({
    type: SET_USERS, users
 })

 export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENTPAGE, currentPage
 })

export const setTotalUsersCount = (count) => ({
    type: SET_TOTAL_ITEMS_COUNT, count
})


export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING, isFetching
})

export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId
})



export const getUsers = (currentPage, pageSize) => { 

    return async (dispatch) => {
        dispatch (setCurrentPage(currentPage))
        dispatch (toggleIsFetching(true))
         let data = await userAPI.getUsers(currentPage, pageSize)
             dispatch (toggleIsFetching(false))
             dispatch (setUsers (data.items))
             dispatch (setTotalUsersCount (data.totalCount))
     }
 }



export const followUnfollow = async (u, dispatch, apiMethods, actionCreator) => {

        dispatch(toggleFollowingProgress(true, u))  

        let data = await apiMethods(u)
                                                
            if (data.resultCode === 0) {
                
                dispatch(actionCreator(u))
            }

            dispatch(toggleFollowingProgress(false, u))   
}

 export const unfollow = (u) => { 

    return async (dispatch) => {

        followUnfollow(u, dispatch, userAPI.isUnfollow , unfollowSuccess)
            
    }     
 }

 export const follow = (u) => { 

    return async (dispatch) => {

        followUnfollow(u, dispatch, userAPI.isFollow , followSuccess)
    }
}




export default findUsersReducer;
