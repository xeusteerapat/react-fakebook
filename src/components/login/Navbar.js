import React, { Component } from 'react';
import { Row, Col } from 'antd';
import '../../styles/login/Navbar.css';

export default class Navbar extends Component {
  render() {
    return (
      <Row className="navbar">
        <Col className="top">
          <div>
            <a href="/login">
              <i className="fb_logo img sp_Vgu5hh_52BR sx_445ecd"></i>
            </a>
          </div>
          <div>
            <table>
              <tr>
                <td>Email or phone</td>
                <td>Password</td>
              </tr>
              <tr>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <button>Log In</button>
                </td>
              </tr>
              <tr className="forget-account">
                <td></td>
                <td>Forgotten account?</td>
              </tr>
            </table>
          </div>
        </Col>
      </Row>
    );
  }
}
