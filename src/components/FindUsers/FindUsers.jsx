import React from 'react';
import s from './FindUsers.module.sass';
import PreloaderUsers from '../Preloader/PreloaderUsers';
import Paginator from './Paginator';
import UserItem from './UserItem';

export default function FindUsers (props) {
    
return (

    <div className={s.users}>      
       <Paginator onPageChanged={props.onPageChanged} 
                    pageSize={props.pageSize} 
          />
     {  
        !props.isFetching ?  

            <div className={s.findUsers__content}>  
        
                {props.users.map( (u, index) => <UserItem key={index} u={u} unfollow={props.unfollow}
                    follow={props.follow} followingInProgress={props.followingInProgress}/>  )}
            </div>
        :    
         <PreloaderUsers/> 
        }
    </div>
    )
}
