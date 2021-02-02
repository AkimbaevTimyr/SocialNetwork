import React, {useEffect} from 'react'
import MusicItem from './MusicItem/MusicItem'
import s from './music.module.css'
import { addMusic } from '../../redux/music-reducer'






const Music = (props) =>{
    useEffect(()=>{
        document.title = 'Users'
    })
    let mucisElements = props.music.map( m => <MusicItem music={m.music}  />)
    let newMusicElements = props.newMusic.map( n => 
        <div>
            <button onClick={ ()=>addMusics(n.id, n.musicName)}>+</button>
            { n.musicName }
        </div> 
        )

    let updateNewMusic = (e) =>{
        let music = e.target.value
        props.updateMusic(music)
    }

    let sendMusic = () =>{
        props.sendMusic()
    }

    let addMusics = (newMusic, userId) =>{
        props.addMusic(newMusic, userId)
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
                    <button  type="button" class="btn btn-primary" onClick={ sendMusic }>Send</button>
                </div>
                <div>
                    { newMusicElements }
                </div>
            </div>
        </div>
    )
}

export default Music