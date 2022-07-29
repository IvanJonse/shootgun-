import avatar  from '../assets/img/avatar.jpg';

const FOLLOW = 'FOLLOW'

const UNFOLLOW = 'UNFOLLOW'

const SET_USERS = 'SET_USERS'


let initialState = {
    users: [
        {id: 1, avatar: `${avatar}`, followed: true, fullName: 'frad', status: 'i am a hook', location: {country: 'usa', city: 'new-york'}  },
        {id: 2, avatar: `${avatar}`, followed: false, fullName: 'red', status: 'i am a boss', location: {country: 'rty', city: 'ttt-yyyork'}  }
    ]
}


const testerReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            
            return {
                ...state,
                users: state.users.map (
                    (u) => {
                        if (u.id === action.userId) {
                            return {...u, followed: true}
                        }
                    return u
                    }
                )
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(
                    (u) => {
                        if (u.id === action.userId) {
                            return {...u, followed: false}
                        }
                        return u
                    }
                )
            }

        case SET_USERS:
            return {
                ...state, users: [...state.users, ...action.users]
            }

        default:
            return state
    }
}

export const followAc = (userId) => ({
    type: FOLLOW, userId
})

export const unfollowAc = (userId) => ({
     type: UNFOLLOW, userId
 })
 
export const setUsers = (users) => ({
     type: SET_USERS, users
})


export default testerReducer


