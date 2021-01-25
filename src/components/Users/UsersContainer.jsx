import React from 'react'
import { connect} from 'react-redux'
import { followAC, setUsersAC, unfollowAC , setCurrentPageAC, setTotalUsersCountAC} from '../../redux/users-reducer'
import Users from './Users'


let mapStateToProps = (state) =>{
    return{
        users: state.usersPage.users,
        totalUserCount: state.usersPage.totalUserCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage

    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        follow: (userId) =>{
            dispatch(followAC(userId))
        },
        unfollow: (userId) =>{
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) =>{
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) =>{
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) =>{
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer