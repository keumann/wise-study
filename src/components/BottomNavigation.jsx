import React from 'react';
import './BottomNavigation.css';
import { Row, Nav, Col } from 'react-bootstrap';
import { MDBIcon } from 'mdbreact';
import { Link } from 'react-router-dom';

export default function BottomNavigation() {
  return (
    <Row>
      <Nav className="navigation">
        <Nav.Item>
          <Nav.Link>
            <Link to="/">
              <MDBIcon icon="home" size="2x" className="cyan-text pr-3" />
              <div>홈</div>
            </Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to="/record">
              <MDBIcon far icon="clock" size="2x" className="cyan-text pr-3" />
              <div>기록</div>
            </Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to="/chatting">
              <MDBIcon fab icon="rocketchat" size="2x" className="cyan-text pr-3"/>
              <div>채팅</div>
            </Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to="/etc">
              <MDBIcon icon="ellipsis-h" size="2x" className="cyan-text pr-3" />
              <div>명언</div>
            </Link>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Row>
  );
}