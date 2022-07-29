import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

export const withAuthRedirect = (Components) => {
    
    let mapStateToProps = (state) => ({
        isAuth: state.auth.isAuth
       
    })
    class RedirectComponent extends React.Component {
        render() {    

            if (!this.props.isAuth) return <Navigate to={'/log-in'} />

            return <Components {...this.props}/>
            
        }
    }

    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)

    return ConnectedRedirectComponent
    
}

