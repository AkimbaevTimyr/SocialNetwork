import React from 'react';
import s from './ProfileInfo.module.css';
import UserDescription from './UserDescription/UserDescription'
const ProfileInfo = (props) => {
    return (
        <div>
            <div className={s.descriptionBlock}>
                <UserDescription profile={props.profile} />
            </div>
        </div>
    )
}

export default ProfileInfo;