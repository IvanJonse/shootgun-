import { sendMassage } from '../../state/dialogs-reducer';
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from './../Hoc/withAuthRedirect';
import { compose } from 'redux';
import { withRouter } from '../withRouter/withRouter';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        dialogText: state.dialogsPage.dialogText,
        clear: state.dialogsPage.clear
    }
}

export default connect(mapStateToProps, {sendMassage}) (withAuthRedirect (Dialogs))

