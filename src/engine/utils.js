const ASTRONOMICAL_SERVICE = 'https://api.sunrise-sunset.org';

export const getAstronomicalInfoUrl = (lat, lng, date = 'today') => (
  `${ASTRONOMICAL_SERVICE}/json?lat=${lat}&lng=${lng}&date=${date}`
);