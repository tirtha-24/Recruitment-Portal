/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { sessionService } from 'redux-react-session';

import Job from './pages/Job';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import NoMatch from './pages/NoMatch';
import Home from './pages/home';
import DetailJob from './pages/detailJob';


import Personal from './pages/profile/view/Personal';
import Departments from './pages/profile/content/contentDept';
import Address from './pages/profile/view/Address';
import Academics from './pages/profile/view/Academics';
import Phd from './pages/profile/view/Phd';
import Pastemployment from './pages/profile/view/Pastemployment';
import Preemployment from './pages/profile/view/Preemployment';
import Adminexperience from './pages/profile/view/Adminexperience';
import Consultancyprojects from './pages/profile/view/Consultancyprojects';
import Outreachyprojects from './pages/profile/view/Outreachyprojects';
import Rdprojects from './pages/profile/view/Rdprojects';
import Facultymobilityprog from './pages/profile/view/Facultymobilityprog';
import Innovproddev from './pages/profile/view/Innovproddev';
import Professionalbodies from './pages/profile/view/Professionalbodies';
import Publications from './pages/profile/view/Publications';
import Qualityresearchpublications from './pages/profile/view/Qualityresearchpublications';
import Patent from './pages/profile/view/Patent';
import Reference from './pages/profile/view/Reference';
import Specialawards from './pages/profile/view/Specialawards';
import Handwritten from './pages/profile/view/Handwritten';
import Otherinfo from './pages/profile/view/Otherinfo';
import Upload from './pages/profile/view/Upload';
import Application from './pages/profile/view/Application';

import {Provider} from 'react-redux';
import store from './redux/store';

const options = { refreshOnCheckAuth: true, redirectPath: '/home', driver: 'COOKIES' };
const validateSession = (session) => {
    // check if your session is still valid
    return true;
}

sessionService.initSessionService(store, options, validateSession).then(() => console.log('Redux React Session is ready and a session was refreshed from your storage'))
    .catch(() => console.log('Redux React Session is ready and there is no session in your storage'));

export default class App extends Component {
  // constructor(){
  //   super();
  //   this.state= {
  //     isLogged: false,
  //     user: {}
  //   }

  //   this.handleLogged = this.handleLogged.bind(this);
  // }
  
  // handleLogged(data){ 
  //   this.setState({
  //     isLogged: true,
  //     user: data
  //   })
  // }


  
  render() {
    return (
      <React.Fragment>
          <Router>
            <Provider store={store}>
              <Switch>
                <Route path ='/' component = {Home} exact />
                <Route path = '/job' component = {Job} exact />
                <Route path = '/signin' component = {SignIn} exact/>
                <Route path ='/signup' component={SignUp} exact/>

                <Route path = '/detail/:id_job' component={DetailJob} />

                <Route path = '/dashboard' component = {Application} exact/>
              

                <Route path = '/personal' component = {Personal} exact/>
                <Route path = '/application' component = {Application} exact/>
                <Route path = '/departments' component = {Departments} exact/>
                <Route path = '/address' component = {Address} exact/>
                <Route path = '/academics' component = {Academics} exact/>
                <Route path = '/phd' component = {Phd} exact/>
                <Route path = '/pastemployment' component = {Pastemployment} exact/>
                <Route path = '/preemployment' component = {Preemployment} exact/>
                <Route path = '/adminexperience' component = {Adminexperience} exact/>
                <Route path = '/consultancyprojects' component = {Consultancyprojects} exact/>
                <Route path = '/outreachyprojects' component = {Outreachyprojects} exact/>
                <Route path = '/rdprojects' component = {Rdprojects} exact/>
                <Route path = '/facultymobilityprog' component = {Facultymobilityprog} exact/>
                <Route path = '/innovproddev' component = {Innovproddev} exact/>
                <Route path = '/professionalbodies' component = {Professionalbodies} exact/>
                <Route path = '/publications' component = {Publications} exact/>
                <Route path = '/qualityresearchpublications' component = {Qualityresearchpublications} exact/>
                <Route path = '/patent' component = {Patent} exact/>
                <Route path = '/reference' component = {Reference} exact/>
                <Route path = '/specialawards' component = {Specialawards} exact/>
                <Route path = '/handwritten' component = {Handwritten} exact/>
                <Route path = '/otherinfo' component = {Otherinfo} exact/>
                <Route path = '/upload' component = {Upload} exact/>

                <Route component = { NoMatch } />
              </Switch>
              <br/>
            </Provider>
          </Router>
      </React.Fragment>
    )
  }
}
