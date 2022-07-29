import React from "react";
import s from '../../styles/Style.module.sass';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from './PofileInfo/PofileInfo'

export default function Profile(props) {

return (

    <div className={s.content}> 
            <ProfileInfo 
                profile={props.profile} 
                status={props.status} 
                updateStatus={props.updateStatus}
                userId={props.userId}
            />

        <div className={s.content__info}>
                <MyPostsContainer />
        </div>
    </div>

    )

}