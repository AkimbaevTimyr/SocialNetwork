import React, {useEffect} from 'react'
import styles from './users.module.css'

import userPhoto from '../../assets/images/images.png'
import s from './users.module.css'
import { NavLink } from 'react-router-dom'



const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)

    let pages = [] 
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    useEffect(()=>{
        document.title = 'Users'
    })
    return <div>
        <div className={s.buttons}>
            {pages.map(p => {
                return <button className={props.currentPage === p && s.selectedPage}
                    onClick={(e) => { props.onPageChanged(p) }}>{p}</button>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <NavLink to={'profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} />
                    </NavLink>
                    <div className={s.button}>
                        {u.followed
                            ? <button type="button" class="btn btn-primary btn-sm" onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button type="button" class="btn btn-primary btn-sm" onClick={() => { props.follow(u.id) }}>Follow</button>
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
export default Users







