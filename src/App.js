import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { Route} from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer'
import NewsContainer from './components/News/NewsContainer'
import MusicContainer from './components/Music/MusicContainer'

import UsersContainer from './components/Users/UsersContainer'
import Settings from './components/Settings/Settings'

import Notifications from './components/Settings/Notifications/Notifications'
import Account from './components/Settings/Account/Account'
import Main from './components/Settings/Main/Main'
import Privacy from './components/Settings/Privacy/Privacy'
import ProfileContainer from './components/Profile/ProfileContainer'

const App = (props) => {
    return (
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <div className='app-wrapper-content'>
                        <Route path='/dialogs'
                           render={ () => <DialogsContainer  /> }/>

                        <Route path='/profile/:userId?'
                           render={ () => <ProfileContainer  /> }/>
                    
                        <Route path='/news'
                            render={()=> <NewsContainer />}/>
                        <Route path='/music'
                            render={() => <MusicContainer />}/>
                        <Route path='/settings' 
                            render={() => <Settings />}/>
                        <Route path='/users'
                                render={ () => <UsersContainer />}/>
                        
                        <Route path='/notifications' render={ () => <Notifications />} />
                        <Route path='/settings/account' render={ () => <Account />} />
                        <Route path='/settings/main' render={ () => <Main />} />
                        <Route path='/settings/privacy' render={ () => <Privacy />}/>
                </div>
            </div>
        )
}

export default App;

//store={props.store}