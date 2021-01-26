import { connect } from "react-redux";
import Profile from "./Profile";
import  {setIsFetchingAC} from '../../redux/profile-reducer'




const mapStateToProps = (state) =>{
    return{
        isFetching: state.profilePage.isFetching
    }
}


const mapDispatchToProps = (dispatch) =>{
    return{
        setIsFetching: (isFetching) =>{
            dispatch(setIsFetchingAC(isFetching))
        }
    }
}






export default connect(mapStateToProps, mapDispatchToProps)(Profile)