import styled from "styled-components";

const TableContainer = styled.div`
  border: 1px solid ${props => props.theme.colors.BORDER};
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const SortOrderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export default {
  SortOrderContainer,
  TableContainer
}