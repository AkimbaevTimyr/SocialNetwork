import React from  'react'
import s from './musicItem.module.css'

const MusicItem = (props) =>{
    return(
        <div className={s.item}>
            {props.music}
        </div>
    )
}


export default MusicItem