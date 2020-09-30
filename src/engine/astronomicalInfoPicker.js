import { getAstronomicalInfoUrl } from './utils';

export default async (lat, lng, dateTime) => {
  const date = dateTime.toLocaleDateString();
  const response = await fetch(getAstronomicalInfoUrl(lat, lng, date));

  if (response.ok) {
    const json = await response.json();
    const { results } = json;

    return {
      sunset: results.sunset,
      sunrise: results.sunrise,
    };
  } else {
    throw new Error(`Failed to get astronomical data`);
  }
};