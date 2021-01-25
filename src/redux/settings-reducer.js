import React from 'react'

let initialState = {
    settings:[
        {id: 1, settings: 'Уведомления'},
        {id: 1, settings: 'Аккаунт'},
        {id: 1, settings: 'Основные'},
        {id: 1, settings: 'Приватность'},
        {id: 1, settings: 'Черный список'},
    ]
}

const settingsReducer = (state = initialState, action) =>{
    return state 
}


export default settingsReducer