import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from './MyPosts'
import {connect} from 'react-redux'
// const MyPostsContainer = (props) => {
//     return(
//         <StoreContext.Consumer>{
//             (store) => {
//                     // let store = props.store.getState()


//                     let addPost = () => {
//                         store.dispatch(addPostActionCreator());
//                     }
                
//                     let onPostChange = (text) => {
//                         let action = updateNewPostTextActionCreator(text);
//                         store.dispatch(action);
//                     }
                
//                     return <MyPosts updateNewPostText={ onPostChange } addPost={ addPost } newPostText={ store.getState().profilePage.newPostText }  posts={ store.getState().profilePage.posts }/>
                
//                 }
//             }
//         </StoreContext.Consumer>
//     )

    
// }

let mapStateToProps = (state) =>{
    return{
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        updateNewPostText: (text) =>{
            let action = updateNewPostTextActionCreator(text);
            dispatch(action)
        },
        addPost: () =>{
            dispatch(addPostActionCreator());
        }
    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)
export default MyPostsContainer;


                    
            