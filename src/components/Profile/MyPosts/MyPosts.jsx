import React, {useEffect, useRef} from "react";
import s from './MyPosts.module.sass';
import AddPostForm from "./AddPostForm";
import Post from "./Post/Post";

export default function MyPosts(props) {

    let postel = props.posts.map((d, index) => (<Post key={index} avatar={d.avatar} id={d.id} name={d.name} massage={d.massage} like={d.like} dislike={d.dislike}/>) )

    const OnAddPost = (values, resetForm) => {

        props.addPost(values.postText)

        resetForm((values.postText = () => values.clear))
    }

    return (
        <div className={s.Posts}>
            <div className={s.Posts__title}>my post</div>
            <AddPostForm postText={props.postText} onSubmit={OnAddPost} />
            <div className={s.Post__wrap} >   
                {postel}
            </div>     

        </div>
    )
} 

