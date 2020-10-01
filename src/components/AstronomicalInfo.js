import React from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import sunrise from '../assets/icons/sunrise.svg';
import sunset from '../assets/icons/sunset.svg';

const AstronomicalInfo = ({ isLoading, sunsetTime, sunriseTime }) => {

  if (isLoading) {
    return (
      <Row>
        <Col xs="auto"><Spinner animation="border" /></Col>
      </Row>
    );
  };

  return (
    <Container className="info-container">
      <Row>
        <Col xs={4} md={3} lg={2}>
          <img src={sunrise} alt="sunrise" />
        </Col>
        <Col>
          <span className="info">Sunrise is at {sunriseTime}</span>
        </Col>
      </Row>
      <Row>
        <Col xs={4} md={3} lg={2}>
          <img src={sunset} alt="sunset" />
        </Col>
        <Col>
          <span className="info">Sunset is at {sunsetTime}</span>
        </Col>

      </Row>
    </Container>
  );
};

export default AstronomicalInfo;