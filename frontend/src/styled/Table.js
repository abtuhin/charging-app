import styled from "styled-components";

const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 1px ${props => props.theme.colors.BORDER} solid;
`

const Info = styled.div`
  min-width: 15%;
`;

export default {
  ItemContainer,
  Info
}