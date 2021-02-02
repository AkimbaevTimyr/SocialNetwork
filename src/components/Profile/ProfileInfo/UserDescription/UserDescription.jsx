import React, {useEffect} from 'react'
import style from './user.module.css'
import Preloader from '../../../common/Preloader/Preloader'
import userPhoto from '../../../../assets/images/images.png'
const UserDescription = (props) =>{
    if(!props.profile){
        return <Preloader/>
    }
    useEffect(()=>{
        document.title = 'Profile'
    })
    return(
        <div className={ style.profileDescription }>
            <img className={ style.avatar } src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto } />
            <div className={ style.info }>
                <div className={ style.name }>
                    <div>{props.profile.fullName}</div>
                </div>
                <div>Обо мне: { props.profile.aboutMe }</div>
                <div>В поиске Работы: { props.profile.lookingForAJobDescription }</div>
                <div>Контакты: { props.profile.contacts.github }</div>
            </div>
        </div>
    )
}

export default UserDescription