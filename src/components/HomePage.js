import React from 'react';
import { HiMicrophone } from 'react-icons/hi';
import { FiSettings } from 'react-icons/fi';
import { constructDate } from '../services/connectAPI';

const HomePage = () => {
  const getDay = () => {
    const d = new Date(constructDate());
    return d.toString().split(' ')[0];
  };
  return (
    <div className="">
      <div className="container homepage-nav d-flex text-white justify-content-between align-items-center">
        <p className="fs-4">Weather Scrapper</p>
        <p className="fs-4">{getDay()}</p>
        <div className="d-flex align-items-center gap-2">
          <HiMicrophone className="fs-5" />
          <FiSettings className="fs-5" />
        </div>
      </div>
      <div className="container homepage-top d-flex px-0 justify-content-between">
        <div className="homepage-top-left w-50">
          <div className="overlay" />
        </div>
        <div className="homepage-top-right w-50">
          <div className="overlay-right">
            <div className="text-white text-end pt-5 pe-3">
              GET THE REAL-TIME
              <br />
              {' '}
              WEATHER UPDATES
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
