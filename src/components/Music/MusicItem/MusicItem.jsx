import React from  'react'
import s from './musicItem.module.css'

const MusicItem = (props) =>{
    return(
        <div className={s.item}>
            <div>
                {props.music}
            </div>
        </div>
    )
}


export default MusicItem