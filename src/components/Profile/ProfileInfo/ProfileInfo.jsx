import React from 'react';
import s from './ProfileInfo.module.css';
import UserDescription from './UserDescription/UserDescription'
const ProfileInfo = () => {
    return (
        <div>
            <div className={s.descriptionBlock}>
                <UserDescription />
            </div>
        </div>
    )
}

export default ProfileInfo;