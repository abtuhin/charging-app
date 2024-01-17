import styled from 'styled-components';

const SortContainer = styled.div`
  margin: 16px;
`;

const SortDropdown = styled.select`
  padding: 8px;
  font-size: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
`;

const RadioContainer = styled.div`
  display: flex;
  gap: 16px;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const RadioInput = styled.input`
  margin-right: 8px;
`;

const RadioText = styled.span`
  font-size: 12px;
`;

export default {
  SortContainer,
  SortDropdown,
  RadioContainer,
  RadioInput,
  RadioLabel,
  RadioText
}