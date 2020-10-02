const ASTRONOMICAL_SERVICE = 'https://api.sunrise-sunset.org';

const getAstronomicalInfoUrl = (lat, lng, date = 'today') => (
  `${ASTRONOMICAL_SERVICE}/json?lat=${lat}&lng=${lng}&date=${date}`
);

export default async (lat, lng, date) => {
  const formattedDate = getFormattedDateString(date);
  try {
    const response = await fetch(getAstronomicalInfoUrl(lat, lng, formattedDate));
    const json = await response.json();
    const { results, status } = json;

    if (response.ok) {
      return {
        sunset: results.sunset,
        sunrise: results.sunrise,
      };
    } else {
      throw new Error(`Failed to get astronomical data. ${status}`);
    }
  } catch (error) {
    throw new Error(`Server problems. ${error.message}`);
  }
};

const getFormattedDateString = (date) => {
  const month = `${date.getMonth() + 1}`.padStart(2,0);
  const day = `${date.getDate()}`.padStart(2,0);

  return `${date.getFullYear()}-${month}-${day}`;
};