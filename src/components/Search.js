import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CitiesList from './CitiesList';

const Search = (props) => {
  const [search, setSearchField] = useState('');
  const { weatherInfo } = props;
  const filtr = weatherInfo.filter((ct) => ct.address.toLowerCase().includes(search.toLowerCase()));
  const handleSearch = (e) => {
    setSearchField(e.target.value);
  };
  const home = () => (
    <div className="container px-0">
      <div className="container text-white stats d-flex justify-content-center gap-5 align-items-center">
        <span>UPDATES BY MAJOR CITIES</span>
        <input onChange={handleSearch} className="search-field rounded-2" type="text" placeholder="Type your city" />
      </div>
      <div className="cities-cards d-flex justify-content-center"><CitiesList weatherInfo={filtr} /></div>
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
