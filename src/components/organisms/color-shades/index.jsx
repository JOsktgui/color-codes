import React, { useEffect, useState } from 'react';
import Values from 'values.js';
import { Skeleton } from 'antd';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { map, slice } from 'lodash';
import './styles.less';

const ColorBox = ({ hex }) => {
  const [colorCopied, setColorCopied] = useState(false);

  function copyColor() {
    setColorCopied(true);

    setTimeout(() => {
      setColorCopied(false);
    }, 500);
  }

  return (
    <div className='container-color-shades__color'>
      <CopyToClipboard text={`#${hex}`}>
        <div onClick={copyColor} style={{ backgroundColor: `#${hex}` }}>
          { colorCopied && '¡Copiado!' }
        </div>
      </CopyToClipboard>
      <span>#{hex}</span>
    </div>
  )
};

const ColorShades = ({ color, name, isLoadingColors }) => {
  const [colorsShades, setColorsShades] = useState([]);

  useEffect(() => {
    const shades = new Values(color);

    setColorsShades([
      { hex: slice(color, 1).join('') },
      ...slice(shades.shades(), 0, 9)
    ]);
  }, [color]);

  return (
    <Skeleton paragraph={false} loading={isLoadingColors}>
      <div className='container-color-shades'>
        <div className='container-color-shades__header'>
          <span style={{ backgroundColor: color }} />
          { name }
        </div>
        <div className='container-color-shades__body'>
          { map(colorsShades, item => {
            return (
              <ColorBox key={item.hex} {...item} />
            )
          }) }
        </div>
      </div>
    </Skeleton>
  );
};

export default ColorShades;
