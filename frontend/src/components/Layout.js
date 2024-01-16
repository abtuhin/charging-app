import styled from "styled-components";

const SortFilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TableContainer = styled.div`
  border: 1px solid ${props => props.theme.colors.BORDER};
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export default {
  SortFilterContainer,
  TableContainer
}