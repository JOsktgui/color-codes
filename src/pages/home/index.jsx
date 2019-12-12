import React, { useState, useEffect } from 'react';
import { DualRing } from 'react-spinners-css';
import { Spin, message, Icon, Tooltip } from 'antd';
import { CardColor, CustomPagination, ColorShades } from 'components';
import { map, isEmpty } from 'lodash';
import './styles.less';

const Home = () => {
  const [colors, setColors] = useState({});
  const [isLoadingColors, setIsLoadingColors] = useState(false);

  async function getColors(page = 1) {
    setIsLoadingColors(true);
    try {
      const { data } = await window.fetchGlobalApi({ endpoint: 'colors', params: { page } });

      setColors(data);
    } catch (err) {
      setColors({});
      message.error('Sucedio un error al obtener los colores, intente más tarde.')
    } finally {
      setIsLoadingColors(false);
    }
  }

  useEffect(() => {
    getColors();
  }, []);

  const infoOptional = (
    <Tooltip title='Se agregaron las sombras opcionalmente de los colores que se muestran en la parte superior.'>
      <Icon type='info-circle' theme='filled' />
    </Tooltip>
  );

  return (
    <div className='container-home'>
      <Spin
        spinning={isLoadingColors}
        indicator={
          <div className='container-home__loader'>
            <DualRing />
            Cargando...
          </div>
        }
      >
        <div className='container-home__colors'>
          { map(colors.data, color => {
            return <CardColor key={color.id} {...color} />;
          }) }
        </div>
      </Spin>

      { !isEmpty(colors) &&
        <CustomPagination
          total={colors.total}
          pageSizeOptions={['6', '12', '18']}
          defaultCurrent={1}
          pageSize={colors.per_page}
          onChange={page => getColors(page)}
        />
      }

      <div className='container-home__shades'>
        <div className='container-home__shades-title'>
          Sombras{' '}
          <span>(Opcional { infoOptional })</span>
        </div>
        <div>
          { map(colors.data, color => {
            return (
              <ColorShades
                isLoadingColors={isLoadingColors}
                key={color.id}
                {...color}
              />
            );
          }) }
        </div>
      </div>
    </div>
  );
};

export default Home;
