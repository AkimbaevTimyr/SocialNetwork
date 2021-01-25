import React from 'react'
import { connect } from 'react-redux'
import Music from './Music'
import {addMusicActionCreator, updateNewMusicActionCreator} from './../../redux/music-reducer'

let mapStateToProps = (state) =>{
    return{
        music: state.musicPage.music
    }
}


let mapDispatchToProps = (dispatch) =>{
    return{
        sendMusic: () =>{
            dispatch(addMusicActionCreator())
        },
        updateMusic: (music) =>{
            dispatch(updateNewMusicActionCreator(music))
        }
    }
}

const MusicContainer = connect(mapStateToProps,mapDispatchToProps)(Music)



export default MusicContainer