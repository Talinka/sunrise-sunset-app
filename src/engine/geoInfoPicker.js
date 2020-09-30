export default async () => {
  const data = await fetch('countries.csv');
  const rawData = await data.text();

  // dataset format: country,latitude,longitude,name

  const dataSet = rawData
    .split('\n')
    .map((info) => info.split(','))
    .reduce((acc, info) => ({
      ...acc,
      [info[3]]: { lat: info[1], lng: info[2],}
    }), {});

  return dataSet;
};
