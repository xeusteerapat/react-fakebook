import React, { Component } from 'react';
import { Row, Col } from 'antd';
import '../../styles/login/LeftBody.css';

export default class LeftBody extends Component {
  render() {
    return (
      <Col className="left-body">
        <Row className="row-in-left">Recent logins</Row>
        <Row className="row-in-left">Click your picture or add an account.</Row>
        <Row className="row-in-left">
          <img
            src="https://scontent.fbkk22-2.fna.fbcdn.net/v/t1.0-1/26991875_10156086856453156_5001396601173252145_n.jpg?_nc_cat=107&_nc_sid=dbb9e7&_nc_ohc=QQI-0VAWXK0AX8J46kd&_nc_ht=scontent.fbkk22-2.fna&oh=1218b8caa04403748414090df34a3138&oe=5EB1A653"
            alt=""
          />
          <div className="text">Xeus Teerapat</div>
          <i className="img sp_UQETc8Y6QpO_2x sx_8d1a27">d</i>
          <div className="text">Xeus Teerapat</div>
        </Row>
      </Col>
    );
  }
}
