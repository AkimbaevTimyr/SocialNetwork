import React from 'react'
import s from './newsItem.module.css'


const NewsItem = (props) =>{
    return(
        <div className={s.item}>
            {props.messages}
            <div>{ props.time }</div>
        </div>
    )
}

export default NewsItem