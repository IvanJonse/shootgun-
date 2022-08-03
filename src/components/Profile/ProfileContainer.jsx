import React, {useEffect} from "react";
import Profile from "./Profile";
import { getUserProfile, getStatus, updateStatus, setUploadFiles, putProfileFiles, saveProfile } from '../../state/profile-reducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from './../Hoc/withAuthRedirect';
import { compose } from "redux";
import Preloader from "../Preloader/Preloader";
import '../Preloader/Preloader.sass'
import { withRouter } from "../withRouter/withRouter";
import '../Preloader/Preloader.sass'

function ProfileContainer(props) {

    useEffect(()=> {
        let userId = props.router.params.userId
        if (!userId) {
            userId = props.userId 
            if (!userId) {
                props.router.navigate('/log-in')
            }
        }
        props.getUserProfile(userId)
        props.getStatus(userId)
    }, [props.router.params.userId])

    
        return (

            <>
            
                { props.profile ?
                    
                        <Profile {...props} 
                        owner={!props.router.params.userId}
                        profile={props.profile} 
                        isAuth={props.isAuth} 
                        status={props.status} 
                        updateStatus={props.updateStatus}
                        userId={props.userId}
                        putProfileFiles={props.putProfileFiles}
                        saveProfile={props.saveProfile}
                        />
                   
                : <div className='wrapPreloader'>  <Preloader/> </div>

                }
                
            </>    
            

        )
    
    }

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userId: state.auth.userId,
    isAuth: state.auth.isAuth,

})

export default compose (connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, putProfileFiles, setUploadFiles, saveProfile }), withAuthRedirect) (withRouter  (ProfileContainer))