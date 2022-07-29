import React from "react";
import { addPost } from '../../../state/profile-reducer';
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let mapStateToProps = (state) => ({
        
        posts: state.profilePage.posts,
        postText: state.profilePage.postText,
        clear: state.profilePage.clear
})

export default connect(mapStateToProps, {addPost}) (MyPosts)