import React from 'react'
import SettingsItem from './SettingsItem/SettingsItem'
import {Route} from "react-router-dom";
import Notifications from './Notifications/Notifications'
import Account from './Account/Account'
import Main from './Main/Main'
import Privacy from './Privacy/Privacy'
import s from './settings.module.css'

const Settings = (props) =>{
    return(
        <div className={s.item}>
            <SettingsItem /> 
        </div>

    )
}


export default Settings