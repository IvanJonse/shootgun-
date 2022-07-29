
import * as axios from 'axios';
 
const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        'API-KEY' : '9336b89b-40e6-4adb-bb78-a9a9df569a49'
        },
    
    // params : {
    //     'offset' : 'offset',
    //     'limit' : 'limit'
    
    // }
})


export const userAPI  =  {
    
    getProfile (u) {
        
       return instance.get(`profile/${u}`)
    },

    getStatus (userId) {

       return instance.get(`profile/status/` + userId)
    },

    updateStatus (status) {

       return instance.put(`profile/status`, {status})
    },

    authUsers () {

        return instance.get(`auth/me`).then(response => response.data)
    
    },

    logIn (email, password, rememberMe = false) {

        return instance.post(`auth/login`, {email, password, rememberMe}).then(response => response.data)
    
    },

    logOut () {

        return instance.delete(`auth/login`).then(response => response.data)
    
    },

    getUsers (currentPage, pageSize)  {

        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)

    },

    isUnfollow (u) {

        return instance.delete(`follow/${u}`).then(response => response.data)
    },

    isFollow (u) {

        return instance.post(`follow/${u}`).then(response => response.data)

    }
}