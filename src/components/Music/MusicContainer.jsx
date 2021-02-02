import React from 'react'
import { connect } from 'react-redux'
import Music from './Music'
import {sendMusic, updateMusic, addMusic} from './../../redux/music-reducer'

let mapStateToProps = (state) =>{
    return{
        music: state.musicPage.music,
        newMusic: state.musicPage.newMusic
    }
}


// let mapDispatchToProps = (dispatch) =>{
//     return{
//         sendMusic: () =>{
//             dispatch(sendMusic())
//         },
//         updateMusic: (music) =>{
//             dispatch(updateMusic(music))
//         }
//     }
// }

const MusicContainer = connect(mapStateToProps,{ sendMusic, updateMusic, addMusic })(Music)



export default MusicContainer