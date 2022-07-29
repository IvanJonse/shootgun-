import React from "react";
import Header from "./Header";
import { connect } from 'react-redux';
import { logOut } from '../../state/auth-reducer';

class HeaderContainer extends React.Component {

   render() {
      
      return  <Header {...this.props} />
   
   }
}

 let mapStateToProps = (state) => ({

   isAuth: state.auth.isAuth,
   login: state.auth.login,
   profile: state.profilePage.profile,

})

export default  connect(mapStateToProps, {logOut})  (HeaderContainer)