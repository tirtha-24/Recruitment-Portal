/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import Session from 'react-session-api'
import {connect} from 'react-redux';
import styled from 'styled-components'
import {
  NavItem
} from 'reactstrap'

import { API } from '../../../config';
import{ Link } from 'react-router-dom'

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state={
       click:this.props.user.isClick
    }
    this.logout = this.logout.bind(this); 
    this.clickDropdown = this.clickDropdown.bind(this);
    localStorage.setItem('apply',"no");

    Session.set('expirationDate',localStorage.getItem('expirationDate'))
    Session.set('token',localStorage.getItem('token'))
    Session.set('name',localStorage.getItem('name'))
    Session.set('first_name',localStorage.getItem('first_name'))
    Session.set('middle_name',localStorage.getItem('middle_name'))
    Session.set('last_name',localStorage.getItem('last_name'))
    Session.set('email',localStorage.getItem('email'))
    Session.set('salutation',localStorage.getItem('salutation'))
    Session.set('contact',localStorage.getItem('contact'))
    Session.set('gender',localStorage.getItem('gender'))
    Session.set('email',localStorage.getItem('email'));
  }

  logout =() => {
    localStorage.removeItem('token')
    localStorage.removeItem('name')
    localStorage.removeItem('expirationDate')
    localStorage.removeItem('apply');
    Session.clear();
    this.props.user.isLogged=false
  }

  clickDropdown=()=>{
    //console.log(this.state.click);
    this.props.user.isClick=!this.props.user.isClick;
    this.state.click=!this.state.click;
   // console.log(this.state.click);
  }

  componentDidMount(){
    var dropdown = document.getElementsByClassName("dropdown-btn");
    var i;
    
    for (i = 0; i < dropdown.length; i++) {
      var clicked=this.state.click;
      const clickDropdown=this.clickDropdown
      if(clicked)
      dropdown[i].nextElementSibling.style.display="block";
      else
      dropdown[i].nextElementSibling.style.display="none";
    dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    console.log(clicked);
    if (clicked) {
    dropdownContent.style.display = "none";
    //this.state.click=false;
    clickDropdown();
    clicked=!clicked;
    } else {
    dropdownContent.style.display = "block";
    //this.state.click=true;
    clickDropdown();
    clicked=!clicked;
    }
    });
}
  }
  render() {
   
    const items = {...localStorage};
    console.log(items)
    return (
     <div>
       <Styled>
      <aside className="main-sidebar sidebar-light-primary elevation-4">
        {/* Brand Logo */}
        {/* <Link to='/' className="brand-link">
          <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
          <span className="brand-text font-weight-light">Admin</span>
        </Link> */}
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img src={`${API}/`+localStorage.getItem('photo')} className="img-circle elevation-2" alt="User Image" />
            </div>
            <div className="info">
              <span className="d-block">{Session.get('name')}</span>
            </div>
          </div>
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
              {/* Add icons to the links using the .nav-icon class
            with font-awesome or any other icon font library */}

              <NavItem className="nav-item">
                <Link to='/dashboard' className="nav-link">
                  <i className="nav-icon fas fa-list-alt" />
                  <p>
                   Application
                  </p>
                </Link>
              </NavItem>

              <NavItem className="nav-item ">
                <Link to='/'  onClick={() => this.logout()} className="nav-link">
                  <i className="nav-icon fas fa-sign-out-alt" />
                  <p>
                    Sign out
                  </p>
                </Link>
              </NavItem>
              <NavItem className="nav-item dropdown">
                <Link to='#' className="nav-link dropdown-btn">
                  <i className="nav-icon fas fa-list-alt " />
               Details
               <i class="fa fa-caret-down"></i>
               </Link>
              <div className="dropdown-container">
                <Link className="nav-link"  to="/personal"><span>Personal Details</span></Link>
                <Link className="nav-link"  to="/address"><span>Address</span></Link>
                <Link className="nav-link"  to="/academics"><span>Academics</span></Link>
                <Link className="nav-link"  to="/phd"><span>PHD Details</span></Link>
                <Link className="nav-link"  to="/pastemployment"><span>Past Employments</span></Link>
                <Link className="nav-link"  to="/preemployment"><span>Pre Employment</span></Link>
                <Link className="nav-link"  to="/adminexperience"><span>Administrative Experience</span></Link>
                <Link className="nav-link"  to="/consultancyprojects"><span>Consulting Projects</span></Link>
                <Link className="nav-link"  to="/outreachyprojects"><span>Outreachy Projects</span></Link>
                <Link className="nav-link"  to="/rdprojects"><span>Research and Development Projects</span></Link>
                {/* <Link className="nav-link"  to="/facultymobilityprog"><span>Faculty Mobility Programme</span></Link>
                <Link className="nav-link"  to="/innovproddev"><span>Innovative Product Development</span></Link> */}
                <Link className="nav-link"  to="/professionalbodies"><span>Professional Bodies</span></Link>
                <Link className="nav-link"  to="/publications"><span>Publications</span></Link>
                {/* <Link className="nav-link"  to="/qualityresearchpublications"><span>Quality and Research Publications</span></Link> */}
                <Link className="nav-link"  to="/patent"><span>Patent</span></Link>
                <Link className="nav-link"  to="/reference"><span>Reference</span></Link>
                <Link className="nav-link"  to="/specialawards"><span>Special Awards</span></Link>
                <Link className="nav-link"  to="/handwritten"><span>Handwritten Document</span></Link>
                <Link className="nav-link"  to="/otherinfo"><span>Other Information</span></Link>
                <Link className="nav-link"  to="/upload"><span>Upload</span></Link>
              </div>
              </NavItem>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
      </Styled>
    </div>
    )
  }
}

const Styled = styled.div`
a:hover, .dropdown-btn:hover {
  color: #f1f1f1;
}
main {
  margin-left: 200px; /* Same as the width of the sidenav */
  font-size: 20px; /* Increased text to enable scrolling */
  padding: 0px 10px;
}


.active {
  background-color: white;
  color: black;
}
.dropdown-container {
  display: none;
  background-color: #eee;
  padding-left: 8px;
}

/* Optional: Style the caret down icon */
.fa-caret-down {
  float: right;
  padding-right: 8px;
}`;

const mapStateProps = state => ({
  user: state.user
})

export default connect(mapStateProps)(Menu);
