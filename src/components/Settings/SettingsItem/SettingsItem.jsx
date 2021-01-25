import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './settingsItem.module.css'

class SettingsItem extends React.Component{
    render(){
        return (
            <div>
                <div  className={s.item}>
                    <NavLink to='/notifications'>Уведомления</NavLink>
                </div>
                <div  className={s.item}>
                    <NavLink to='/account'>Аккаунт</NavLink>
                </div>
                <div  className={s.item}>
                    <NavLink to='/main'>Основные</NavLink>
                </div>
        
                <div  className={s.item}>
                    <NavLink to='/privacy'>Приватность</NavLink>
                </div>
            </div>
        )
    }
}

export default SettingsItem 