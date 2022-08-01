import  React, {Suspense} from 'react';
import {Route, Routes, HashRouter as Router} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import FindUsersContainer from './components/FindUsers/FindUsersContainer';
import Home from './components/Home/Home';
import { connect } from 'react-redux';
import { initializeApp } from './state/app-reducer';
import './App.css'
import Preloader from './components/Preloader/Preloader';
import './components/Preloader/Preloader.sass'
import { Provider } from 'react-redux';
import store from './state/reduxStore';
import { RouterWrap }from './components/RouterWrap/RouterWrap';

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const LogIn = React.lazy(() => import('./components/LogIn/LogIn'));

 class App extends React.Component {

   componentDidMount() {
       
       this.props.initializeApp()      
    }

render() {

    return (

            <>
                <div className='app-wrap'>

                    { 
                        this.props.initialized ?

                        <>
                           
                            <Suspense fallback={ <div className='wrapPreloader'> <Preloader/> </div>  }>  
                                                                                                
                                    <Routes> 
                                            <Route path="/" element={ <Home/> }/>

                                            <Route
                                                path="/profile" element={ <><RouterWrap /><ProfileContainer/></> }
                                            /> 
                                       
                                            <Route
                                                path="/profile/:userId" exact element={ <><RouterWrap/><ProfileContainer/></>}
                                            />

                                            <Route
                                                path="/find-users" exact element={<><RouterWrap/> <FindUsersContainer /></>  }
                                            />
                                
                                            <Route
                                                path="/dialogs" exact element={<><RouterWrap/> <DialogsContainer/></>}
                                            />
                                            
                                            <Route
                                                path="/log-in" element={ <LogIn/> }
                                            
                                            />
                                    </Routes>

                            </Suspense> 
                            
                        </>

                        : <div className='wrapPreloader'> <Preloader/> </div> 

                        }  

                </div>   
                                        
            </>  
        );

    }
}

let mapStateToProps = (state) => ({

    initialized: state.app.initialized
})

let AppContainer = connect(mapStateToProps, {initializeApp}) (App) 

const AppWrap = (props) => {
    return (
    <Router><Provider store={store}>  <AppContainer/></Provider> </Router>
    )
}

export default AppWrap


 