import React from 'react';
import s from './Dialogs.module.css';
import Dialogs from "./Dialogs";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import store from '../../redux/redux-store';
import { connect } from 'react-redux'

// const DialogsContainer = (props) => {
//     return(
//         <StoreContext.Consumer>{
//             (store) =>{
//                 // let store = props.store.getState()

//                     let SendMessage = () => {
//                         store.dispatch(sendMessageCreator());
//                     }
                
//                     let updateNewMessageBody = (body) => {
//                         store.dispatch(updateNewMessageBodyCreator(body ));
//                     }
                
//                     return (
//                         <Dialogs SendMessage={ SendMessage } updateNewMessageBody={ updateNewMessageBody } dialogs ={ store.getState().dialogsPage.dialogs } messages = {store.getState().dialogsPage.messages } newMessageBody = { store.getState().dialogsPage.newMessageBody }/>
//                     )
//                 }      
//             }
//         </StoreContext.Consumer>
//     )
    
// }

let mapStateToProps = (state) =>{
    return{
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageBody: state.dialogsPage.newMessageBody
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        SendMessage: () =>{ 
            dispatch(sendMessageCreator())
        },
        updateNewMessageBody: (body) =>{
            dispatch(updateNewMessageBodyCreator(body))
        }
    }
}
const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer;