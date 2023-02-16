import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import HomePage from './HomePage';
import CitiesList from './CitiesList';

const Search = (props) => {
  const [searchField, setSearchField] = useState('');
  const { weatherInfo } = props;
  // eslint-disable-next-line
  const filteredWeatherInfo = weatherInfo.filter((city) => city.address.toLowerCase().includes(searchField.toLowerCase()));
  const handleSearch = (e) => {
    setSearchField(e.target.value);
  };
  //       {/*<div><HomePage /></div>*/}
  const home = () => (
    <div className="container px-0">
      <div className="container text-white stats d-flex justify-content-center gap-5 align-items-center">
        <span>UPDATES BY MAJOR CITIES</span>
        <input onChange={handleSearch} className="search-field rounded-2" type="text" placeholder="Type your city" />
      </div>
      <div className="cities-cards d-flex justify-content-center"><CitiesList weatherInfo={filteredWeatherInfo} /></div>
    </div>
  );

  return (
    <div>{home()}</div>
  );
};

Search.propTypes = {
  weatherInfo: PropTypes.instanceOf(Array).isRequired,
};

export default Search;
