import React from 'react';
import Header from '../pages/shared/Header/Header';
import Footer from '../pages/shared/Footer/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import LeftNav from '../pages/shared/LeftNav/LeftNav';
import RightNav from '../pages/shared/RightNav/RightNav';

const Main = () => {
    return (
      <div>
        <Header />
        <Container>
          <Row>
            <Col lg={3}>
                <LeftNav/>
            </Col>
            <Col lg={6}>
                <h1>Coming Soon</h1>
            </Col>
            <Col lg={3}>
                <RightNav/>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
};

export default Main;