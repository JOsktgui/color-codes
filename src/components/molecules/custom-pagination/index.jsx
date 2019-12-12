import React from 'react';
import { Pagination } from 'antd';
import './styles.less';

const CustomPagination = props => {
  return (
    <Pagination
      className='container-custom-pagination'
      {...props}
      itemRender={(_, type, originalElement) => {
        if (type === 'prev') {
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          return <a>Anterior</a>;
        }
        if (type === 'next') {
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          return <a>Siguiente</a>;
        }
        return originalElement;
      }}
    />
  );
};

export default CustomPagination;
