import React from 'react'
import { connect} from 'react-redux'
import { followAC, setUsersAC, unfollowAC , setCurrentPageAC, setTotalUsersCountAC, setIsFetchingAC} from '../../redux/users-reducer'
import Users from './Users'
import *as axios from 'axios'
import PreLoader from '../common/Preloader/Preloader'

// две контейнерные компоненты находятся в одной компоненте
class UsersContainer extends React.Component{
    componentDidMount(){
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}&100`)
            .then( response =>{
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    }
    onPageChanged =(pageNumber)=>{
        this.props.setIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items);
            });
    }
    render(){
       
        return <>
            {this.props.isFetching ? <PreLoader /> : null}
            <Users totalUserCount={this.props.totalUserCount} 
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
        />
        </>
    }
}

let mapStateToProps = (state) =>{
    return{
        users: state.usersPage.users,
        totalUserCount: state.usersPage.totalUserCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
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
            dispatch(setTotalUsersCountAC(totalCount/10))
        },
        setIsFetching: (isFetching) =>{
            dispatch(setIsFetchingAC(isFetching))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)