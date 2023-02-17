import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useSelector } from 'react-redux';

const CityDetail = () => {
  const navigate = useNavigate();
  const ct = useSelector((state) => state.selectedCity);
  const [selectedCity] = useSelector((state) => state.weather.filter((it) => it.address === ct));
  const renderSelectedCityInfo = () => {
    if (selectedCity) {
      return (
        <ul className="list-group px-0 container">
          <li className="list-group-item text-white d-flex justify-content-between">
            <span>City Name:</span>
            <span>{selectedCity.address}</span>
          </li>
          <li className="list-group-item text-white d-flex justify-content-between">
            <span>Timezone:</span>
            <span>{selectedCity.timezone}</span>
          </li>
          <li className="list-group-item text-white d-flex justify-content-between">
            <span>Address:</span>
            <span>{selectedCity.resolvedAddress}</span>
          </li>
          <li className="list-group-item text-white d-flex justify-content-between">
            <span>Cloud Cover:</span>
            <span>{selectedCity.days[0].cloudcover}</span>
          </li>
          <li className="list-group-item text-white d-flex justify-content-between">
            <span>Wind Speed:</span>
            <span>
              {selectedCity.days[0].windspeed}
              {' '}
              kmph
            </span>
          </li>
          <li className="list-group-item text-white d-flex justify-content-between">
            <span>Temperature:</span>
            <span>
              {selectedCity.days[0].temp}
              °C
              {' '}
            </span>
          </li>
          <li className="list-group-item text-white d-flex justify-content-between">
            <span>Min Temperature:</span>
            <span>
              {selectedCity.days[0].tempmin}
              °C
            </span>
          </li>
          <li className="list-group-item text-white d-flex justify-content-between">
            <span>Max Temperature:</span>
            <span>
              {selectedCity.days[0].tempmax}
              °C
            </span>
          </li>
          <li className="list-group-item text-white d-flex justify-content-between">
            <span>Weather Description:</span>
            <span>{selectedCity.days[0].description}</span>
          </li>
        </ul>
      );
    }
    return (
      <ul className="list-group">
        <li className="list-group-item">No Selected City</li>
      </ul>
    );
  };
  const handleClick = () => {
    navigate('/');
  };

  const getDay = () => {
    const d = new Date(selectedCity.days[0].datetime);
    return d.toString().split(' ')[0];
  };

  return (
    <div className="container d-flex justify-content-center px-0">
      <div className="container text-white px-0">
        <div className="detail-top d-flex px-2 justify-content-between align-items-center rounded-1">
          <div>
            <IoMdArrowRoundBack onClick={handleClick} />
          </div>
          <div>
            <span className="fs-3">{selectedCity ? getDay() : ''}</span>
          </div>
          <div className="text-center">
            <span>{selectedCity ? selectedCity.address : null}</span>
            <br />
            <span>{selectedCity ? `${selectedCity.days[0].temp}°C` : null}</span>
          </div>
        </div>
        <div className="">
          <div className="text-white">{renderSelectedCityInfo()}</div>
        </div>
      </div>
    </div>
  );
};

export default CityDetail;
