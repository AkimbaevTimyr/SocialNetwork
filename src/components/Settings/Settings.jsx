import React, {useEffect} from 'react'
import SettingsItem from './SettingsItem/SettingsItem'
import s from './settings.module.css'
const Settings = (props) =>{
    useEffect(()=>{
        document.title = 'Users'
    })
    return(
        <div className={s.item}>
            <SettingsItem /> 
        </div>

    )
}


export default Settings