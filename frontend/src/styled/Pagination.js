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

export default {
  PageButton,
  PaginationContainer,
  ArrowButton
}