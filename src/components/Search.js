import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Search = () => {
  return (
    <Container>
      <Row className="justify-content-between">
        <Col sm={5} xs={12}>
          <input className="w-100" type="date" />
        </Col>
        <Col sm={5}>
          <input className="w-100" type="text" />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col sm="auto" xs={12}>
          <Button className="search-button" type="button">Show</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;