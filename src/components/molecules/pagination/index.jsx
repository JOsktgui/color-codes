import React from 'react';
import ReactPaginate from 'react-paginate';
import './styles.less';

const Pagination = props => {
  return (
    <ReactPaginate
      previousLabel='Anterior'
      nextLabel='Siguiente'
      breakLabel='...'
      containerClassName='container-pagination'
      subContainerClassName={'pages pagination'}
      activeClassName='active'
      breakClassName='break-me'
      {...props}
    />
  );
};

export default Pagination;
