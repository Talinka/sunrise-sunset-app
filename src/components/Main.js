import React, { useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap';
import Search from './Search';
import AstronomicalInfo from './AstronomicalInfo';
import getAstromicalInfo from '../engine/astronomicalInfoPicker';
import loadGeoData from '../engine/geoInfoPicker';


const Main = () => {
  const [astronomicalInfo, setAstronomicalInfo] = useState();
  const [geoData, setGeoData] = useState(null);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchGeoData = async () => {
      const data = await loadGeoData();
      setGeoData(data);
    }
    fetchGeoData();
  }, []);

  const searchHandler = async (country, date) => {
    const countryData = geoData[country];
    if (!countryData) {
      setError(`Can't find the country {country}`);
    }
    try {
      const result = await getAstromicalInfo(countryData.lat, countryData.lng, date);
      setAstronomicalInfo(result);
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <Search data={geoData} onSearch={searchHandler} />
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