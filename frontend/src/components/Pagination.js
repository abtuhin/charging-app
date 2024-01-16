import React from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PageButton = styled.button`
  padding: 8px 12px;
  margin: 0 4px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${({ active }) => (active ? '#f0f0f0' : '#fff')};
  outline: none;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const Ellipsis = styled.span`
  margin: 0 4px;
`;

const ArrowButton = styled.button`
  padding: 8px;
  font-size: 14px;
  cursor: pointer;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const renderPageButtons = () => {
    const buttons = [];
  
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <PageButton key={i} active={i === currentPage} onClick={() => onPageChange(i)}>
          {i}
        </PageButton>
      );
    }
  
    return buttons;
  };

  return (
    <PaginationContainer>
      <ArrowButton disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>
        &lt;
      </ArrowButton>
      {renderPageButtons()}
      <ArrowButton disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)}>
        &gt;
      </ArrowButton>
    </PaginationContainer>
  );
};

export default Pagination;
