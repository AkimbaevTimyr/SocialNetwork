let UPDATE_NEW_MUSIC_BODY = 'UPDATE-NEW-MUSIC-BODY'
let ADD_MUSIC = 'ADD-NEWS'
let ADD_NEW_MUSIC = 'ADD-NEW-MUSIC'

let initialState = {
    music:[
        {id: 1, music: 'LinkinPark'},
        {id: 2, music: 'Slipknot'},
        {id: 3, music: '30 seconds to Mars'},
        {id: 4, music: 'Sum 41'},
        {id: 5, music: 'Limp Bizkit'}
    ],
    newMusic:[
        {id: 1, musicName: 'In the End'},
        {id: 2, musicName: 'What Ive Down'},
        {id: 3, musicName: 'Before i Forgot'},
        {id: 4, musicName: 'The Kill'},
        {id: 5, musicName: 'Beatiful Life'},
    ],
    newMusicText: ''
}

const musicReducer = (state = initialState, action) => {
    console.log(action.userId)
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
        case ADD_NEW_MUSIC:{
            return{
                ...state,
                music: state.newMusic.map( n =>{
                    if(n.id === action.userId){
                        return{...n, newMusic: action.newMusics}
                    }
                    return n
                })
            }
        }
        default:
            return state
    }
}

export const sendMusic = () => ({type: ADD_MUSIC})
export const updateMusic = (music) =>
    ({type: UPDATE_NEW_MUSIC_BODY, newMusic: music})

export const addMusic = (userId, newMusics) =>({type: ADD_NEW_MUSIC, userId,newMusics})
 

export default musicReducer