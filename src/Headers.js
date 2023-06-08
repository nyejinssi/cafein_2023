import { Link } from'react-router-dom';
import Auth from './Sign/Auth';
import Shop from './Shop/Shop';
import logo from './logo_3.png';
import {React, useState} from 'react';
import './Header.css';
import Col from 'react-bootstrap/Col';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

export default function Header() {
      return(
      <div className="header">
        <div className="logo">
                  {/*로고*/}
                  <img src={logo} alt="로고2" />
              </div>
              <Link to="/*"><span className="title">Cafe인</span></Link>
              <span className="nav1">
                  <ul>
                      <li>
                          <Link to="/Shop/Shop" style={{ fontSize: "2.2vw" }}> 
                              쇼핑
                          </Link>
                      </li>
                      <li>
                          <Link to="/Sign/SignIn">로그인</Link>
                      </li>
                      <li>
                          <Link to="/Sign/SignUp">회원가입</Link>
                      </li>
                  </ul>
              </span>
        </div>
    );
} 