import React from 'react';
import PropTypes from 'prop-types';
import City from './City';

const CitiesList = (props) => {
  const { weatherInfo } = props;
  return (
    <div className="row row-cols-2 row-cols-md-4 container p-0 justify-content-center">
      {weatherInfo.map((city) => (
        <City
          key={city.address}
          city={city.address}
          temp={city.days[0].temp}
          conditions={city.days[0].conditions}
        />
      ))}
    </div>
  );
};

CitiesList.propTypes = {
  weatherInfo: PropTypes.instanceOf(Array).isRequired,
};

export default CitiesList;
