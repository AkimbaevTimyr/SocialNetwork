import { sendMessageCreator } from '../../redux/dialogs-reducer'
import s from './News.module.css'
import NewsItem from './NewsItem/NewsItem'
import React from 'react'


const News = (props) =>{

    let newsElements = props.messages.map( n => <NewsItem messages={n.messages} />)
   
    let onSendMessageClick = () =>{
        props.sendNews()
    }

    let onNewMessageChange = (e) =>{
        let body = e.target.value
        props.updateNewsBody(body)
    }
    return(
        <div>
            <div>
                { newsElements }
            </div>
            <div className={s.item}>
                <div>
                    <textarea onChange = { onNewMessageChange }/>
                </div>
                <div>
                    <button onClick = { onSendMessageClick }>Send</button>
                </div>
            </div>
        </div>
    )
}


export default News