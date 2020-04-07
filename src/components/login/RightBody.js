import React, { Component } from 'react';
import { Row, Col } from 'antd';
import '../../styles/login/RightBody.css';

export default class RightBody extends Component {
  render() {
    return (
      <Col className="RightBody">
        <Row className="rowInLeft">สร้างบัญชีใหม่</Row>

        <Row className="rowInLeft">ง่ายและเร็ว</Row>

        <Row className="rowInLeft">
          <Col>
            <Row className="firstInput inputRight one">
              <input type="text" placeholder="ชื่อ" />
            </Row>
            <Row className="firstInput inputRight">
              <input type="text" placeholder="นามสกุล" />
            </Row>
          </Col>
          <Col span={24} className="inputRight">
            <input type="text" placeholder="หมายเลขโทรศัพท์มือถือหรืออีเมล์" />
          </Col>
          <Col span={24} className="inputRight">
            <input type="text" placeholder="รหัสผ่านใหม่" />
          </Col>
          <Col span={24} className="inputRight">
            <Row className="birthDay">วันเกิด</Row>
            <Row>
              <select>
                <option selected value="วัน">
                  วัน
                </option>
              </select>
              <select>
                <option selected value="วัน">
                  วัน
                </option>
              </select>
              <select>
                <option selected value="วัน">
                  วัน
                </option>
              </select>
              <span className="questionIcon">
                <i class="img sp_UQETc8Y6QpO_1_5x sx_bb491c"></i>
              </span>
            </Row>
          </Col>
          <Col span={24} className="inputRight">
            <Row className="gender">เพศ</Row>
            <Row>
              <span>
                {' '}
                <input type="radio"></input>
                <label>หญิง</label>
              </span>
              <span>
                {' '}
                <input type="radio"></input>
                <label>ชาย</label>
              </span>
              <span>
                {' '}
                <input type="radio"></input>
                <label>กำหนดเอง</label>
              </span>
              <span>
                {' '}
                <i class="img sp_UQETc8Y6QpO_1_5x sx_bb491c"></i>{' '}
              </span>
            </Row>
          </Col>
          <p class="shortText">
            เมื่อคลิก สมัคร แสดงว่าคุณยินยอมตาม
            <a href="/" target="_blank" rel="nofollow">
              ข้อกำหนด
            </a>{' '}
            <a href="/" id="privacy-link" target="_blank" rel="nofollow">
              นโยบายข้อมูล
            </a>{' '}
            และ
            <a href="/" id="cookie-use-link" target="_blank" rel="nofollow">
              นโยบายคุกกี้
            </a>
            ของเราแล้ว คุณอาจได้รับการแจ้งเตือนทาง SMS
            จากเราและสามารถเลือกไม่รับได้ทุกเมื่อ
          </p>
          <Col span={24} className="inputRight buttonBlock">
            <button className="signUp">สมัคร</button>
          </Col>
          <Col span={24} className="lastText">
            <a href="/">สร้างเพจ </a>
            สำหรับบุคคลมีชื่อเสียง วงดนตรี หรือธุรกิจ
          </Col>
        </Row>
      </Col>
    );
  }
}
