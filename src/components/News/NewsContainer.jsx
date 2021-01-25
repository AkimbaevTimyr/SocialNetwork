import { connect } from "react-redux"
import News from "./News"
import { sendNewsCreator, updateNewsBodyCreator } from './../../redux/news-reducer'




const mapStateToProps = (state) => {
    
    return {
        messages: state.newsPage.news
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
            updateNewsBody: (body) =>{ 
                dispatch(updateNewsBodyCreator(body))
            },
            sendNews: () =>{
                dispatch(sendNewsCreator())
            }

        }
    
}

const NewsContainer = connect(mapStateToProps,mapDispatchToProps)(News)


export default NewsContainer