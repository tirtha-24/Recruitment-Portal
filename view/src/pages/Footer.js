/* eslint-disable jsx-a11y/anchor-is-valid */

import React, {Component} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


class Footer extends Component {
  render() {
  return (
    <Styled  className="footerNav">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            {/* Column 1 */}
            <div className="col-md-3 col-sm-6">
              <h4>About Recruithub</h4>
              <ul className="list-unstyled">
                <li>
                <Link to='#'>The Company</Link>
                </li>
                <li>
                <Link to='#'>In the News</Link>
                </li>
                <li>
                <Link to='#'>Work with Us</Link>
                </li>
                <li>
                <Link to='#'>Contact Us</Link>
                </li>
              </ul>
            </div>
            {/* Column 2 */}
            <div className="col-md-3 col-sm-6">
              <h4>JobSeekers</h4>
              <ul className="list-unstyled">
                <li>
                  <Link to='#'>Terms of Use</Link>
                </li>
                <li>
                  <Link to='#'>Privacy Policy</Link>
                </li>
                <li>
                  <Link to='#'>Safe Job Search Guide</Link>
                </li>
                <li>
                  <Link to='#'>Career Resources</Link>
                </li>
                <li>
                  <Link to='#'>Testimonials</Link>
                </li>
                <li>
                  <Link to='#'>Help</Link>
                </li>
              </ul>
            </div>
            {/* Column 3 */}
            {/* <div className="col-md-3 col-sm-6">
              <h4>Employers</h4>
              <ul className="list-unstyled">
                <li>
                  <Link to='#'>Post a Job Ad</Link>
                </li>
                <li>
                  <Link to='#'>Search for Resumes</Link>
                </li>
                <li>
                  <Link to='#'>Recruitment Products</Link>
                </li>
                <li>
                  <Link to='#'>Terms of Use</Link>
                </li>
              </ul>
            </div> */}
            {/* Column 4 */}
            <div className="col-md-3 col-sm-6">
              <h4>Mobile & Social Media</h4>
              <ul className="list-unstyled">
               <li>
                  <Link to='#'>Twitter</Link>
                </li>
                <li>
                  <Link to='#'>Facebook</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p className="text-xs-center">
              &copy;{new Date().getFullYear()} Recruithub - All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
    </Styled>
  );
}
}
export default Footer;

const Styled = styled.footer`
  .footer-middle {
    background-color: white;
    padding-top: 3rem;
  }
  .footerNav {
    margin-left: 0px;
  }
  .footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
  }
  ul li a {
    color: #697882;
  }
  ul li a:hover {
    color: #428bca;
  }
`;