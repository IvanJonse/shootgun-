import React, {useEffect, useRef} from "react";
import s from '../../styles/Style.module.sass';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from './PofileInfo/PofileInfo'

export default function Profile(props) {

return (

    <div className={s.content}> 
            <ProfileInfo 
                putProfileFiles={props.putProfileFiles}
                owner={props.owner}
                profile={props.profile} 
                status={props.status} 
                updateStatus={props.updateStatus}
                userId={props.userId}
                saveProfile={props.saveProfile}
            />

        <div className={s.content__info} >
                <MyPostsContainer profile={props.profile} />
        </div>
    </div>

    )

}