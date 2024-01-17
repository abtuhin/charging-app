import React from 'react';
import Pagination from '@/styled/Pagination';

const PaginationComponent = ({ totalPages, currentPage, onPageChange }) => {
  const renderPageButtons = () => {
    const buttons = [];
  
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <Pagination.PageButton data-active={i === currentPage ? 'true' : 'false'} key={i} active={i === currentPage ? "true": "false"} onClick={() => onPageChange(i)}>
          {i}
        </Pagination.PageButton>
      );
    }
  
    return buttons;
  };

  return (
    <Pagination.PaginationContainer>
      <Pagination.ArrowButton data-testid="pagination-prev-button" disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>
        &lt;
      </Pagination.ArrowButton>
      {renderPageButtons()}
      <Pagination.ArrowButton data-testid="pagination-next-button" disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)}>
        &gt;
      </Pagination.ArrowButton>
    </Pagination.PaginationContainer>
  );
};

export default PaginationComponent;
