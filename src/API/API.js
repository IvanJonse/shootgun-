
import * as axios from 'axios';
 
const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        'API-KEY' : '3bcaaca0-1192-4de5-ae74-9c33cbcf801b'
        }
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

    getCaptcha () {
        return instance.get(`security/get-captcha-url`)
    
    },

    logIn (email, password, rememberMe = false, captcha = null ) {

        return instance.post(`auth/login`, {email, password, rememberMe, captcha}).then(response => response.data)
    
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

    },

    putFiles (file) {
        let formData = new FormData();
        formData.append('image', file);
        return instance.put(`profile/photo`, formData, { headers: {
            'Content-Type' : 'multipart/form-data'
        }}).then(response => response.data)
    },

    saveProfile (profile) {

        return instance.put(`profile`, profile)
    }


}