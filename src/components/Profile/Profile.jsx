import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PreLoader from '../common/Preloader/Preloader'

class Profile extends React.Component{
    render(){
        {this.props.setIsFetching(true)}
        return<> {this.props.isFetching ? <PreLoader /> : null}
                <ProfileInfo />
                <MyPostsContainer  />
                {this.props.setIsFetching(false)}
            </>
            
    }
}



export default Profile;


//store={props.store}