import React, { useState } from 'react';
import { Alert, Row, Col } from 'react-bootstrap';
import Search from './Search';
import AstronomicalInfo from './AstronomicalInfo';
import getAstromicalInfo from '../engine/astronomicalInfoPicker';

const Main = () => {
  const [astronomicalInfo, setAstronomicalInfo] = useState();
  const [error, setError] = useState();
  const [isLoading, setLoading] = useState(false);

  const searchHandler = async (isValid, lat, lng, date) => {
    if (!isValid) {
      setError('Incorrect input data');
      return;
    }

    try {
      setLoading(true);
      const result = await getAstromicalInfo(lat, lng, date);
      setAstronomicalInfo(result);
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Row>
      <Col xs={11} lg={8}>
        <Search onSearch={searchHandler} />
        {error && (
          <Alert variant="danger">
            <Alert.Heading>Something went wrong</Alert.Heading>
            <p>{error}</p>
          </Alert>)}
        {astronomicalInfo && !error &&
          <AstronomicalInfo
            isLoading={isLoading}
            sunriseTime={astronomicalInfo.sunrise}
            sunsetTime={astronomicalInfo.sunset}
          />}
      </Col>
    </Row>
  );
};

export default Main;