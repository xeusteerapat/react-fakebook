import React, { Component } from 'react';
import Navbar from './Navbar';
import RightBody from './RightBody';
import LeftBody from './LeftBody';
import Footer from './Footer';
import '../../styles/login/LogInPage.css';

export default class LogInPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="main-body">
          <LeftBody />
          <RightBody />
        </div>
        <Footer />
      </div>
    );
  }
}
