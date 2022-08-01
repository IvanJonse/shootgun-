import React from "react";
import Header from "./Header";
import { connect } from 'react-redux';
import { logOut } from '../../state/auth-reducer';

class HeaderContainer extends React.Component {

   render() {
      
      return this.props.profile ? <Header isAuth={this.props.isAuth} login={this.props.logIn} profile={this.props.profile} logOut={this.props.logOut}/> : ''

   }
}

 let mapStateToProps = (state) => ({

   isAuth: state.auth.isAuth,
   login: state.auth.login,
   profile: state.profilePage.profile

})

export default  connect(mapStateToProps, {logOut})  (HeaderContainer)