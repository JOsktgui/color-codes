import React, { useState, useEffect } from 'react';
import { DualRing } from 'react-spinners-css';
import { CardColor, Pagination } from 'components';
import { map } from 'lodash';
import './styles.less';

const Home = () => {
  const [colors, setColors] = useState([]);
  const [isLoadingColors, setIsLoadingColors] = useState(false);

  async function getColors(page = 1) {
    setIsLoadingColors(true);
    try {
      const { data } = await window.fetchGlobalApi({ endpoint: 'colors', params: { page } });

      setColors(data);
    } catch (err) {
      console.log('err', err);
    } finally {
      setIsLoadingColors(false);
    }
  }

  useEffect(() => {
    getColors();
  }, []);

  return (
    <div className='container-home'>
      { isLoadingColors ?
        <div className='container-home__loader'>
          <DualRing color='#0092ff' />
        </div> :
        <div className='container-home__colors'>
          { map(colors.data, color => {
            return <CardColor key={color.id} {...color} />;
          }) }
        </div>
      }
      <Pagination
        pageCount={colors.total_pages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={colors.total_pages}
        onPageChange={page => getColors(page.selected + 1)}
      />

    </div>
  );
};

export default Home;
