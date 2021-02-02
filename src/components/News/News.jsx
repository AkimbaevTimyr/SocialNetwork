import { sendMessageCreator } from '../../redux/dialogs-reducer'
import s from './News.module.css'
import NewsItem from './NewsItem/NewsItem'
import React, {useEffect} from 'react'


const News = (props) =>{

    useEffect(()=>{
        document.title = 'News'
    })

    let newsElements = props.messages.map( n => <NewsItem messages={n.messages} time={n.time} />)
   
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
                    <textarea placeholder='Enter your news' onChange = { onNewMessageChange }/>
                </div>
                <div>
                    <button type="button" class="btn btn-primary"  onClick = { onSendMessageClick }>Send</button>
                </div>
            </div>
        </div>
    )
}


export default News