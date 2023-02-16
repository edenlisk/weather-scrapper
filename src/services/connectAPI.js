const BASE_LINK = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline';
const ACCESS_KEY = 'AAAVVSRM4JR5WA7KMTFA3T44E';
export const constructDate = () => {
  const someDate = new Date();
  const result = new Date(someDate.setDate(someDate.getDate()));
  const day = String(result.getDate()).padStart(2, '0');
  const month = String(result.getMonth() + 1).padStart(2, '0');
  const year = result.getFullYear();
  return `${year}-${month}-${day}`;
};

const fetchSingleCity = async (cityName) => {
  const request = await fetch(`${BASE_LINK}/${cityName}/${constructDate()}/?unitGroup=metric&include=days&key=${ACCESS_KEY}&contentType=json`);
  const data = await request.json();
  return data;
};

export default fetchSingleCity;
