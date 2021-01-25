import React from  'react'
import styles from './users.module.css'
import *as axios from 'axios'
import userPhoto from '../../assets/images/images.png'
import s from './users.module.css'
import { setCurrentPageAc } from '../../redux/users-reducer'



class Users extends React.Component{

    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}&100`)
            .then( response =>{
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    }
    onPageChanged =(pageNumber)=>{
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }



    render(){
        let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize)

        let pages = []
        for(let i=1; i<= pagesCount; i++){
            pages.push(i)
        }
        


        return <div className={s.item}>
            <div>
                { pages.map( p =>{
                    return <button className={this.props.currentPage === p && s.selectedPage }
                    onClick={ (e) => {this.onPageChanged(p)} }>{p}</button>
                })}
            </div>
        {
            this.props.users.map( u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto } className={styles.userPhoto} />
                    </div>
                    <div className={s.button}>
                        { u.followed 
                            ? <button onClick={ () => { this.props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={ () => { this.props.follow(u.id) }}>Follow</button>
                        }
                        
                    </div>
                    <span className={s.info}>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div> 
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
                </span>
            </div>)
        }
    </div>
    }
}

export default Users