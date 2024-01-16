import styled from "styled-components";
import Text from "./Text";

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

const Header = () => {
  return (
    <ItemContainer>
      <Info><Text.TextSmallBold>Session ID</Text.TextSmallBold></Info>
      <Info><Text.TextSmallBold>Vehicle ID</Text.TextSmallBold></Info>
      <Info><Text.TextSmallBold>Start Time</Text.TextSmallBold></Info>
      <Info><Text.TextSmallBold>End Time</Text.TextSmallBold></Info>
      <Info><Text.TextSmallBold>Total Cost</Text.TextSmallBold></Info>
    </ItemContainer>
  );
}

const Item = ({ record }) => {
  return (
    <ItemContainer>
      <Info><Text.TextSmallBold>{record.sessionId}</Text.TextSmallBold></Info>
      <Info><Text.TextSmallBold>{record.vehicleId}</Text.TextSmallBold></Info>
      <Info><Text.TextSmallBold>{record.start}</Text.TextSmallBold></Info>
      <Info><Text.TextSmallBold>{record.end}</Text.TextSmallBold></Info>
      <Info><Text.TextSmallBold>{record.totalCost}</Text.TextSmallBold></Info>
    </ItemContainer>
  );
}

export default {
  Item,
  Header,
};