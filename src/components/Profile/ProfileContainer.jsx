import React from "react";
import Profile from "./Profile";
import { getUserProfile, getStatus, updateStatus } from '../../state/profile-reducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from './../Hoc/withAuthRedirect';
import { compose } from "redux";
import Preloader from "../Preloader/Preloader";
import '../Preloader/Preloader.sass'
import { withRouter } from "../withRouter/withRouter";
import '../Preloader/Preloader.sass'

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId
        if (!userId) {
            userId = this.props.userId 
            if (!userId) {
                this.props.router.navigate('/log-in')
            }
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    
    }

  render() {
    
        return (

            <>
            
                { this.props.profile ?
                    
                        <Profile {...this.props} 
                        profile={this.props.profile} 
                        isAuth={this.props.isAuth} 
                        status={this.props.status} 
                        updateStatus={this.props.updateStatus}
                        userId={this.props.userId}
                        />
                        
                   
                : <div className='wrapPreloader'>  <Preloader/> </div>
                }
                
            </>
        )
    
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userId: state.auth.userId,
    isAuth: state.auth.isAuth

})
   

export default compose  (connect(mapStateToProps, {getUserProfile, getStatus, updateStatus }), withAuthRedirect) (withRouter  (ProfileContainer))