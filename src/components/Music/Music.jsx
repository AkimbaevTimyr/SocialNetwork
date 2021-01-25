import React from 'react'
import MusicItem from './MusicItem/MusicItem'
import s from './music.module.css'
const Music = (props) =>{
    let mucisElements = props.music.map( m => <MusicItem music={m.music} />)

    let updateNewMusic = (e) =>{
        let music = e.target.value
        props.updateMusic(music)
    }

    let sendMusic = () =>{
        props.sendMusic()
    }

    
    return(
        <div>
            <div>
                { mucisElements }
            </div>
            <div className={s.item}>
                <div>
                    <textarea onChange={ updateNewMusic } placeholder='Enter your message'></textarea>
                </div>
                <div>
                    <button onClick={ sendMusic }>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Music