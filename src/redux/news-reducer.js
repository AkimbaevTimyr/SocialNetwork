
const UPDATE_NEWS_BODY_CREATOR = 'UPDATE-NEWS-BODY'
const SEND_NEWS = 'SEND-NEWS'

let initialState = {
    news:[
        {id: 1, messages: 'Hello World'},
        {id: 2, messages: 'Hello World'},
        {id: 3, messages: 'Hello World'},
        {id: 4, messages: 'Hello World'},
        {id: 5, messages: 'Hello World'}
    ],
    newNewsBody: ''
}

const newsReducer = (state = initialState, action) =>{
    switch(action.type){
        case SEND_NEWS:{
            return {
                ...state,
                newNewsBody: action.body
            }
        }
        case UPDATE_NEWS_BODY_CREATOR:{
            let body = state.newNewsBody
            return{
                ...state,
                news: [...state.news, {id:6, messages: body}],
                newNewsBody: ''
            }
        }
        default:
            return state
    }
    
}

export const sendNewsCreator = () =>{
    return({type: UPDATE_NEWS_BODY_CREATOR})
}

export const updateNewsBodyCreator = (body) =>{
    return({type: SEND_NEWS, body: body})
}

export default newsReducer