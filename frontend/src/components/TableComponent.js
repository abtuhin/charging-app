import Table from "@/styled/Table";
import Text from "@/styled/Text";

export const TableHeader = () => {
  return (
    <Table.ItemContainer>
      <Table.Info><Text.TextSmallBold>Session ID</Text.TextSmallBold></Table.Info>
      <Table.Info><Text.TextSmallBold>Vehicle ID</Text.TextSmallBold></Table.Info>
      <Table.Info><Text.TextSmallBold>Start Time</Text.TextSmallBold></Table.Info>
      <Table.Info><Text.TextSmallBold>End Time</Text.TextSmallBold></Table.Info>
      <Table.Info><Text.TextSmallBold>Total Cost</Text.TextSmallBold></Table.Info>
    </Table.ItemContainer>
  );
}

export const TableItem = ({ record }) => {
  return (
    <Table.ItemContainer>
      <Table.Info><Text.TextSmallBold>{record.sessionId}</Text.TextSmallBold></Table.Info>
      <Table.Info><Text.TextSmallBold>{record.vehicleId}</Text.TextSmallBold></Table.Info>
      <Table.Info><Text.TextSmallBold>{record.start}</Text.TextSmallBold></Table.Info>
      <Table.Info><Text.TextSmallBold>{record.end}</Text.TextSmallBold></Table.Info>
      <Table.Info><Text.TextSmallBold>{record.totalCost}</Text.TextSmallBold></Table.Info>
    </Table.ItemContainer>
  );
}