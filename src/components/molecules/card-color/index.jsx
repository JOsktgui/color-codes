import React, { useState } from 'react';
import classNames from 'classnames';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './styles.less';

const CardColor = ({ name, year, color, pantone_value }) => {
  const [colorCopied, setColorCopied] = useState(false);

  function copyColor() {
    setColorCopied(true);

    setTimeout(() => {
      setColorCopied(false);
    }, 500);
  }

  return (
    <div className='container-card-color'>
      <CopyToClipboard text={color}>
        <div
          className={classNames('container-card-color__body', { colorCopied })}
          onClick={copyColor}
          style={{ backgroundColor: color }}
        >
          <div>{ year }</div>
          <div className='center'>
            { colorCopied ?
              <span className='color'>¡Copiado!</span> :
              <>
                <span className='name'>{ name }</span>
                <span className='color'>
                  { color }
                </span>
              </>
            }
          </div>
          <div className='pantone'>{ pantone_value }</div>
        </div>
      </CopyToClipboard>
    </div>
  );
};

export default CardColor;
