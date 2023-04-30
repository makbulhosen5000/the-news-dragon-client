import React from 'react';
import Header from '../pages/shared/Header/Header';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import RightNav from '../pages/shared/RightNav/RightNav';

const NewsLayout = () => {
    return (
      <div>
        <Header>
          <Container>
            <Row>
              <Col lg={9}>
                <Outlet />
              </Col>
              <Col lg={3}>
                <RightNav/>
              </Col>
            </Row>
          </Container>
        </Header>
      </div>
    );
};

export default NewsLayout;