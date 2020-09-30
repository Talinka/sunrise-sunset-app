import React, { useState, createRef } from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';
import { Typeahead } from 'react-bootstrap-typeahead';

const Search = ({ data, onSearch }) => {
  const [selected, setSelected] = useState([]);
  const countryInput = createRef();
  const [selectedDate, setSelectedDate] = useState('');

  const isDataReady = data !== null;
  const countryNames = isDataReady ? Object.keys(data) : [];

  const searchHandler = (e) => {
    e.preventDefault();
    const country = countryInput.current.getInput().value;
    const date = selectedDate ? new Date(selectedDate) : null;
    onSearch(country, date);
  }

  const changeDateHandler = ({ target }) => {
    console.log("target", target.value);
    setSelectedDate(target.value);
  }

  return (
    <Form>
      <Row className="justify-content-between">
        <Col sm={5} xs={12}>
          <Form.Label>
            Date:
          </Form.Label>
          <Form.Control
            className="w-100"
            type="date"
            value={selectedDate}
            onChange={changeDateHandler}
          />
        </Col>
        <Col sm={5}>
          <Form.Label>Country:</Form.Label>
          <Typeahead
            id="country-typeahead"
            ref={countryInput}
            onChange={setSelected}
            selected={selected}
            options={countryNames}
          />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col sm="auto" xs={12}>
          <Button
            className="search-button"
            type="submit"
            onClick={searchHandler}
            disabled={!isDataReady}
          >
            Show
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Search;