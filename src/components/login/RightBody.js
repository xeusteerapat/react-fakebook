import React, { Component } from 'react';
import { Row, Col } from 'antd';
import '../../styles/login/RightBody.css';

export default class RightBody extends Component {
  render() {
    return (
      <Col className="RightBody">
        <Row className="rowInLeft">Create a new account</Row>

        <Row className="rowInLeft">It's quick and easy.</Row>

        <Row className="rowInLeft">
          <Col>
            <Row className="firstInput inputRight one">
              <input type="text" placeholder="Firstname" />
            </Row>
            <Row className="firstInput inputRight">
              <input type="text" placeholder="Lastname" />
            </Row>
          </Col>
          <Col span={24} className="inputRight">
            <input type="text" placeholder="Mobile number or email address" />
          </Col>
          <Col span={24} className="inputRight">
            <input type="text" placeholder="New password" />
          </Col>
          <Col span={24} className="inputRight">
            <Row className="birthDay">Birthday</Row>
            <Row>
              <select>
                <option selected value="date">
                  8
                </option>
              </select>
              <select>
                <option selected value="date">
                  April
                </option>
              </select>
              <select>
                <option selected value="date">
                  1995
                </option>
              </select>
              <span className="questionIcon">
                <i className="img sp_UQETc8Y6QpO_1_5x sx_bb491c"></i>
              </span>
            </Row>
          </Col>
          <Col span={24} className="inputRight">
            <Row className="gender">Gender</Row>
            <Row>
              <span>
                {' '}
                <input type="radio"></input>
                <label>Female</label>
              </span>
              <span>
                {' '}
                <input type="radio"></input>
                <label>Male</label>
              </span>
              <span>
                {' '}
                <input type="radio"></input>
                <label>Custom</label>
              </span>
              <span>
                {' '}
                <i className="img sp_UQETc8Y6QpO_1_5x sx_bb491c"></i>{' '}
              </span>
            </Row>
          </Col>
          <p className="shortText">
            By clicking Sign Up, you agree to our
            <a href="/" target="_blank" rel="nofollow">
              Term,
            </a>{' '}
            <a href="/" id="privacy-link" target="_blank" rel="nofollow">
              Data Policy
            </a>{' '}
            and
            <a href="/" id="cookie-use-link" target="_blank" rel="nofollow">
              Cookie Policy
            </a>
            You may receive SMS notifications from us and can opt out at any
            time.
          </p>
          <Col span={24} className="inputRight buttonBlock">
            <button className="signUp">Sign Up</button>
          </Col>
          <Col span={24} className="lastText">
            <a href="/">Create a Page </a>
            for a celebrity, band or business.
          </Col>
        </Row>
      </Col>
    );
  }
}
