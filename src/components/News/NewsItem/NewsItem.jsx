import React from 'react'
import s from './newsItem.module.css'

const NewsItem = (props) =>{
    return(
        <div className={s.item}>
            {props.messages}
        </div>
    )
}

export default NewsItem