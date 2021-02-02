import { connect } from "react-redux"
import News from "./News"
import { sendNews, updateNewsBody} from './../../redux/news-reducer'




const mapStateToProps = (state) => {
    
    return {
        messages: state.newsPage.news
    }
}

// let mapDispatchToProps = (dispatch) =>{
//     return{
//             updateNewsBody: (body) =>{ 
//                 dispatch(updateNewsBody(body))
//             },
//             sendNews: () =>{
//                 dispatch(sendNews())
//             }

//         }
    
// }

const NewsContainer = connect(mapStateToProps,{  updateNewsBody,  sendNews })(News)


export default NewsContainer