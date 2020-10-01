import React, { useState, useRef } from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';
import { Typeahead } from 'react-bootstrap-typeahead';
import geoData from '../assets/countries';

const Search = ({ onSearch }) => {
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const submitted = useRef(false);

  const searchHandler = (e) => {
    e.preventDefault();
    submitted.current = true;
    const isSelectedValidDate = Date.parse(selectedDate);
    const isSelectedValidCountry = selectedCountries.length === 1;
    if (!isSelectedValidDate || !isSelectedValidCountry) {
      onSearch(false);
      return;
    }

    const country = selectedCountries[0];
    const date = new Date(selectedDate);
    onSearch(true, country.lat, country.lng, date);
  }

  const changeDateHandler = ({ target }) => {
    submitted.current = false;
    setSelectedDate(target.value);
  }

  const setSelectedCountryHandler = (data) => {
    submitted.current = false;
    setSelectedCountries(data);
  }

  return (
    <Form noValidate onSubmit={searchHandler}>
      <Form.Row className="justify-content-between">
        <Form.Group as={Col} sm={5} xs={12}>
          <Form.Label>
            Date:
          </Form.Label>
          <Form.Control
            className="w-100"
            type="date"
            value={selectedDate}
            onChange={changeDateHandler}
            isInvalid={submitted.current && !Date.parse(selectedDate)}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid date
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} sm={5}>
          <Form.Label>Country:</Form.Label>
          <Typeahead
            id="country-typeahead"
            onChange={setSelectedCountryHandler}
            selected={selectedCountries}
            labelKey={option => `${option.name}`}
            options={geoData}
            isInvalid={submitted.current && selectedCountries.length !== 1}
          />
        </Form.Group>
      </Form.Row>
      <Row>
        <Col sm="auto" xs={12}>
          <Button
            className="search-button"
            type="submit"
          >

            Show
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Search;