import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import Search from './Search';
import AstronomicalInfo from './AstronomicalInfo';
import getAstromicalInfo from '../engine/astronomicalInfoPicker';

const Main = () => {
  const [astronomicalInfo, setAstronomicalInfo] = useState();
  const [error, setError] = useState();

  const searchHandler = async (lat, lng, date) => {
    try {
      const result = await getAstromicalInfo(lat, lng, date);
      setAstronomicalInfo(result);
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <Search onSearch={searchHandler} />
      {error && (
        <Alert variant="danger">
          <Alert.Heading>Something wrong happens</Alert.Heading>
          <p>{error}</p>
        </Alert>)}
      {astronomicalInfo && !error && <AstronomicalInfo
        sunriseTime={astronomicalInfo.sunrise}
        sunsetTime={astronomicalInfo.sunset}
      />}
    </>
  );
};

export default Main;