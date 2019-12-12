import React from 'react';
import githubSvg from 'images/github.svg';
import './styles.less';

const Header = () => {
  return (
    <div className='container-header'>
      <h1>ColorCodes</h1>
      <div>
        <div
          className='container-header__github'
          onClick={() => window.open('https://github.com/JOsktgui/color-codes', '_blank')}
        >
          <img src={githubSvg} alt='github' />
          GitHub
        </div>
      </div>
    </div>
  );
};

export default Header;
