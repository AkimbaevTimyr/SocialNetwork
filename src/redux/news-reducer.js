
const UPDATE_NEWS_BODY_CREATOR = 'UPDATE-NEWS-BODY'
const SEND_NEWS = 'SEND-NEWS'

let initialState = {
    news:[
        {id: 1, messages: 'Генсек ООН понадеялся на скорую регистрацию российской вакцины ВОЗ', time:'23:34'},
        {id: 2, messages: 'Десятки тысяч американцев ушли из Республиканской партии после штурма Капитолия', time:'01:56'},
        {id: 3, messages: 'В Германии оценили размер замороженных из-за санкций активов россиян', time:'12:03'},
        {id: 4, messages: 'Байден приостановил продажу оружия Саудовской Аравии и ОАЭ', time:'06:34'},
        {id: 5, messages: 'Еще одна страна получит российскую вакцину «Спутник V»', time:'18:08'}
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

export const sendNews = () =>{
    return({type: UPDATE_NEWS_BODY_CREATOR})
}

export const updateNewsBody = (body) =>{
    return({type: SEND_NEWS, body: body})
}

export default newsReducer