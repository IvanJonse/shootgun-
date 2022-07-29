import React from 'react';
import { connect } from 'react-redux';
import { follow, setCurrentPage, unfollow, toggleFollowingProgress, getUsers, toggleIsFetching, setUsers } from '../../state/findUsers-reducer';
import FindUsers from './FindUsers';
import '../Preloader/Preloader.sass'
import { compose } from 'redux';
import '../Preloader/Preloader.sass'

class FindUserContainer extends React.Component {

    componentDidMount() {
        let {currentPage, pageSize} = this.props
        this.props.getUsers(currentPage, pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber )
        let {pageSize} = this.props
        this.props.getUsers(pageNumber, pageSize)
        
    }

    render() {

        return (
            <>
                <FindUsers 
                    totalItemsCount={this.props.totalItemsCount}
                    pageSize={this.props.pageSize} 
                    currentPage={this.props.currentPage} 
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    toggleFollowingProgress={this.props.toggleFollowingProgress}
                    followingInProgress={this.props.followingInProgress}
                    toggleIsFetching={this.props.toggleIsFetching}
                    isFetching={this.props.isFetching}      
                    setUsers={this.props.setUsers}   
                    getUsers={this.props.getUsers}  
                />        
            </>
        )
    }
}


let mapStateToProps = (state) => {

    return {
        users: state.findUsersPage.users,
        pageSize: state.findUsersPage.pageSize,
        totalItemsCount: state.findUsersPage.totalItemsCount,
        currentPage: state.findUsersPage.currentPage,
        isFetching: state.findUsersPage.isFetching,
        followingInProgress: state.findUsersPage.followingInProgress
    }
}

export default compose(connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    toggleIsFetching,
    getUsers, setUsers
  }) )(FindUserContainer)
    
