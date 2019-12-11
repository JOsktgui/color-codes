import React from 'react';
import './styles.less';

const CardColor = ({ name, year, color, pantone_value }) => {
  return (
    <div className='container-card-color'>
      <div
        className='container-card-color__body'
        style={{ backgroundColor: color }}
      >
        <div>{ year }</div>
        <div className='center'>
          <span className='name'>{ name }</span>
          <span className='color'>
            { color }
          </span>
        </div>
        <div className='pantone'>{ pantone_value }</div>
      </div>
    </div>
  );
};

export default CardColor;
