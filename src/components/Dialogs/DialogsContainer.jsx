import React from 'react';
import Dialogs from "./Dialogs";
import {sendMessage, updateNewMessageBody} from "../../redux/dialogs-reducer";
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

// let mapDispatchToProps = (dispatch) =>{
//     return{
//         sendMessage: () =>{ 
//             dispatch(sendMessage())
//         },
//         updateNewMessageBody: (body) =>{
//             dispatch(updateNewMessageBody(body))
//         }
//     }
// }
const DialogsContainer = connect(mapStateToProps,{ sendMessage, updateNewMessageBody })(Dialogs)

export default DialogsContainer;