import React, { useState } from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';
import { Typeahead } from 'react-bootstrap-typeahead';
import geoData from '../assets/countries';

const Search = ({ onSearch }) => {
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [isValidDate, setValidDate] = useState(false);
  const [isValidCountry, setValidCountry] = useState(false);

  const searchHandler = (e) => {
    e.preventDefault();
    console.log("date", selectedDate, selectedDate !== null, Boolean(selectedDate), selectedCountries, selectedCountries.length === 1);
    setValidCountry(selectedCountries.length === 1);
    setValidDate(Boolean(selectedDate));
    if (!isValidDate || !isValidCountry) {
      console.log('validation error');
      return;
    }
    const country = selectedCountries[0];
    const date = new Date(selectedDate);
    onSearch(country.lat, country.lng, date);
  }

  const changeDateHandler = ({ target }) => {
    setSelectedDate(target.value);
  }

  const setSelectedCountryHandler = (data) => {
    setSelectedCountries(data);
  }

  console.log("data country", isValidDate, isValidCountry);
  return (
    <Form noValidate onSubmit={searchHandler}>
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
            isValid={isValidDate}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid date
          </Form.Control.Feedback>
        </Col>
        <Col sm={5}>
          <Form.Label>Country:</Form.Label>
          <Typeahead
            id="country-typeahead"
            onChange={setSelectedCountryHandler}
            selected={selectedCountries}
            labelKey={option => `${option.name}`}
            options={geoData}
            isValid={isValidCountry}
          />
          <Form.Control.Feedback type="invalid">
            Please choose a country
          </Form.Control.Feedback>
        </Col>
      </Row>
      <Row className="justify-content-center">
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