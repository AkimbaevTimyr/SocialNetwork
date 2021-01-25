let UPDATE_NEW_MUSIC_BODY = 'UPDATE-NEW-MUSIC-BODY'
let ADD_MUSIC = 'ADD-NEWS'

let initialState = {
    music:[
        {id: 1, music: 'LinkinPark'},
        {id: 2, music: 'Slipknot'},
        {id: 3, music: '30 seconds to Mars'},
        {id: 4, music: 'Sum 41'},
        {id: 5, music: 'Limp Bizkit'}
    ],
    newMusicText: ''
}

const musicReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_MUSIC:{
            return{
                ...state,
                newMusicText: '',
                music: [ ...state.music, {id:6 , music: state.newMusicText}]
            }
        }
        case UPDATE_NEW_MUSIC_BODY:{
            return{
                ...state,
                newMusicText: action.newMusic
            }
        }
        default:
            return state
    }
}

export const addMusicActionCreator = () => ({type: ADD_MUSIC})
export const updateNewMusicActionCreator = (music) =>
    ({type: UPDATE_NEW_MUSIC_BODY, newMusic: music})



export default musicReducer