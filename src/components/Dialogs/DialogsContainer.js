import React, {useEffect} from 'react';
import { sendMassage } from '../../state/dialogs-reducer';
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from './../Hoc/withAuthRedirect';
import { compose } from 'redux';
import { withRouter } from '../withRouter/withRouter';


function DialogsCont(props) {
    
    

    return (
        <Dialogs 
        profile={props.profile} 
        dialogsPage={props. dialogsPage} 
        dialogText={props.dialogText} 
        clear={props.clear} 
        sendMassage={props.sendMassage} 
        owner={props.router.params.userId}
        userIdLogin={props.userIdLogin}
        />
        
    )


}

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        dialogText: state.dialogsPage.dialogText,
        clear: state.dialogsPage.clear,
        profile: state.profilePage.profile,
        userIdLogin: state.auth.userId
    }
}


export default connect(mapStateToProps, {sendMassage}) (withRouter (DialogsCont))

