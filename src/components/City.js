import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { selectCity } from '../redux/weather';

const City = (props) => {
  const navigate = useNavigate();
  const { city, temp, conditions } = props;
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(selectCity(city));
    navigate('/details');
  };
  return (
    <div className="text-white details-card px-0">
      <div className="city p-0">
        <div className="card rounded-0">
          <div className="card-body">
            <div className="text-end">
              <BsArrowRightCircle onClick={handleClick} />
            </div>
            <div className="text-wrap text-end">
              <h5 className="card-title">{city}</h5>
              <p className="card-text">
                {temp}
                °C
                <br />
                {conditions}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

City.propTypes = {
  city: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  conditions: PropTypes.string.isRequired,
};

export default City;
